import React, { useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { renderToString } from "react-dom/server";
import {
  FaFire,
  FaTree,
  FaWater,
  FaCloudRain,
  FaMountain,
  FaSun,
  FaIndustry,
  FaMountain as FaLandslide,
  FaGlobe,
  FaWind,
  FaSnowflake,
  FaSwimmingPool,
} from "react-icons/fa";

const defaultCenter = [20, 0]; // Changed to better world view
const defaultZoom = 2;

const typeToIcon = {
  wildfire: FaFire,
  deforestation: FaTree,
  flood: FaWater,
  storm: FaCloudRain,
  volcano: FaMountain,
  drought: FaSun,
  pollution: FaIndustry,
  landslide: FaLandslide,
  earthquake: FaGlobe,
  cyclone: FaWind,
  snowstorm: FaSnowflake,
  tsunami: FaSwimmingPool,
};

function FitToMarkers({ events }) {
  const map = useMap();
  
  useEffect(() => {
    // Small delay to ensure map is fully initialized
    const timer = setTimeout(() => {
      if (!events || events.length === 0) {
        map.setView(defaultCenter, defaultZoom);
        return;
      }
      
      if (events.length === 1) {
        const e = events[0];
        map.setView([e.lat, e.lng], 5);
        return;
      }
      
      // Fit bounds to all markers
      const bounds = L.latLngBounds(events.map(e => [e.lat, e.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 5 });
    }, 100);

    return () => clearTimeout(timer);
  }, [events, map]);
  
  return null;
}

function reactIconIcon(IconComponent, selected) {
  const html = renderToString(
    <div className={`react-icon-marker ${selected ? "selected" : ""}`}>
      <IconComponent size={20} />
    </div>
  );

  return L.divIcon({
    html,
    className: "react-icon-div-icon",
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
  });
}

export default function MapView({ year, events, selectedId, onSelect }) {
  const markers = useMemo(
    () =>
      events.map((e) => ({
        ...e,
        icon: typeToIcon[e.type] || FaGlobe,
      })),
    [events]
  );

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      minZoom={2}
      maxZoom={10}
      style={{ height: "100%", width: "100%", background: "#0b1220" }}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      dragging={true}
      zoomControl={true}
      preferCanvas={true}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains={["a", "b", "c", "d"]}
      />

      <FitToMarkers events={markers} />

      {markers.map((e) => (
        <Marker
          key={e.id}
          position={[e.lat, e.lng]}
          icon={reactIconIcon(e.icon, e.id === selectedId)}
          eventHandlers={{
            click: () => onSelect?.(e.id),
          }}
        >
          <Popup>
            <div className="popup">
              <div className="popup-title">{e.title}</div>
              <div className="popup-meta">{e.type} • {year}</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}