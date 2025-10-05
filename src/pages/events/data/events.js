export const EVENT_TYPES = [
  'wildfire',
  'deforestation',
  'flood',
  'storm',
  'volcano',
  'drought',
  'pollution',
  'landslide',
  'earthquake',
  'cyclone',
  'snowstorm',
  'tsunami',
]

export const typeToEmoji = {
  wildfire: '🔥',
  deforestation: '🌲',
  flood: '🌊',
  storm: '⛈️',
  volcano: '🌋',
  drought: '☀️',
  pollution: '🏭',
  landslide: '⛰️',
  earthquake: '🌐',
  cyclone: '🌀',
  snowstorm: '❄️',
  tsunami: '🌊',
}


export const typeToLabel = {
  wildfire: 'Wildfire',
  deforestation: 'Deforestation',
  flood: 'Flood',
  storm: 'Severe Storm',
  volcano: 'Volcano',
  drought: 'Drought',
  pollution: 'Air Pollution',
  landslide: 'Landslide',
  earthquake: 'Earthquake',
  cyclone: 'Cyclone',
  snowstorm: 'Snowstorm',
  tsunami: 'Tsunami',
}

const mk = (id, { type, title, year, lat, lng, region, imageSeed, summary, nasaImage }) => ({
  id,
  type,
  title,
  year,
  lat,
  lng,
  region,
  image: nasaImage || `https://picsum.photos/seed/${encodeURIComponent(imageSeed || title)}/800/450`,
  summary,
  source: 'Dummy TERRA-like dataset (hackathon demo)',
  emoji: typeToEmoji[type],
})

// Curated featured events (real/popular names used as labels; locations are approximate; still demo data)
// ---------- GENERATED EVENTS 2005 - 2025 (split by year, generic region centroids) ----------

// 2005
const EVENTS_2005 = [
  mk('e2005-a', {
    type: 'flood',
    title: 'Hurricane Katrina',
    year: 2005,
    lat: 29.9,
    lng: -90.1,
    region: 'USA (Gulf Coast)',
    imageSeed: '2005-katrina',
    summary: 'Hurricane Katrina struck the Gulf Coast in late August 2005, causing catastrophic flooding in New Orleans after levee failures. Storm surge inundated vast areas of Louisiana and Mississippi, while winds devastated coastal infrastructure. NASA satellites captured massive cloud spirals and submerged urban areas. The disaster became one of the costliest and deadliest hurricanes in U.S. history.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/15000/15389/Katrina.A2005236.1550.250m.jpg'
  }),

  mk('e2005-b', {
    type: 'flood',
    title: 'South Asian Monsoon Floods',
    year: 2005,
    lat: 23,
    lng: 80,
    region: 'India/Nepal/Bangladesh',
    imageSeed: '2005-monsoon',
    summary: 'Heavy monsoon rains in 2005 triggered widespread flooding across India, Nepal, and Bangladesh. Rivers overflowed their banks, submerging villages, destroying crops, and displacing millions. NASA’s MODIS sensors tracked sediment plumes and swollen river systems from space. The floods highlighted the region’s vulnerability to annual monsoon extremes.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/15000/15102/india_amo_29aug05_250m.jpg'
  }),

  mk('e2005-c', {
    type: 'wildfire',
    title: 'Amazon Forest Fires',
    year: 2005,
    lat: -4,
    lng: -63,
    region: 'Amazon Basin, Brazil',
    imageSeed: '2005-amazonfires',
    summary: 'During the 2005 dry season, vast areas of the Amazon Basin experienced intense burning. Satellite imagery showed thousands of thermal anomalies and smoke plumes stretching across northern Brazil. Drought conditions linked to Atlantic Ocean warming exacerbated the fires. The event marked one of the first major Amazon drought-fire episodes of the 21st century.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/15000/15226/Alta_Floresta.AMOA2005220_lrg.jpg'
  }),

  mk('e2005-d', {
    type: 'earthquake',
    title: 'Kashmir Earthquake',
    year: 2005,
    lat: 33.5,
    lng: 73.5,
    region: 'Kashmir (Pakistan/India)',
    imageSeed: '2005-kashmir',
    summary: 'On October 8, 2005, a magnitude 7.6 earthquake struck northern Pakistan and parts of India, devastating towns in the Kashmir region. Landslides obliterated roads and villages in mountainous areas. NASA and USGS imagery mapped surface deformation and fault traces. Over 80,000 people were killed, making it one of South Asia’s worst natural disasters.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/35000/35576/kashmir_fault_trace_topography.jpg'
  }),

  mk('e2005-e', {
    type: 'storm',
    title: 'Hurricane Wilma',
    year: 2005,
    lat: 18,
    lng: -75,
    region: 'Caribbean / Mexico',
    imageSeed: '2005-wilma',
    summary: 'Hurricane Wilma became the most intense Atlantic hurricane ever recorded, with record-low central pressure. It struck the Yucatán Peninsula and later Florida, causing extensive wind and flood damage. NASA’s TRMM satellite observed the storm’s powerful eyewall and heavy rainfall distribution. Wilma capped one of the most active hurricane seasons on record.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/15000/15711/wilma_trmm_21oct05_lrg.jpg'
  }),

  mk('e2005-f', {
    type: 'drought',
    title: 'European Heatwave',
    year: 2005,
    lat: 50,
    lng: 10,
    region: 'Europe',
    imageSeed: '2005-europeheat',
    summary: 'Central Europe endured an extreme heatwave during summer 2005, with temperatures surpassing 40°C in several regions. The prolonged warmth stressed crops, reduced river flows, and fueled wildfires. NASA satellite data revealed large-scale vegetation browning and soil moisture deficits. The heatwave reinforced growing concerns about climate variability in Europe.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/17000/17094/weuropelsta_tmo_2006201_lrg.jpg'
  }),

  mk('e2005-g', {
    type: 'wildfire',
    title: 'California Wildfires',
    year: 2005,
    lat: 36.5,
    lng: -119,
    region: 'California, USA',
    imageSeed: '2005-cawildfires',
    summary: 'California’s 2005 fire season saw hundreds of blazes fueled by hot, dry Santa Ana winds. Satellite observations captured dense smoke plumes drifting across the Pacific Ocean. The fires consumed large swaths of chaparral and forest, forcing mass evacuations. NASA imagery documented both thermal hotspots and degraded air quality over major cities.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/91000/91427/california_air_2017345.png'
  }),

  mk('e2005-h', {
    type: 'drought',
    title: 'Sahel Drought',
    year: 2005,
    lat: 15,
    lng: 0,
    region: 'Sahel, Africa',
    imageSeed: '2005-sahel',
    summary: 'The Sahel region of Africa continued to experience chronic drought conditions in 2005. Vegetation cover declined sharply, and NASA’s MODIS data revealed stressed savannas from Senegal to Chad. Reduced rainfall led to crop failures and livestock deaths. The event exemplified the ongoing challenges of desertification and food insecurity in the region.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/39000/39363/africandvia_avh_200906_lrg.jpg'
  }),

  mk('e2005-i', {
    type: 'pollution',
    title: 'Indonesian Haze Crisis',
    year: 2005,
    lat: -2,
    lng: 118,
    region: 'Indonesia',
    imageSeed: '2005-haze',
    summary: 'Severe haze blanketed Southeast Asia in 2005, caused by widespread peatland and forest fires in Indonesia. The smoke disrupted air travel, closed schools, and affected neighboring countries like Malaysia and Singapore. NASA satellites tracked massive aerosol clouds and fire hotspots. The event underscored the ecological toll of illegal land clearing.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/81000/81706/indonesia_oli_2013176.jpg'
  }),

  mk('e2005-j', {
    type: 'storm',
    title: 'Hurricane Rita',
    year: 2005,
    lat: 29.9,
    lng: -90.1,
    region: 'USA (Gulf Coast)',
    imageSeed: '2005-rita',
    summary: 'Following Katrina, Hurricane Rita hit the Gulf Coast in September 2005 as another major storm. Its powerful winds and storm surge flooded coastal Louisiana and Texas. Satellite imagery showed rapid intensification over the warm Gulf waters. Rita compounded the humanitarian crisis already underway in the hurricane-ravaged region.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/5000/5879/Rita_AMO_2005266_lrg.jpg'
  }),
];


// 2006
const EVENTS_2006 = [
  mk('e2006-a', { 
    type: 'pollution', 
    title: 'Northwest Africa Dust Storm', 
    year: 2006, 
    lat: 24, 
    lng: 12, 
    region: 'North Africa', 
    imageSeed: '2006-dust-nwa', 
    summary: 'A massive Saharan dust plume was transported over northwestern Africa, reducing air quality and visibility. Satellite imagery tracked dust movement, plume thickness, and regional atmospheric effects, providing data for climate, air quality, and health impact studies.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/17000/17667/sahara_tmo_2006325_lrg.jpg'
  }),

  mk('e2006-b', { 
    type: 'flood', 
    title: 'Indian Monsoon Floods', 
    year: 2006, 
    lat: 23, 
    lng: 80, 
    region: 'India', 
    imageSeed: '2006-indiamonsoon', 
    summary: 'Heavy seasonal monsoon rains caused widespread flooding in lowland districts of India, affecting homes, infrastructure, and agricultural lands. Satellite imagery captured water extent, river overflows, and floodplain dynamics, aiding disaster response and flood mitigation planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/16000/16755/Orissa_TMO_2006165_lrg.jpg'
  }),

  mk('e2006-c', { 
    type: 'storm', 
    title: 'US Tornado Outbreak', 
    year: 2006, 
    lat: 38, 
    lng: -97, 
    region: 'USA (Midwest)', 
    imageSeed: '2006-tornado', 
    summary: 'High-intensity convective storms produced a series of tornadoes across the U.S. Midwest. Satellite imagery and radar data captured tornado tracks, storm cell development, and damage patterns, supporting emergency management, risk assessment, and disaster preparedness efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/16000/16467/tennesse_trmm_2006098_lrg.jpg'
  }),

  mk('e2006-d', { 
    type: 'landslide', 
    title: 'Philippine Leyte Landslides', 
    year: 2006, 
    lat: 11.2, 
    lng: 125, 
    region: 'Leyte Island, Philippines', 
    imageSeed: '2006-leyte', 
    summary: 'Heavy rains triggered landslides and mass-wasting events in the upland regions of Leyte Island. Satellite imagery captured slope failures, displaced soil deposits, and impacted communities, providing crucial information for disaster relief and slope stability monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/16000/16144/leyte_ast_2006052_lrg.jpg'
  }),

  mk('e2006-e', { 
    type: 'drought', 
    title: 'US Midwest Drought', 
    year: 2006, 
    lat: 41.5, 
    lng: -93.5, 
    region: 'Midwest, USA', 
    imageSeed: '2006-midwestdrought', 
    summary: 'Extended dry conditions led to low soil moisture and stressed cropland across the U.S. Midwest. Satellite-derived vegetation indices monitored drought severity, crop stress, and impacted agricultural productivity, aiding water resource management and drought mitigation.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/16000/16249/usrainfallanom_trm_200601.png'
  }),

  mk('e2006-f', { 
    type: 'storm', 
    title: 'European Windstorm Kyrill', 
    year: 2006, 
    lat: 50, 
    lng: 10, 
    region: 'Central Europe', 
    imageSeed: '2006-kyrill', 
    summary: 'Windstorm Kyrill swept across western and central Europe, causing widespread structural damage and forest loss. Satellite observations captured the storm trajectory, affected regions, and damage patterns, supporting meteorological analysis and disaster response.',
    nasaImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KiOa6wFlqiXxDx1Lm1Y5daQlR-NrC1KUPw&s'
  }),

  mk('e2006-g', { 
    type: 'drought', 
    title: 'Heatwave France/Spain', 
    year: 2006, 
    lat: 46, 
    lng: 2, 
    region: 'France/Spain', 
    imageSeed: '2006-heat-frsp', 
    summary: 'A severe heatwave caused prolonged elevated temperatures and heat stress across France and Spain. Satellite data monitored surface temperatures, heat-affected zones, and vegetation stress, supporting climate studies and public health monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/17000/17094/weuropelsta_tmo_2006201_lrg.jpg'
  }),

  mk('e2006-h', { 
    type: 'volcano', 
    title: 'Mount Merapi Eruption', 
    year: 2006, 
    lat: -7.5, 
    lng: 110.4, 
    region: 'Central Java, Indonesia', 
    imageSeed: '2006-merapi', 
    summary: 'Mount Merapi erupted, producing ash emissions and proximal tephra deposits. Satellite imagery captured the ash cloud, deposit spread, and potential hazards to nearby settlements, aiding volcanic monitoring and early warning systems.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/6000/6635/merapi_ast_2006157_lrg.jpg'
  }),

  mk('e2006-i', { 
    type: 'pollution', 
    title: 'Taklimakan Dust Event', 
    year: 2006, 
    lat: 40.1, 
    lng: 82.9, 
    region: 'Taklimakan Desert, China', 
    imageSeed: '2006-taklimakan', 
    summary: 'Severe dust event over the Taklimakan Desert reduced visibility and affected air quality over interior Asia. Satellite imagery provided detailed observations of dust transport, thickness, and regional atmospheric effects, contributing to air quality monitoring and climate research.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/17000/17049/taklimakan_amo_2006207_lrg.jpg'
  }),

  mk('e2006-j', { 
    type: 'flood', 
    title: 'Sudan Floods', 
    year: 2006, 
    lat: 12.5, 
    lng: 30.0, 
    region: 'Sudan', 
    imageSeed: '2006-sudanfloods', 
    summary: 'Seasonal riverine flooding caused extensive inundation across low-lying plains in Sudan. Satellite imagery captured the spatial extent, water accumulation, and affected communities, supporting humanitarian relief, flood risk assessment, and disaster response planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/17000/17205/Sudan_AMO_2006226_lrg.jpg'
  }),
]


// 2007
const EVENTS_2007 = [
  mk('e2007-a', { 
    type: 'flood', 
    title: 'Uruguay Floods', 
    year: 2007, 
    lat: -32.5, 
    lng: -56, 
    region: 'Uruguay', 
    imageSeed: '2007-uruguay', 
    summary: 'Heavy rainfall caused significant river flooding in Uruguay, leading to urban inundation in low-lying areas and affecting local communities. Satellite imagery captured the flood extent, river overflow, and impacted settlements, supporting disaster response and flood mitigation efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/9000/9473/Uruguay_M2002117_lrg.jpg'
  }),

  mk('e2007-b', { 
    type: 'flood', 
    title: 'Sudan Flooding', 
    year: 2007, 
    lat: 12.5, 
    lng: 30.0, 
    region: 'Sudan', 
    imageSeed: '2007-sudan', 
    summary: 'Seasonal heavy rains triggered widespread flooding across Sudan, impacting agriculture, settlements, and livelihoods. Satellite imagery tracked water coverage, inundated zones, and terrain changes, aiding humanitarian relief planning and early warning for affected regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/9000/9473/Uruguay_M2002117_lrg.jpg'
  }),

  mk('e2007-c', { 
    type: 'flood', 
    title: 'Myanmar Floods', 
    year: 2007, 
    lat: 21.9, 
    lng: 95.9, 
    region: 'Myanmar', 
    imageSeed: '2007-myanmar', 
    summary: 'Monsoon rains caused flooding across major river basins in Myanmar, affecting rural communities and agricultural lands. Satellite imagery captured the spatial extent of inundation, water accumulation, and impacts on settlements, assisting in disaster response and flood risk mapping.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/18000/18371/Myanmar_TMO_2007128_lrg.jpg'
  }),

  mk('e2007-d', { 
    type: 'wildfire', 
    title: 'Australian Bushfires', 
    year: 2007, 
    lat: -25, 
    lng: 147, 
    region: 'Australia', 
    imageSeed: '2007-ausfires', 
    summary: 'Multiple bushfire hotspots erupted across southeastern Australia, producing widespread smoke plumes and threatening communities. Satellite imagery provided real-time fire detection, burned area mapping, and smoke plume monitoring, aiding firefighting efforts and public safety measures.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/19000/19014/waust_AMO_2007248_lrg.jpg'
  }),

  mk('e2007-e', { 
    type: 'cyclone', 
    title: 'Cyclone Sidr (Bangladesh)', 
    year: 2007, 
    lat: 23.6, 
    lng: 90.5, 
    region: 'Bangladesh', 
    imageSeed: '2007-sidr', 
    summary: 'Cyclone Sidr struck the Bengal delta, generating a powerful storm surge that inundated coastal regions and caused inland flooding. Satellite imagery captured storm structure, inundation extent, and impacted villages, supporting disaster assessment, emergency planning, and humanitarian relief.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/19000/19319/sidr_tmo_2007318_lrg.jpg'
  }),

  mk('e2007-f', { 
    type: 'wildfire', 
    title: 'Sumatra Fires', 
    year: 2007, 
    lat: -2, 
    lng: 101.0, 
    region: 'Sumatra, Indonesia', 
    imageSeed: '2007-sumatrafires', 
    summary: 'Extensive peatland and forest fires in Sumatra caused transboundary haze, affecting air quality in Southeast Asia. Satellite imagery detected active fire locations, smoke plumes, and burned areas, assisting environmental monitoring and air pollution tracking.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/19000/19129/Sumatra_AMO_2007266_lrg.jpg'
  }),

  mk('e2007-g', { 
    type: 'pollution', 
    title: 'Taklimakan Dust Storm', 
    year: 2007, 
    lat: 40.1, 
    lng: 82.9, 
    region: 'Taklimakan Desert', 
    imageSeed: '2007-taklimakan', 
    summary: 'A massive dust storm swept across the Taklimakan Desert, reducing surface visibility and affecting atmospheric conditions over interior Asia. Satellite observations captured dust transport, affected regions, and dispersion patterns, providing valuable data for air quality and climate monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/18000/18368/taklimakan_tmo_2007130_lrg.jpg'
  }),

  mk('e2007-h', { 
    type: 'earthquake', 
    title: 'Peru Earthquake', 
    year: 2007, 
    lat: -9.0, 
    lng: -77.5, 
    region: 'Peru', 
    imageSeed: '2007-peruquake', 
    summary: 'A moderate-magnitude earthquake struck Peru, causing localized structural damage, surface disruption, and triggering landslides in hilly terrain. Satellite imagery provided detailed observations of affected areas, infrastructure damage, and terrain changes, supporting emergency response planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/7000/7965/peru_earthquake_2007228_lrg.jpg'
  }),

  mk('e2007-i', { 
    type: 'flood', 
    title: 'UK Summer Floods', 
    year: 2007, 
    lat: 54, 
    lng: -3, 
    region: 'UK', 
    imageSeed: '2007-ukfloods', 
    summary: 'Extreme rainfall events caused river overbank flooding across regions of the UK, leading to urban and rural inundation. Satellite imagery captured water extent, affected infrastructure, and floodplain dynamics, assisting in disaster response, insurance assessment, and flood mitigation planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/83000/83157/bristol_oli_2013308_lrg.jpg'
  }),

  mk('e2007-j', { 
    type: 'wildfire', 
    title: 'California Wildfires', 
    year: 2007, 
    lat: 36.5, 
    lng: -119, 
    region: 'California, USA', 
    imageSeed: '2007-cawildfires', 
    summary: 'Active wildfire fronts ignited across California, producing extensive smoke plumes and threatening populated areas. Satellite imagery tracked fire locations, spread, and intensity, providing critical information for firefighting operations, air quality monitoring, and public safety.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/19000/19225/La_Jolla_AMO_2007297_lrg.jpg'
  }),
]


// 2008
const EVENTS_2008 = [
  mk('e2008-a', { 
    type: 'earthquake', 
    title: 'Sichuan Earthquake', 
    year: 2008, 
    lat: 31.0, 
    lng: 103.4, 
    region: 'Sichuan, China', 
    imageSeed: '2008-sichuan', 
    summary: 'A powerful magnitude 7.9 earthquake struck Sichuan, China, causing massive structural collapse, landslides, and casualties in densely populated mountainous areas. Satellite imagery captured widespread landslides, damaged infrastructure, disrupted transportation networks, and post-event urban and rural impacts. Observations supported disaster response, damage assessment, and planning for reconstruction.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/19000/19947/sichuan_srtm_2008140.jpg'
  }),

  mk('e2008-b', { 
    type: 'cyclone', 
    title: 'Cyclone Nargis', 
    year: 2008, 
    lat: 16.8, 
    lng: 95.4, 
    region: 'Myanmar (Irrawaddy Delta)', 
    imageSeed: '2008-nargis', 
    summary: 'Cyclone Nargis struck Myanmar’s Irrawaddy Delta with devastating force, generating a massive storm surge that inundated vast low-lying regions. Thousands of lives were lost and critical infrastructure was destroyed. Satellite imagery captured coastal flooding, water extent, and post-storm landscape changes, providing critical information for humanitarian aid and recovery planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/19000/19863/nargis_trmm_2008124_lrg.jpg'
  }),

  mk('e2008-c', { 
    type: 'flood', 
    title: 'Orissa Floods', 
    year: 2008, 
    lat: 20.9, 
    lng: 85.1, 
    region: 'Odisha (Orissa), India', 
    imageSeed: '2008-orissa', 
    summary: 'Heavy monsoon rains caused riverine and coastal flooding in Odisha, India, affecting thousands of people and inundating agricultural lands. Satellite observations captured the extent of flooding, water accumulation, and changes in land cover, supporting disaster management and relief operations.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/35000/35390/Mahanadi_TMO_2008251_lrg.jpg'
  }),

  mk('e2008-d', { 
    type: 'flood', 
    title: 'Gulf Coast / Mexico Floods', 
    year: 2008, 
    lat: 18, 
    lng: -95, 
    region: 'Gulf Coast, Mexico', 
    imageSeed: '2008-gulfcoast', 
    summary: 'Heavy rainfall and coastal storms caused flooding and overwash along the Gulf Coast of Mexico. Satellite imagery revealed inundated regions, affected settlements, and coastal morphology changes. The data supported emergency response, flood mapping, and post-event recovery planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/35000/35379/houston_tmo_2008261_lrg.jpg'
  }),

  mk('e2008-e', { 
    type: 'flood', 
    title: 'US Midwest Floods', 
    year: 2008, 
    lat: 41.5, 
    lng: -93.5, 
    region: 'Midwest, USA', 
    imageSeed: '2008-midwestfloods', 
    summary: 'Persistent heavy rainfall and elevated river levels led to flooding across the U.S. Midwest, inundating farmland and disrupting communities. Satellite imagery captured flood extent, water spread, and changes in vegetation, supporting flood response and agricultural damage assessment.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/20000/20044/Midwest_TMO_2008169_lrg.jpg'
  }),

  mk('e2008-f', { 
    type: 'storm', 
    title: 'European Windstorm Emma', 
    year: 2008, 
    lat: 50, 
    lng: 10, 
    region: 'Europe', 
    imageSeed: '2008-emma', 
    summary: 'Windstorm Emma swept across Europe with strong extratropical winds, causing power outages, property damage, and coastal impacts. Satellite imagery captured cloud patterns, wind-affected regions, and storm progression, aiding meteorological studies and disaster mitigation planning.',
    nasaImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Orkan_Emma_29._Februar_2008_12-00_UTC.png'
  }),

  mk('e2008-g', { 
    type: 'volcano', 
    title: 'Chaitén Eruption', 
    year: 2008, 
    lat: -42.8, 
    lng: -72.7, 
    region: 'Chaitén, Chile', 
    imageSeed: '2008-chaiten', 
    summary: 'The Chaitén volcano in Chile erupted explosively, producing high ash plumes that affected air traffic and deposited tephra over surrounding landscapes. Satellite imagery tracked ash dispersion, deposition zones, and environmental impact, assisting hazard monitoring and public safety measures.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/19000/19887/Chile_TMO_2008124_lrg.jpg'
  }),

  mk('e2008-h', { 
    type: 'wildfire', 
    title: 'California Wildfires', 
    year: 2008, 
    lat: 36.5, 
    lng: -119, 
    region: 'California, USA', 
    imageSeed: '2008-cawildfires', 
    summary: 'Multiple active wildfire hotspots emerged in California, fueled by dry conditions and high temperatures. Satellite imagery captured fire locations, smoke plumes, and burned area extent, supporting firefighting strategies and air quality monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/20000/20108/california_amo_2008184_lrg.jpg'
  }),

  mk('e2008-i', { 
    type: 'storm', 
    title: 'Hurricane Ike', 
    year: 2008, 
    lat: 27.7, 
    lng: -81.0, 
    region: 'Caribbean / USA', 
    imageSeed: '2008-ike', 
    summary: 'Hurricane Ike was a large, intense tropical cyclone affecting the Caribbean and U.S. Gulf Coast, causing extensive wind and flood damage. Satellite imagery captured storm structure, coastal inundation, and the path of the hurricane, aiding disaster preparedness and impact assessment.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/35000/35349/ike_tmo_2008255_lrg.jpg'
  }),

  mk('e2008-j', { 
    type: 'wildfire', 
    title: 'Australian Bushfires', 
    year: 2008, 
    lat: -25, 
    lng: 147, 
    region: 'Australia', 
    imageSeed: '2008-ausfires', 
    summary: 'Seasonal bushfires in Australia produced widespread smoke plumes and burned large tracts of vegetation. Satellite imagery monitored fire hotspots, smoke dispersion, and affected regions, supporting environmental monitoring and firefighting efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/20000/20354/Australia_AMO_2008230_lrg.jpg'
  }),
]


// 2009
const EVENTS_2009 = [
  mk('e2009-a', { 
    type: 'wildfire', 
    title: 'Black Saturday Bushfires', 
    year: 2009, 
    lat: -37.8, 
    lng: 144.9, 
    region: 'Victoria, Australia', 
    imageSeed: '2009-black-saturday', 
    summary: 'Extreme bushfires swept through Victoria, Australia, resulting in massive burn scars, extensive property damage, and loss of life. Satellite imagery captured fire extent, burn severity, and smoke plumes, aiding disaster response and environmental monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/37000/37020/bright_ali_2009041_lrg.jpg'
  }),

  mk('e2009-b', { 
    type: 'flood', 
    title: 'Red River Floods', 
    year: 2009, 
    lat: 47.0, 
    lng: -97.0, 
    region: 'USA/Canada (Red River)', 
    imageSeed: '2009-redriver', 
    summary: 'Springtime snowmelt and rainfall caused severe flooding along the Red River, inundating floodplains and affecting urban and rural communities. Satellite imagery captured flood extent, river overflow, and impacted areas, aiding mitigation and emergency planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146616/redriver_oli_2015122_lrg.jpg'
  }),

  mk('e2009-c', { 
    type: 'earthquake', 
    title: 'Sumatra Earthquake', 
    year: 2009, 
    lat: 0.9, 
    lng: 98.8, 
    region: 'Sumatra, Indonesia', 
    imageSeed: '2009-sumatraquake', 
    summary: 'A strong offshore earthquake struck near Sumatra, Indonesia, generating tsunami warnings and coastal shaking. Satellite imagery captured regional terrain and coastal areas, supporting risk assessment and emergency response.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/40000/40537/southsumatra_srt_2009273_lrg.jpg'
  }),

  mk('e2009-d', { 
    type: 'storm', 
    title: 'Typhoon Morakot', 
    year: 2009, 
    lat: 23.5, 
    lng: 121.0, 
    region: 'Taiwan / China', 
    imageSeed: '2009-morakot', 
    summary: 'Typhoon Morakot brought record-breaking rainfall to Taiwan, causing catastrophic landslides and severe flooding. Satellite data captured rainfall patterns, flood extent, and affected terrain for disaster management.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/39000/39741/Morakot_AMO_2009221_lrg.jpg'
  }),

  mk('e2009-e', { 
    type: 'tsunami', 
    title: 'Samoa Earthquake & Tsunami', 
    year: 2009, 
    lat: -13.7, 
    lng: -172.5, 
    region: 'Samoa', 
    imageSeed: '2009-samoa', 
    summary: 'A powerful offshore earthquake triggered a tsunami affecting Samoa and nearby Pacific islands. Satellite imagery tracked coastal inundation, land impacts, and post-event damage assessment.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/40000/40532/samoaquake_srt_2009272_lrg.jpg'
  }),

  mk('e2009-f', { 
    type: 'storm', 
    title: 'Philippines Storms & Landslides', 
    year: 2009, 
    lat: 12.0, 
    lng: 122.0, 
    region: 'Philippines', 
    imageSeed: '2009-phstorms', 
    summary: 'Tropical storms caused heavy rainfall, triggering floods and landslides across the Philippines. Satellite imagery captured flood-affected regions, landslide zones, and urban impacts, supporting relief operations.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/14000/14243/philippine_TRM_2004338_lrg.jpg'
  }),

  mk('e2009-g', { 
    type: 'flood', 
    title: 'Alaska-Yukon Flood', 
    year: 2009, 
    lat: 64.0, 
    lng: -150.0, 
    region: 'Alaska/Yukon', 
    imageSeed: '2009-akyukon', 
    summary: 'Spring snowmelt and heavy precipitation led to widespread flooding in Alaska and Yukon territories. Satellite imagery captured river overflow, floodplains, and impacted communities for disaster monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/81000/81227/Bonanza_Creek_tmo_2013148_lrg.jpg'
  }),

  mk('e2009-h', { 
    type: 'pollution', 
    title: 'Sydney Dust Event', 
    year: 2009, 
    lat: -33.9, 
    lng: 151.2, 
    region: 'Sydney, Australia', 
    imageSeed: '2009-sydneydust', 
    summary: 'Severe dust storms reduced visibility and urban air quality in Sydney. Satellite imagery captured dust transport, affected areas, and meteorological conditions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/12000/12414/Australia2_TMO2003301_lrg.jpg'
  }),

  mk('e2009-i', { 
    type: 'flood', 
    title: 'Jakarta Floods', 
    year: 2009, 
    lat: -6.2, 
    lng: 106.8, 
    region: 'Jakarta, Indonesia', 
    imageSeed: '2009-jakarta', 
    summary: 'Heavy rainfall combined with tidal effects caused flooding in densely populated Jakarta. Satellite imagery captured inundation areas, drainage issues, and urban impacts, supporting emergency response.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146113/indonesia_aria_20192_lrg.jpg'
  }),

  mk('e2009-j', { 
    type: 'wildfire', 
    title: 'California Wildfires', 
    year: 2009, 
    lat: 36.5, 
    lng: -119, 
    region: 'California, USA', 
    imageSeed: '2009-cawildfires', 
    summary: 'Multiple wildfire outbreaks in California produced active fire fronts and smoke plumes affecting large areas. Satellite imagery tracked fire hotspots and progression, aiding firefighting and air quality monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/6000/6749/Fresno.AMO2006194_lrg.jpg'
  }),
]


// 2010
const EVENTS_2010 = [
  mk('e2010-a', { 
    type: 'earthquake', 
    title: 'Haiti Earthquake', 
    year: 2010, 
    lat: 18.5, 
    lng: -72.3, 
    region: 'Haiti', 
    imageSeed: '2010-haiti', 
    summary: 'A catastrophic earthquake struck near Port-au-Prince, causing massive urban collapse, thousands of fatalities, and widespread displacement. Satellite imagery highlighted structural damage, urban destruction, and affected neighborhoods. Data aided emergency response and reconstruction planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/42000/42538/karachi_ali_2010008_lrg.jpg'
  }),

  mk('e2010-b', { 
    type: 'earthquake', 
    title: 'Chile Earthquake', 
    year: 2010, 
    lat: -36.5, 
    lng: -72.0, 
    region: 'Central Chile', 
    imageSeed: '2010-chilequake', 
    summary: 'A powerful megathrust earthquake generated tsunamis along the Chilean coast, damaging infrastructure and homes. Satellite data captured coastal inundation, structural damage patterns, and regional impacts, supporting disaster response and post-quake reconstruction.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/43000/43123/chile_geb_2010071.jpg'
  }),

  mk('e2010-c', { 
    type: 'pollution', 
    title: 'Deepwater Horizon Oil Spill', 
    year: 2010, 
    lat: 28.7, 
    lng: -88.3, 
    region: 'Gulf of Mexico', 
    imageSeed: '2010-deepwater', 
    summary: 'A massive oil spill occurred after the Deepwater Horizon rig explosion, severely affecting marine and coastal ecosystems. Satellite imagery tracked the oil slick spread, shoreline contamination, and impacted wetlands, aiding environmental monitoring and cleanup efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/43000/43877/gulf_amo_2010124_lrg.jpg'
  }),

  mk('e2010-d', { 
    type: 'flood', 
    title: 'Pakistan Super-Floods', 
    year: 2010, 
    lat: 30.0, 
    lng: 70.0, 
    region: 'Pakistan', 
    imageSeed: '2010-pakistanfloods', 
    summary: 'Monsoon flooding affected millions and inundated vast agricultural lands. Satellite imagery mapped flood extents, river overflow, and areas requiring relief, supporting humanitarian aid and risk management.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/45000/45091/pakistan_amo_2010220_lrg.jpg'
  }),

  mk('e2010-e', { 
    type: 'wildfire', 
    title: 'Russian Wildfires and Heatwave', 
    year: 2010, 
    lat: 55.8, 
    lng: 37.6, 
    region: 'Western Russia', 
    imageSeed: '2010-russiafires', 
    summary: 'Record-breaking heatwaves fueled widespread wildfires across Western Russia. Satellite imagery captured fire hotspots, smoke plumes, and impacted vegetation. Data assisted in air quality monitoring and disaster response.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/45000/45069/russialsta_tmo_2010208_lrg.jpg'
  }),

  mk('e2010-f', { 
    type: 'volcano', 
    title: 'Eyjafjallajökull Eruption', 
    year: 2010, 
    lat: 63.6, 
    lng: -19.6, 
    region: 'Iceland', 
    imageSeed: '2010-eyjafjalla', 
    summary: 'Eruption of Eyjafjallajökull volcano sent ash clouds across Europe, disrupting air travel for weeks. Satellite imagery captured ash plume dispersal, atmospheric effects, and deposition patterns, aiding aviation safety and hazard monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/43000/43684/Germany_TMO_2010106_lrg.jpg'
  }),

  mk('e2010-g', { 
    type: 'storm', 
    title: 'US Midwest Tornado Outbreak', 
    year: 2010, 
    lat: 38, 
    lng: -97, 
    region: 'Midwest, USA', 
    imageSeed: '2010-midwesttornado', 
    summary: 'Severe convective storms generated multiple destructive tornadoes across the Midwest. Satellite imagery tracked storm development, tornado paths, and affected land, supporting emergency management and damage assessment.',
    nasaImage: ''
  }),

  mk('e2010-h', { 
    type: 'storm', 
    title: 'Hurricane Igor', 
    year: 2010, 
    lat: 18.0, 
    lng: -50.0, 
    region: 'Atlantic', 
    imageSeed: '2010-igor', 
    summary: 'A long-lived Atlantic hurricane impacted ocean and coastal regions. Satellite observations monitored storm intensity, rainfall, and movement, aiding early warning and maritime safety.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/77000/77308/tornadoes_goe_2012062_lrg.jpg'
  }),

  mk('e2010-i', { 
    type: 'flood', 
    title: 'Queensland Floods', 
    year: 2010, 
    lat: -23.0, 
    lng: 144.0, 
    region: 'Queensland, Australia', 
    imageSeed: '2010-queensland', 
    summary: 'Heavy rainfall caused widespread riverine flooding affecting urban and rural areas. Satellite imagery tracked water coverage, inundation zones, and post-flood recovery efforts, supporting emergency planning and disaster response.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/48000/48319/qsld_tmo_2010365_lrg.jpg'
  }),

  mk('e2010-j', { 
    type: 'flood', 
    title: 'China Floods and Landslides', 
    year: 2010, 
    lat: 30.0, 
    lng: 110.0, 
    region: 'China', 
    imageSeed: '2010-chinafloods', 
    summary: 'Intense monsoon rains caused severe flooding and landslides in central China. Satellite imagery monitored affected areas, slope failures, and inundation extent, aiding disaster response and mitigation efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/88000/88467/china_tmo_2016210.jpg'
  }),
]


// 2011
const EVENTS_2011 = [
  mk('e2011-a', { 
    type: 'earthquake', 
    title: 'Tohoku Earthquake & Tsunami', 
    year: 2011, 
    lat: 38.3, 
    lng: 142.4, 
    region: 'Japan (Tohoku)', 
    imageSeed: '2011-tohoku', 
    summary: 'A megathrust earthquake triggered a devastating tsunami along the Tohoku coast, causing massive loss of life and infrastructure damage. Satellite imagery captured inundation extent, coastal destruction, and post-event reconstruction efforts. Data were used to assess damage, support emergency response, and improve tsunami hazard modeling.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148036/rikuzentakata_ast_2011073_lrg.jpg'
  }),

  mk('e2011-b', { 
    type: 'flood', 
    title: 'Thailand Floods', 
    year: 2011, 
    lat: 13.7, 
    lng: 100.5, 
    region: 'Thailand', 
    imageSeed: '2011-thailandfloods', 
    summary: 'Prolonged monsoon rains caused widespread flooding in urban and industrial areas, affecting millions. Satellite imagery mapped river overflow, inundation patterns, and impacted infrastructure. Data assisted in disaster response, evacuation planning, and post-flood recovery strategies.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/12000/12424/aqua_thai_flood_28oct03_250m.jpg'
  }),

  mk('e2011-c', { 
    type: 'flood', 
    title: 'Mississippi River Flood', 
    year: 2011, 
    lat: 35.0, 
    lng: -90.0, 
    region: 'USA (Mississippi Basin)', 
    imageSeed: '2011-mississippi', 
    summary: 'High river stages caused extensive floodplain inundation across multiple states. Satellite imagery tracked water extent and provided crucial information for emergency management. Data helped guide evacuations, flood mitigation, and infrastructure protection.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/154000/154150/midwestflooding_vir3_20250311_lrg.jpg'
  }),

  mk('e2011-d', { 
    type: 'drought', 
    title: 'Horn of Africa Drought/Famine', 
    year: 2011, 
    lat: 8, 
    lng: 40, 
    region: 'Horn of Africa', 
    imageSeed: '2011-horn-drought', 
    summary: 'Severe drought conditions led to widespread food insecurity and famine risks. Satellite monitoring captured vegetation health, rainfall anomalies, and soil moisture deficits. Data supported humanitarian aid targeting, agricultural planning, and drought mitigation strategies.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/150000/150712/eastafrica_chrp_202209.png'
  }),

  mk('e2011-e', { 
    type: 'flood', 
    title: 'Colombia Floods', 
    year: 2011, 
    lat: 4.0, 
    lng: -73.0, 
    region: 'Colombia', 
    imageSeed: '2011-colombiafloods', 
    summary: 'Heavy rainfall triggered flash floods and riverine inundation in multiple regions. Satellite imagery mapped affected towns, roads, and land cover changes. Data supported emergency response, flood risk analysis, and infrastructure recovery.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/14000/14626/venezula_tmo_26feb05_250m.jpg'
  }),

  mk('e2011-f', { 
    type: 'wildfire', 
    title: 'Texas Wildfires', 
    year: 2011, 
    lat: 31.0, 
    lng: -100.0, 
    region: 'Texas, USA', 
    imageSeed: '2011-texasfires', 
    summary: 'Drought-exacerbated wildfires burned large areas of grasslands and forests in Texas. Satellite imagery detected hotspots, fire spread, and smoke plumes. Observations were used for firefighting support, air quality monitoring, and ecological impact assessment.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/50000/50193/texmex_amo_2011108_lrg.jpg'
  }),

  mk('e2011-g', { 
    type: 'storm', 
    title: 'Tropical Storm Washi', 
    year: 2011, 
    lat: 8.0, 
    lng: 125.0, 
    region: 'Philippines', 
    imageSeed: '2011-washi', 
    summary: 'Tropical Storm Washi caused flash floods and deadly landslides in northern Mindanao. Satellite imagery captured flooding extent, rainfall intensity, and terrain impacts. Data aided disaster response, rescue operations, and post-event hazard assessment.',
    nasaImage: 'https://earthobservatory.nasa.gov/images/76702/tropical-storm-washi'
  }),

  mk('e2011-h', { 
    type: 'flood', 
    title: 'East Africa Floods', 
    year: 2011, 
    lat: -1.5, 
    lng: 37.0, 
    region: 'East Africa', 
    imageSeed: '2011-eastafricafloods', 
    summary: 'Localized heavy rainfall caused flooding across river catchments, affecting communities and farmland. Satellite imagery tracked water extent, inundation zones, and relief accessibility. Data supported early warning and post-flood recovery planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/152000/152108/somaliafloodingzm_oli_2023319.jpg'
  }),

  mk('e2011-i', { 
    type: 'earthquake', 
    title: 'Christchurch Earthquake', 
    year: 2011, 
    lat: -43.5, 
    lng: 172.6, 
    region: 'New Zealand', 
    imageSeed: '2011-chch', 
    summary: 'Severe urban seismic shaking caused structural damage and ground liquefaction in Christchurch. Satellite imagery assisted in mapping damage and assessing urban vulnerability. Observations informed emergency response, rebuilding, and hazard mitigation.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/49000/49553/tasman_ast_2011061_lrg.jpg'
  }),

  mk('e2011-j', { 
    type: 'cyclone', 
    title: 'Cyclone Yasi', 
    year: 2011, 
    lat: -17.5, 
    lng: 146.1, 
    region: 'Queensland, Australia', 
    imageSeed: '2011-yasi', 
    summary: 'Cyclone Yasi caused extensive coastal damage and inland flooding in Queensland. Satellite imagery captured storm structure, rainfall distribution, and affected areas. Data supported disaster response, damage assessment, and post-cyclone recovery planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/49000/49074/Yasi_amo_2011033_lrg.jpg'
  }),
]



// 2012
const EVENTS_2012 = [
  mk('e2012-a', { 
    type: 'storm', 
    title: 'Hurricane Sandy', 
    year: 2012, 
    lat: 40.6, 
    lng: -74.0, 
    region: 'US East Coast', 
    imageSeed: '2012-sandy', 
    summary: 'Hurricane Sandy caused extensive coastal flooding, storm surge, and urban infrastructure damage across the US East Coast. Satellite imagery captured the storm’s size, flooding patterns, and post-storm impacts on communities. Observations were used for disaster response, damage assessment, and planning recovery strategies.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/79000/79626/sandy_osc_2012303_lrg.jpg'
  }),

  mk('e2012-b', { 
    type: 'pollution', 
    title: 'Arctic Sea Ice Minimum', 
    year: 2012, 
    lat: 75.0, 
    lng: -40.0, 
    region: 'Arctic Ocean', 
    imageSeed: '2012-arcticmin', 
    summary: 'Record low Arctic sea-ice extent exposed large areas of the ocean, indicating accelerated melting trends. Satellites tracked ice retreat, melt pond formation, and open water coverage. Observations supported climate studies, modeling of polar processes, and monitoring of long-term environmental changes.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/79000/79256/npseaice_am2_2012257.png'
  }),

  mk('e2012-c', { 
    type: 'flood', 
    title: 'Philippine Floods', 
    year: 2012, 
    lat: 12.0, 
    lng: 122.0, 
    region: 'Philippines', 
    imageSeed: '2012-phfloods', 
    summary: 'Monsoon rains caused widespread flooding in low-lying provinces of the Philippines, disrupting communities and agriculture. Satellite imagery mapped water spread, sediment transport, and affected settlements. Data assisted in disaster response, risk assessment, and post-flood recovery planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78815/philippines_mpa_2012222.png'
  }),

  mk('e2012-d', { 
    type: 'drought', 
    title: 'Sahel Drought', 
    year: 2012, 
    lat: 15, 
    lng: 0, 
    region: 'Sahel, Africa', 
    imageSeed: '2012-sahel', 
    summary: 'Below-average rainfall led to vegetation stress and water shortages across the Sahel region. Satellite observations tracked vegetation indices, soil moisture anomalies, and drought severity. These data supported agricultural planning, food security monitoring, and drought mitigation strategies.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/88000/88670/africa_gis_2015.png'
  }),

  mk('e2012-e', { 
    type: 'snowstorm', 
    title: 'Anatolia Snowstorm', 
    year: 2012, 
    lat: 39.0, 
    lng: 35.0, 
    region: 'Turkey (Anatolia)', 
    imageSeed: '2012-anatolia', 
    summary: 'Heavy snowfall across Anatolia disrupted transportation networks and utilities. Satellite imagery documented snow cover, accumulation, and impacted urban and rural areas. Data helped emergency services manage response and assess risk in affected regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/77000/77126/europelsta_tmo_2012025.jpg'
  }),

  mk('e2012-f', { 
    type: 'wildfire', 
    title: 'Russia Wildfires', 
    year: 2012, 
    lat: 60.0, 
    lng: 100.0, 
    region: 'Siberia/Russia', 
    imageSeed: '2012-russiafires', 
    summary: 'Extensive wildfires in Siberia produced smoke plumes and destroyed vast tracts of boreal forest. Satellite imagery tracked fire hotspots, progression, and smoke transport. Observations supported firefighting efforts, air quality monitoring, and ecosystem impact assessments.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78493/Russia_tmo_2012191_lrg.jpg'
  }),

  mk('e2012-g', { 
    type: 'drought', 
    title: 'Amazon Drought', 
    year: 2012, 
    lat: -4, 
    lng: -63, 
    region: 'Amazon Basin, Brazil', 
    imageSeed: '2012-amazondrought', 
    summary: 'The Amazon Basin experienced record-low river levels and vegetation stress during 2012. Satellite imagery captured vegetation anomalies, water surface shrinkage, and ecosystem impacts. Data supported hydrological monitoring, forest health assessment, and climate research.',
    nasaImage: 'https://assets.science.nasa.gov/content/dam/science/esd/eo/woc/images/amazon/amazon_deforestation_20000730.jpg'
  }),

  mk('e2012-h', { 
    type: 'earthquake', 
    title: 'Italy Earthquakes', 
    year: 2012, 
    lat: 42.5, 
    lng: 13.0, 
    region: 'Italy', 
    imageSeed: '2012-italyquakes', 
    summary: 'Seismic activity in central Italy caused localized damage to towns, infrastructure, and cultural heritage sites. Satellite imagery helped map affected areas and assess urban impacts. Data supported post-event recovery, hazard assessment, and seismic risk mitigation.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/77000/77308/tornadoes_goe_2012062.jpg'
  }),

  mk('e2012-i', { 
    type: 'storm', 
    title: 'Oklahoma Tornadoes', 
    year: 2012, 
    lat: 35.5, 
    lng: -97.5, 
    region: 'Oklahoma, USA', 
    imageSeed: '2012-oklahomatornado', 
    summary: 'A severe tornado outbreak impacted urban and rural areas in Oklahoma, causing extensive damage. Satellite imagery captured storm tracks, cloud structures, and aftermath. Data aided emergency response, disaster recovery planning, and tornado risk analysis.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/77000/77308/tornadoes_goe_2012062.jpg'
  }),

  mk('e2012-j', { 
    type: 'snowstorm', 
    title: 'European Cold Wave', 
    year: 2012, 
    lat: 50, 
    lng: 10, 
    region: 'Central Europe', 
    imageSeed: '2012-eurocold', 
    summary: 'Prolonged cold and snowfall affected large parts of Central Europe, disrupting transportation and agriculture. Satellite imagery tracked snow cover, accumulation, and freeze impacts. Observations supported emergency management, agricultural planning, and climate monitoring.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/77000/77126/europelsta_tmo_2012025.jpg'
  }),
]




// 2013
const EVENTS_2013 = [
  mk('e2013-a', { 
    type: 'cyclone', 
    title: 'Typhoon Haiyan', 
    year: 2013, 
    lat: 11.0, 
    lng: 125.0, 
    region: 'Philippines', 
    imageSeed: '2013-haiyan', 
    summary: 'Typhoon Haiyan was one of the strongest tropical cyclones ever recorded, generating extreme winds and a catastrophic storm surge in the Philippines. Satellite imagery captured storm structure, cloud tops, and the post-storm devastation of communities and infrastructure. Observations assisted relief efforts, damage assessment, and long-term disaster recovery planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/82000/82341/haiyan_amo_2013311.jpg'
  }),

  mk('e2013-b', { 
    type: 'flood', 
    title: 'Uttarakhand Floods', 
    year: 2013, 
    lat: 30.0, 
    lng: 79.0, 
    region: 'Uttarakhand, India', 
    imageSeed: '2013-uttarakhand', 
    summary: 'Intense monsoon rainfall triggered flash floods and landslides in the Himalayan foothills of Uttarakhand. Satellite imagery mapped water spread, slope failures, and affected settlements, aiding emergency response. These observations supported relief distribution, evacuation planning, and reconstruction efforts in mountainous regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/81000/81572/uttarakhand_svp_2013177_tn.jpg'
  }),

  mk('e2013-c', { 
    type: 'flood', 
    title: 'Colorado Floods', 
    year: 2013, 
    lat: 39.0, 
    lng: -105.5, 
    region: 'Colorado, USA', 
    imageSeed: '2013-coloradofloods', 
    summary: 'Exceptional rainfall caused widespread river flooding in Colorado, damaging homes, infrastructure, and agricultural land. Satellites captured flood extent, sediment transport, and vegetation impacts. The data supported flood response planning, hazard assessment, and post-event reconstruction efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/82000/82071/Colorado_amo_2013257.jpg'
  }),

  mk('e2013-d', { 
    type: 'wildfire', 
    title: 'Australian Bushfires', 
    year: 2013, 
    lat: -25, 
    lng: 147, 
    region: 'Australia', 
    imageSeed: '2013-ausfires', 
    summary: 'Seasonal bushfire activity in eastern Australia caused extensive vegetation loss, smoke plumes, and burn scars. Satellite imagery tracked fire progression and smoke dispersion. Observations aided firefighting strategies, air quality monitoring, and ecosystem recovery assessment.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/82000/82211/Australia_amo_2013294_lrg.jpg'
  }),

  mk('e2013-e', { 
    type: 'flood', 
    title: 'Russian Amur Floods', 
    year: 2013, 
    lat: 49.5, 
    lng: 129.6, 
    region: 'Amur Region, Russia', 
    imageSeed: '2013-amur', 
    summary: 'Severe riverine flooding along the Amur River affected towns, agriculture, and transport. Satellite imagery monitored floodwater extent, movement, and impacted regions. These observations assisted in disaster relief, hazard assessment, and preparation for future river flooding.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/82000/82181/amurriver_oli_2013270_tn.jpg'
  }),

  mk('e2013-f', { 
    type: 'flood', 
    title: 'Alberta Floods', 
    year: 2013, 
    lat: 53.9, 
    lng: -116.4, 
    region: 'Alberta, Canada', 
    imageSeed: '2013-alberta', 
    summary: 'Severe flooding in Calgary and surrounding Alberta regions caused infrastructure damage, road closures, and evacuations. Satellite imagery captured inundation patterns and affected areas. Data supported emergency response, recovery efforts, and flood risk mapping for urban planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/81000/81490/calgary_svp_2013142.jpg'
  }),

  mk('e2013-g', { 
    type: 'flood', 
    title: 'Jakarta Flooding', 
    year: 2013, 
    lat: -6.2, 
    lng: 106.8, 
    region: 'Jakarta, Indonesia', 
    imageSeed: '2013-jakarta', 
    summary: 'Heavy rainfall and tidal interactions caused significant urban flooding in Jakarta, affecting homes and transportation networks. Satellite imagery mapped flood coverage, drainage issues, and impacted neighborhoods. Observations were used for disaster response and urban flood management planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/81000/81986/paluweh_oli_2013215.jpg'
  }),

  mk('e2013-h', { 
    type: 'cyclone', 
    title: 'Cyclone Phailin', 
    year: 2013, 
    lat: 18.5, 
    lng: 84.5, 
    region: 'Odisha, India', 
    imageSeed: '2013-phailin', 
    summary: 'Cyclone Phailin made landfall in Odisha with high winds, storm surge, and heavy rain, affecting coastal communities. Satellite imagery tracked storm movement, wind intensity, and post-landfall damage. Data supported evacuation planning, disaster response, and reconstruction efforts in affected areas.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/82000/82253/EastIndia_tmo_2012301.jpg'
  }),

  mk('e2013-i', { 
    type: 'earthquake', 
    title: 'Solomon Islands Earthquake', 
    year: 2013, 
    lat: -8.0, 
    lng: 159.0, 
    region: 'Solomon Islands', 
    imageSeed: '2013-solomon', 
    summary: 'Offshore seismic shaking caused localized impacts along the Solomon Islands coast, including ground damage and potential tsunami risk. Satellite imagery helped identify affected regions, monitor coastal changes, and support hazard assessment and preparedness efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/18000/18244/ranonggais_ast_2007101.jpg'
  }),

  mk('e2013-j', { 
    type: 'storm', 
    title: 'European Windstorm Christian', 
    year: 2013, 
    lat: 50, 
    lng: 10, 
    region: 'Western/Central Europe', 
    imageSeed: '2013-christian', 
    summary: 'European Windstorm Christian caused widespread damage across multiple countries with strong winds and heavy rainfall. Satellite monitoring captured wind patterns, cloud structures, and impacted regions. Data supported disaster response, risk assessment, and planning for future windstorm mitigation.',
    nasaImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/St_Jude_storm_Christian_2013.jpg'
  }),
]



// 2014
const EVENTS_2014 = [
  mk('e2014-a', { 
    type: 'flood', 
    title: 'Southeast Europe Floods', 
    year: 2014, 
    lat: 44.0, 
    lng: 20.0, 
    region: 'Southeast Europe', 
    imageSeed: '2014-see-floods', 
    summary: 'Heavy rainfall in Southeast Europe caused widespread river flooding and inundation in Balkan countries, affecting communities and infrastructure. Satellite imagery captured flood extent, sediment transport, and damage to roads and buildings. Data supported disaster monitoring, relief planning, and early warning strategies for future floods.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/83000/83697/bosnia_amo_2014139.jpg'
  }),

  mk('e2014-b', { 
    type: 'drought', 
    title: 'California Drought & Record Heat', 
    year: 2014, 
    lat: 36.5, 
    lng: -119, 
    region: 'California, USA', 
    imageSeed: '2014-cadrought', 
    summary: 'Prolonged drought and record heat stressed water resources, agriculture, and ecosystems in California. Satellite monitoring captured vegetation health, soil moisture deficits, and temperature anomalies. Observations informed water management strategies, drought mitigation, and assessment of long-term climate impacts on the region.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/84000/84801/californiadm_2014322.png'
  }),

  mk('e2014-c', { 
    type: 'flood', 
    title: 'Bangladesh Monsoon Flood', 
    year: 2014, 
    lat: 23.6, 
    lng: 90.5, 
    region: 'Bangladesh', 
    imageSeed: '2014-bdflood', 
    summary: 'Seasonal monsoon rains caused widespread flooding across low-lying areas of Bangladesh, affecting agriculture and settlements. Satellite data captured river overflows, inundated regions, and infrastructure impacts. These observations supported humanitarian relief, flood mapping, and planning for future flood preparedness.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/84000/84299/bangladesh_tmo_2014241.jpg'
  }),

  mk('e2014-d', { 
    type: 'snowstorm', 
    title: 'US Polar Vortex / Ice Storms', 
    year: 2014, 
    lat: 44.0, 
    lng: -90.0, 
    region: 'USA (Northern states)', 
    imageSeed: '2014-polarvortex', 
    summary: 'The polar vortex brought extreme cold, ice, and snow to northern U.S. states, disrupting transportation, utilities, and daily life. Satellite imagery documented snow cover, ice accumulation, and storm progression. These data aided emergency management, infrastructure protection, and planning for future cold events.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/82000/82777/greatlakes_tmo_2014006.jpg'
  }),

  mk('e2014-e', { 
    type: 'wildfire', 
    title: 'Chile Wildfire', 
    year: 2014, 
    lat: -35.0, 
    lng: -71.0, 
    region: 'Central Chile', 
    imageSeed: '2014-chilewildfire', 
    summary: 'Major wildfires near urban-wildland interfaces in central Chile destroyed forests and threatened communities. Satellite imagery tracked fire spread, burn areas, and smoke plumes. Data informed firefighting operations, air quality monitoring, and post-fire ecological recovery efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/83000/83498/chile_tmo_2014103.jpg'
  }),

  mk('e2014-f', { 
    type: 'cyclone', 
    title: 'Cyclone Hudhud', 
    year: 2014, 
    lat: 17.7, 
    lng: 83.3, 
    region: 'Andhra Pradesh, India', 
    imageSeed: '2014-hudhud', 
    summary: 'Cyclone Hudhud struck India’s eastern coast with strong winds, storm surge, and flooding, causing extensive damage to infrastructure and communities. Satellite data captured cloud structure, wind fields, and coastal inundation. Observations were used for early warnings, disaster response, and post-storm recovery planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/84000/84547/Hudhud_tmo_2014285_tn.jpg'
  }),

  mk('e2014-g', { 
    type: 'landslide', 
    title: 'Afghanistan Avalanche', 
    year: 2014, 
    lat: 33.5, 
    lng: 69.0, 
    region: 'Afghanistan', 
    imageSeed: '2014-afg-avalanche', 
    summary: 'Avalanches triggered by snow and ice collapses impacted remote high-altitude communities in Afghanistan. Satellite imagery mapped avalanche paths, snowpack conditions, and affected terrain. These observations assisted in hazard assessment, early warning, and emergency planning in mountainous regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/89000/89674/afghanistan_lis_2016037.png'
  }),

  mk('e2014-h', { 
    type: 'flood', 
    title: 'Japan Record Rains & Flooding', 
    year: 2014, 
    lat: 36.0, 
    lng: 138.0, 
    region: 'Japan', 
    imageSeed: '2014-japanrains', 
    summary: 'Intense rainfall in Japan triggered floods and landslides, affecting urban and rural areas. Satellite data captured inundated regions, landslide-prone areas, and infrastructure damage. Observations supported emergency response, risk mapping, and planning for future extreme rainfall events.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/84000/84503/japan_amo_2014279.jpg'
  }),

  mk('e2014-i', { 
    type: 'landslide', 
    title: 'Balkans Landslides', 
    year: 2014, 
    lat: 44.0, 
    lng: 20.0, 
    region: 'Balkans', 
    imageSeed: '2014-balkans', 
    summary: 'Heavy rainfall caused multiple landslides in the mountainous regions of the Balkans, damaging roads, settlements, and agriculture. Satellite imagery captured slope failures, soil saturation, and terrain changes. Data helped with hazard assessment, risk mapping, and early warning system planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/83000/83697/bosnia_amo_2014139.jpg'
  }),

  mk('e2014-j', { 
    type: 'wildfire', 
    title: 'Australian Bushfires', 
    year: 2014, 
    lat: -25, 
    lng: 147, 
    region: 'Australia', 
    imageSeed: '2014-ausfires', 
    summary: 'Seasonal bushfires burned across eastern Australia, producing smoke plumes and extensive burn scars. Satellite imagery monitored fire extent, vegetation damage, and air quality impacts. Observations aided firefighting operations, public health advisories, and ecosystem recovery planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/83000/83225/morwell_oli_2014054_tn.jpg'
  }),
]



// 2015
const EVENTS_2015 = [
  mk('e2015-a', { 
    type: 'earthquake', 
    title: 'Nepal Earthquake (Gorkha)', 
    year: 2015, 
    lat: 27.7, 
    lng: 85.3, 
    region: 'Nepal', 
    imageSeed: '2015-nepalquake', 
    summary: 'The 2015 Gorkha earthquake in Nepal caused widespread urban and rural damage, triggered landslides, and affected mountainous terrain. Satellite imagery documented ground displacement, collapsed buildings, and debris flows. These observations were crucial for coordinating rescue operations, assessing structural damage, and planning long-term reconstruction efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/85000/85871/nepal_se1_2015107-119.jpg'
  }),

  mk('e2015-b', { 
    type: 'drought', 
    title: 'El Niño Droughts & Floods', 
    year: 2015, 
    lat: -4, 
    lng: -63, 
    region: 'Pacific & Americas (El Niño effects)', 
    imageSeed: '2015-el-nino', 
    summary: 'The strong 2015 El Niño caused widespread droughts and localized floods across the Pacific and Americas. Satellite data captured sea surface temperature anomalies, rainfall deficits, and unusual flooding patterns. This information supported agricultural planning, water resource management, and climate impact assessments across multiple countries.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86341/pacificssha_js2_2015190.jpg'
  }),

  mk('e2015-c', { 
    type: 'pollution', 
    title: 'Indonesia Haze from Fires', 
    year: 2015, 
    lat: -2, 
    lng: 118, 
    region: 'Indonesia', 
    imageSeed: '2015-haze', 
    summary: 'Extensive peat and forest fires in Indonesia produced thick haze, severely affecting air quality and human health across Southeast Asia. Satellite imagery captured fire hotspots, smoke plume transport, and burn scar extents. These observations aided disaster response, public health monitoring, and environmental policy decisions.',
    nasaImage: 'https://assets.science.nasa.gov/content/dam/science/esd/eo/content-feature/indonesianfires/images/borneo_tmo_2015267.jpg'
  }),

  mk('e2015-d', { 
    type: 'wildfire', 
    title: 'California Wildfires', 
    year: 2015, 
    lat: 36.5, 
    lng: -119, 
    region: 'California, USA', 
    imageSeed: '2015-cawildfires', 
    summary: 'California experienced multiple wildfires in 2015, rapidly spreading through dry chaparral and forested regions. Satellites tracked fire hotspots, smoke plumes, and burn severity. Data from these observations helped firefighting operations, air quality monitoring, and assessment of ecological and property impacts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86348/rockyfire_oli_2015215_swir.jpg'
  }),

  mk('e2015-e', { 
    type: 'flood', 
    title: 'Texas/Oklahoma Floods', 
    year: 2015, 
    lat: 31.0, 
    lng: -97.0, 
    region: 'Texas/Oklahoma, USA', 
    imageSeed: '2015-texokfloods', 
    summary: 'Localized heavy rainfall caused significant urban and rural flooding in Texas and Oklahoma in 2015. Satellite imagery captured inundated areas, overflowing rivers, and sediment transport. These data were valuable for emergency response, flood mapping, and evaluating long-term flood mitigation strategies.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/85000/85910/texasrain_mrg_2015110.jpg'
  }),

  mk('e2015-f', { 
    type: 'storm', 
    title: 'Pacific Typhoons', 
    year: 2015, 
    lat: 15.0, 
    lng: 130.0, 
    region: 'Western Pacific', 
    imageSeed: '2015-typhoons', 
    summary: 'Multiple tropical cyclones struck the Western Pacific in 2015, affecting island and coastal populations. Satellite data provided detailed tracking of storm intensity, rainfall, and trajectories. This information was crucial for issuing early warnings, evacuation planning, and disaster management across affected regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/87000/87092/stormsglobal_uni_2015_lrg.png'
  }),

  mk('e2015-g', { 
    type: 'flood', 
    title: 'South America Floods', 
    year: 2015, 
    lat: -15.0, 
    lng: -60.0, 
    region: 'South America', 
    imageSeed: '2015-safloods', 
    summary: 'Heavy rainfall across South America caused riverine and flash flooding in 2015, impacting communities and agriculture. Satellites tracked water extent, floodplain dynamics, and affected infrastructure. The imagery assisted relief operations, hazard assessment, and planning for future flood mitigation.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/87000/87334/rioparaguay_ali_2016012.jpg'
  }),

  mk('e2015-h', { 
    type: 'pollution', 
    title: 'Saharan Dust Outbreaks', 
    year: 2015, 
    lat: 20.0, 
    lng: 10.0, 
    region: 'Sahara / North Africa', 
    imageSeed: '2015-saharadust', 
    summary: 'Saharan dust storms in 2015 transported large plumes of particulate matter across North Africa and beyond, affecting air quality and visibility. Satellite monitoring captured dust plume movement, optical thickness, and deposition patterns. These data are important for climate research, public health, and understanding long-range transport of aerosols.',
    nasaImage: ''
  }),

  mk('e2015-i', { 
    type: 'drought', 
    title: 'Arctic Ice Melt', 
    year: 2015, 
    lat: 75.0, 
    lng: -40.0, 
    region: 'Arctic', 
    imageSeed: '2015-arcticmelt', 
    summary: 'Seasonal sea-ice retreat in the Arctic was notable in 2015, highlighting accelerating ice melt. Satellites tracked ice cover, melt ponds, and anomalies over time. This data is critical for climate monitoring, understanding polar ecosystems, and predicting future changes in global sea levels.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86406/morocco_tmo_2015219.jpg'
  }),

  mk('e2015-j', { 
    type: 'landslide', 
    title: 'Iceberg Calving (South Georgia)', 
    year: 2015, 
    lat: -54.4, 
    lng: -36.5, 
    region: 'South Georgia / South Atlantic', 
    imageSeed: '2015-iceberg', 
    summary: 'In 2015, large-scale iceberg calving occurred near South Georgia in the South Atlantic, contributing to ice mass loss. Satellite imagery documented iceberg size, drift trajectories, and calving rates. These observations help researchers understand glacial dynamics, ocean circulation impacts, and Antarctic climate processes.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/85000/85871/nepal_se1_2015107-119.jpg'
  }),
]


// 2016
const EVENTS_2016 = [
  mk('e2016-a', { 
    type: 'wildfire', 
    title: 'Fort McMurray Fires', 
    year: 2016, 
    lat: 56.7, 
    lng: -111.4, 
    region: 'Alberta, Canada', 
    imageSeed: '2016-fortmcmurray', 
    summary: 'The Fort McMurray wildfire rapidly expanded across northern Alberta, threatening communities and infrastructure. Satellite imagery captured the extent of burn scars and active fire fronts. Thick smoke plumes were transported over long distances, impacting air quality and providing critical data for firefighting and evacuation efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/88000/88039/mcmurray_oli_2016133.jpg'
  }),
  mk('e2016-b', { 
    type: 'cyclone', 
    title: 'Hurricane Matthew', 
    year: 2016, 
    lat: 18.8, 
    lng: -77.2, 
    region: 'Haiti / USA', 
    imageSeed: '2016-matthew', 
    summary: 'Hurricane Matthew, a powerful Category 5 storm, caused devastating coastal and inland flooding across Haiti and the southeastern United States. MODIS and GOES satellites captured rainfall intensity, storm surge, and wind patterns. The imagery was vital for disaster response and assessing infrastructure damage across affected regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/152000/152739/EO25_front_EO_tn.jpg'
  }),
  mk('e2016-c', { 
    type: 'earthquake', 
    title: 'Italian Earthquakes', 
    year: 2016, 
    lat: 42.7, 
    lng: 13.3, 
    region: 'Central Italy', 
    imageSeed: '2016-italyquake', 
    summary: 'A series of seismic events struck central Italy in 2016, causing localized urban damage and triggering landslides. Satellite imagery helped map affected towns and monitor ground deformation. The data provided insights for emergency response and urban planning in seismically active regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/89000/89905/ISS050-E-58415.jpg'
  }),
  mk('e2016-d', { 
    type: 'flood', 
    title: 'Southeast US Floods', 
    year: 2016, 
    lat: 33.0, 
    lng: -85.0, 
    region: 'Southeast USA', 
    imageSeed: '2016-southeastfloods', 
    summary: 'Heavy rainfall events in the southeastern United States caused significant river flooding and ponding across catchments. Satellite observations highlighted water extent and sediment transport. The imagery supported local authorities in planning flood response and assessing community impacts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/17000/17421/Arkansas_TMO_2006268.jpg'
  }),
  mk('e2016-e', { 
    type: 'flood', 
    title: 'Louisiana Floods', 
    year: 2016, 
    lat: 30.5, 
    lng: -91.0, 
    region: 'Louisiana, USA', 
    imageSeed: '2016-lafloods', 
    summary: 'Flash flooding in Louisiana impacted urban neighborhoods and critical infrastructure. Satellite data captured inundated streets, water accumulation, and flood dynamics. The imagery was crucial for emergency management and for understanding how heavy rainfall interacts with local terrain and drainage systems.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/15000/15427/superdome_QKB_2005243.jpg'
  }),
  mk('e2016-f', { 
    type: 'drought', 
    title: 'East African Drought', 
    year: 2016, 
    lat: 8, 
    lng: 40, 
    region: 'East Africa', 
    imageSeed: '2016-eastafricadrought', 
    summary: 'East Africa experienced prolonged drought in 2016, causing reduced rainfall and vegetation stress. Satellites captured soil moisture deficits and declining vegetation health across affected regions. The data provided critical information for humanitarian aid, water resource management, and agricultural planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/13000/13572/eafrica_avhrr_11-20apr05.jpg'
  }),
  mk('e2016-g', { 
    type: 'wildfire', 
    title: 'Blue Cut Fire (California)', 
    year: 2016, 
    lat: 34.3, 
    lng: -117.5, 
    region: 'Southern California, USA', 
    imageSeed: '2016-bluecut', 
    summary: 'The Blue Cut Fire in Southern California spread rapidly through chaparral and semi-urban areas. Satellite imagery tracked fire hotspots, smoke plumes, and burn severity. Observations helped authorities coordinate evacuations and firefighting efforts while assessing environmental impacts on forests and urban interfaces.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/88000/88600/bluecut_tir_2016230.jpg'
  }),
  mk('e2016-h', { 
    type: 'drought', 
    title: 'Indian Drought & Heatwave', 
    year: 2016, 
    lat: 23, 
    lng: 80, 
    region: 'India', 
    imageSeed: '2016-indiaheat', 
    summary: 'In 2016, India faced severe drought and heatwaves across several states, stressing agriculture and water resources. Satellites detected heat anomalies, soil moisture deficits, and vegetation stress. This information was key for crop planning, water allocation, and disaster preparedness.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145167/india_geos5_2019161.png'
  }),
  mk('e2016-i', { 
    type: 'cyclone', 
    title: 'Cyclone Winston', 
    year: 2016, 
    lat: -17.8, 
    lng: 178.4, 
    region: 'Fiji', 
    imageSeed: '2016-winston', 
    summary: 'Cyclone Winston, a Category 5 storm, struck Fiji in 2016, causing widespread wind damage and flooding. Satellite imagery documented the storm\'s eye, wind patterns, and flood extent. This data was critical for disaster response, assessing impacts on communities, and post-cyclone recovery efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/77000/77573/fiji_mpa_2012092.png'
  }),
  mk('e2016-j', { 
    type: 'storm', 
    title: 'Australian East Coast Storm', 
    year: 2016, 
    lat: -25, 
    lng: 147, 
    region: 'Australia East Coast', 
    imageSeed: '2016-ausstorm', 
    summary: 'Severe coastal storms impacted the eastern coast of Australia in 2016, bringing heavy rainfall, strong winds, and localized flooding. Satellite data captured cloud dynamics, precipitation patterns, and coastal inundation. This information aided emergency management and improved understanding of storm impacts on populated coastal areas.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/40000/40764/Australia_TMO_2009285_lrg.jpg'
  }),
]


// 2017
const EVENTS_2017 = [
  mk('e2017-a', { 
    type: 'cyclone', 
    title: 'Hurricanes Harvey / Irma / Maria', 
    year: 2017, 
    lat: 18.0, 
    lng: -70.0, 
    region: 'Caribbean / USA', 
    imageSeed: '2017-atlantic', 
    summary: 'In 2017, the Atlantic basin experienced multiple major hurricanes: Harvey, Irma, and Maria. Harvey caused historic flooding in Texas, Irma devastated Caribbean islands with extreme winds, and Maria severely impacted Puerto Rico with catastrophic rainfall and infrastructure damage. Satellite imagery from MODIS and GOES captured storm structure, precipitation patterns, and flooding extents, providing crucial data for emergency response and damage assessment.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/90000/90970/irma_mrg_2017255_lrg.png'
  }),

  mk('e2017-b', { 
    type: 'wildfire', 
    title: 'Portugal / Spain Wildfires', 
    year: 2017, 
    lat: 40.0, 
    lng: -6.0, 
    region: 'Iberian Peninsula', 
    imageSeed: '2017-iberiafires', 
    summary: 'Concurrent wildfires in Portugal and Spain produced extensive smoke plumes and burned large forested areas. Terra and MODIS satellite data captured the progression of fire fronts and regional smoke transport, offering insights into fire behavior under hot, dry conditions in the Mediterranean climate.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/90000/90427/portugal_vir_2017170_lrg.jpg'
  }),

  mk('e2017-c', { 
    type: 'wildfire', 
    title: 'California Wildfires', 
    year: 2017, 
    lat: 36.5, 
    lng: -119, 
    region: 'California, USA', 
    imageSeed: '2017-cawildfires', 
    summary: 'Large fire complexes in California burned thousands of hectares in 2017. Satellite observations highlighted rapid burn-area expansion, active hotspots, and smoke plumes impacting air quality. These fires stressed firefighting resources and illustrated growing wildfire vulnerability in western U.S. landscapes under extreme weather.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/91000/91440/california_vir_2017348.jpg'
  }),

  mk('e2017-d', { 
    type: 'flood', 
    title: 'Peru Floods/Landslides', 
    year: 2017, 
    lat: -9.2, 
    lng: -75.0, 
    region: 'Peru', 
    imageSeed: '2017-perufloods', 
    summary: 'Intense rainfall in Peru triggered severe floods and landslides in 2017. Satellite imagery captured inundated areas, slope failures, and sediment transport, supporting disaster response efforts. These events highlighted the vulnerability of Andean communities to heavy precipitation and topography-driven hazards.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/89000/89978/peru_oli_2017094.jpg'
  }),

  mk('e2017-e', { 
    type: 'flood', 
    title: 'South Asian Floods', 
    year: 2017, 
    lat: 23, 
    lng: 80, 
    region: 'India/Bangladesh/Nepal', 
    imageSeed: '2017-southasiafloods', 
    summary: 'Monsoon floods across South Asia in 2017 affected millions in India, Bangladesh, and Nepal. MODIS and Sentinel satellite data documented river overflows, inundated farmland, and displacement of populations. Flood extent mapping informed relief efforts and highlighted recurring risks in densely populated riverine regions.',
    nasaImage: 'https://indianexpress.com/wp-content/uploads/2017/08/up-floods-759.jpg?resize=600,334'
  }),

  mk('e2017-f', { 
    type: 'drought', 
    title: 'Greenland Ice Melt', 
    year: 2017, 
    lat: 72.0, 
    lng: -40.0, 
    region: 'Greenland', 
    imageSeed: '2017-greenland', 
    summary: 'Satellite data in 2017 revealed enhanced melt and surface runoff across Greenland\'s ice sheet. Observations from MODIS and Landsat highlighted areas of accelerated ice loss and potential contributions to sea-level rise. These measurements are crucial for understanding climate-driven cryospheric changes.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/154000/154793/greenlandmelt_oli2_20250821.jpg'
  }),

  mk('e2017-g', { 
    type: 'cyclone', 
    title: 'Cyclone Mora', 
    year: 2017, 
    lat: 21.5, 
    lng: 91.0, 
    region: 'Bangladesh', 
    imageSeed: '2017-mora', 
    summary: 'Cyclone Mora made landfall on the Bangladesh coast in 2017, bringing heavy rainfall, strong winds, and localized flooding. Satellite imagery tracked storm intensity and coastal inundation, aiding preparedness and post-storm assessment.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/90000/90304/mora_amo_2017150.jpg'
  }),

  mk('e2017-h', { 
    type: 'earthquake', 
    title: 'Christchurch Earthquake (aftershocks)', 
    year: 2017, 
    lat: -43.5, 
    lng: 172.6, 
    region: 'New Zealand', 
    imageSeed: '2017-chch-after', 
    summary: 'Following the 2011 Christchurch earthquake, 2017 saw continued aftershocks affecting infrastructure and communities. Satellite imagery helped monitor ground deformation, slope stability, and urban recovery efforts, illustrating the long-term impacts of seismic events in tectonically active regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/45000/45685/sisland_srt_2010246.jpg'
  }),

  mk('e2017-i', { 
    type: 'earthquake', 
    title: 'Mexico Earthquakes', 
    year: 2017, 
    lat: 18.0, 
    lng: -98.0, 
    region: 'Central Mexico', 
    imageSeed: '2017-mexquake', 
    summary: 'Central Mexico experienced severe seismic events in 2017, causing urban damage and casualties. Satellite imagery captured ground displacement, collapsed structures, and recovery areas, providing data for post-earthquake assessment and emergency planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/77000/77485/oaxaca_ast_2012080.jpg'
  }),

  mk('e2017-j', { 
    type: 'drought', 
    title: 'Madagascar Drought', 
    year: 2017, 
    lat: -18.8, 
    lng: 46.0, 
    region: 'Madagascar', 
    imageSeed: '2017-madagascar', 
    summary: 'Southern Madagascar experienced below-average rainfall in 2017, leading to significant drought conditions. Satellite data captured vegetation stress, reduced soil moisture, and affected agricultural zones, informing food security monitoring and relief planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148636/madagascar_tmo_2021205.jpg'
  }),
]

// 2018
const EVENTS_2018 = [
  mk('e2018-a', { 
    type: 'wildfire', 
    title: 'Camp & Woolsey Fires', 
    year: 2018, 
    lat: 39.7, 
    lng: -121.6, 
    region: 'California, USA', 
    imageSeed: '2018-camp-woolsey', 
    summary: 'In 2018, the Camp and Woolsey Fires rapidly advanced through northern and southern California, respectively. Satellite imagery from Terra and MODIS captured the extent of burned areas and dense smoke plumes over urban interfaces, highlighting significant threats to communities and infrastructure. The fires exemplified how extreme heat, low humidity, and strong winds combine to drive destructive wildfire behavior in populated regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/91000/91379/ventura_tmo_2017239.jpg'
  }),

  mk('e2018-b', { 
    type: 'cyclone', 
    title: 'Hurricane Florence', 
    year: 2018, 
    lat: 34.0, 
    lng: -77.5, 
    region: 'USA East Coast', 
    imageSeed: '2018-florence', 
    summary: 'Hurricane Florence made landfall on the U.S. East Coast as a slow-moving Category 4 storm. Its prolonged rainfall led to catastrophic inland flooding in North and South Carolina. NASA satellite data captured extensive river overflows, saturated floodplains, and urban inundation. The imagery provided critical insights for disaster response and highlighted the challenges of slow-moving tropical cyclones on densely populated regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/153000/153155/debby_goes_20240805.jpg'
  }),

  mk('e2018-c', { 
    type: 'volcano', 
    title: 'Kilauea Eruption', 
    year: 2018, 
    lat: 19.4, 
    lng: -155.2, 
    region: 'Hawaii, USA', 
    imageSeed: '2018-kilauea', 
    summary: 'Kilauea Volcano on Hawaii\'s Big Island experienced a prolonged effusive eruption in 2018. Lava flows destroyed hundreds of homes and reshaped the landscape. Satellite observations tracked lava advancement, thermal hotspots, and summit collapse, providing data for hazard assessment and evacuation planning. MODIS and Sentinel imagery highlighted the scale and intensity of volcanic activity during this major eruptive event.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/154000/154591/kilauea_oli_20250720_th.jpg'
  }),

  mk('e2018-d', { 
    type: 'drought', 
    title: 'Argentina Drought', 
    year: 2018, 
    lat: -34.0, 
    lng: -64.0, 
    region: 'Argentina', 
    imageSeed: '2018-argdrought', 
    summary: 'In 2018, key agricultural regions in Argentina experienced significant drought conditions. Satellite-based vegetation and soil moisture observations revealed large areas of moisture deficit affecting crop productivity. Remote sensing helped monitor stress patterns in soybean and maize fields, providing crucial information for food security assessments and drought mitigation planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/91000/91999/argentina_tmo_2018094.jpg'
  }),

  mk('e2018-e', { 
    type: 'wildfire', 
    title: 'Swedish Wildfires', 
    year: 2018, 
    lat: 60.0, 
    lng: 18.0, 
    region: 'Sweden', 
    imageSeed: '2018-swedenfires', 
    summary: 'Summer 2018 saw unusually extensive wildfires in Sweden\'s boreal forests. Satellite imagery from MODIS highlighted active fire fronts and burned-area extent. High temperatures and dry conditions contributed to the scale of the fires, posing challenges for firefighting efforts and affecting air quality across northern Europe.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/84000/84155/angelsberg_oli_2014216.jpg'
  }),

  mk('e2018-f', { 
    type: 'wildfire', 
    title: 'Arctic Heat & Fires', 
    year: 2018, 
    lat: 68.0, 
    lng: 20.0, 
    region: 'Arctic', 
    imageSeed: '2018-arcticfires', 
    summary: '2018 Arctic regions experienced unusual heat anomalies, resulting in increased wildfire activity across high-latitude landscapes. Satellite imagery captured smoke plumes and burn scars over tundra and boreal forests. The fires contributed to carbon emissions in sensitive ecosystems and provided insights into climate change-driven changes in Arctic fire regimes.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/153000/153087/arcticfires_oli_20240710.jpg'
  }),

  mk('e2018-g', { 
    type: 'wildfire', 
    title: 'Carr & Ferguson Fires', 
    year: 2018, 
    lat: 40.4, 
    lng: -122.4, 
    region: 'California, USA', 
    imageSeed: '2018-carr-ferguson', 
    summary: 'The Carr and Ferguson Fires burned significant areas of northern California. MODIS imagery tracked active fire zones, smoke plumes, and post-fire burn scars. These events highlighted risks to communities, infrastructure, and ecosystems, reinforcing the growing wildfire threat in the western United States under dry, windy conditions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/92000/92570/ranchfire_oli_2018216.jpg'
  }),

  mk('e2018-h', { 
    type: 'flood', 
    title: 'Queensland Floods', 
    year: 2018, 
    lat: -23.0, 
    lng: 144.0, 
    region: 'Queensland, Australia', 
    imageSeed: '2018-queensland', 
    summary: 'Heavy tropical rainfall in Queensland, Australia, caused widespread flooding across rivers and catchments in 2018. Satellite imagery captured the extent of inundated areas and sediment plumes, aiding disaster management and response. The floods disrupted communities, infrastructure, and agriculture throughout the region.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/154000/154116/queensflooding_oli2_20250305.jpg'
  }),

  mk('e2018-i', { 
    type: 'pollution', 
    title: 'West Africa Dust Storm', 
    year: 2018, 
    lat: 12.0, 
    lng: -2.0, 
    region: 'West Africa', 
    imageSeed: '2018-westafricadust', 
    summary: 'Large-scale dust storms originating from the Sahara Desert affected West Africa in 2018. Satellite data captured airborne dust transport across multiple countries, impacting air quality, visibility, and weather patterns. Observations from MODIS provided insight into the frequency and intensity of Saharan dust events and their regional atmospheric effects.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/12000/12811/Sahara_TMO2004063.jpg'
  }),

  mk('e2018-j', { 
    type: 'pollution', 
    title: 'Red Tide (Gulf Coast)', 
    year: 2018, 
    lat: 28.0, 
    lng: -90.0, 
    region: 'US Gulf Coast', 
    imageSeed: '2018-redtide', 
    summary: 'Harmful algal bloom events (red tide) occurred along the U.S. Gulf Coast in 2018, impacting fisheries, tourism, and coastal ecosystems. Satellite observations tracked chlorophyll concentrations and bloom extent, providing essential information for ecosystem monitoring and public health advisories.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/9000/9135/Fla_RedTide_122201.jpg'
  }),
]


// 2019
const EVENTS_2019 = [
  mk('e2019-a', { 
    type: 'deforestation', 
    title: 'Amazon Rainforest Fires', 
    year: 2019, 
    lat: -4, 
    lng: -63, 
    region: 'Amazon Basin, Brazil', 
    imageSeed: '2019-amazonfires', 
    summary: 'In 2019, large swaths of the Amazon rainforest experienced fires due to both seasonal burning and illegal land clearing. Terra and Aqua satellites captured vast smoke plumes and burned-area patterns across Brazilian states such as Amazonas and Pará. These fires raised international concern over biodiversity loss and carbon emissions. Smoke transport was observed over neighboring countries, impacting air quality regionally. Satellite imagery allowed scientists to quantify the scale and intensity of the burning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/147000/147946/amazonburnedwide_vir_2020.jpg'
  }),

  mk('e2019-b', { 
    type: 'cyclone', 
    title: 'Cyclone Idai', 
    year: 2019, 
    lat: -19.0, 
    lng: 34.0, 
    region: 'Mozambique / Mozambique Channel', 
    imageSeed: '2019-idai', 
    summary: 'Cyclone Idai struck Mozambique, Zimbabwe, and Malawi in March 2019, causing catastrophic flooding and storm surge. Satellite imagery from Terra and Aqua highlighted submerged urban areas and river overflows. Tens of thousands of people were displaced, and widespread infrastructure damage occurred. The storm was among the deadliest cyclones in the Southern Hemisphere, emphasizing the vulnerability of coastal communities to extreme tropical systems.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/144000/144712/mozambiqueflooding_amo_201955.png'
  }),

  mk('e2019-c', { 
    type: 'wildfire', 
    title: 'California Wildfires', 
    year: 2019, 
    lat: 36.5, 
    lng: -119, 
    region: 'California, USA', 
    imageSeed: '2019-cawildfires', 
    summary: 'California experienced several major wildfires in 2019, including the Kincade and Dixie fires. Satellite observations from MODIS and VIIRS captured extensive burned areas and thick smoke transport. The fires destroyed thousands of structures and significantly affected air quality across the western U.S. The imagery allowed tracking of fire progression and smoke dispersion over days and weeks. These events highlighted the increasing wildfire risk due to climate change and prolonged drought conditions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148908/dixiesfire_oli_2021256.jpg'
  }),

  mk('e2019-d', { 
    type: 'cyclone', 
    title: 'Hurricane Dorian', 
    year: 2019, 
    lat: 26.0, 
    lng: -78.0, 
    region: 'Bahamas', 
    imageSeed: '2019-dorian', 
    summary: 'Hurricane Dorian struck the Bahamas in September 2019 as a catastrophic Category 5 storm. NASA satellites observed a well-defined eye and extreme convective bands producing widespread wind and flood damage. Storm surge inundated low-lying islands, displacing tens of thousands of residents. The hurricane was one of the strongest to hit the region in recorded history, leaving lasting damage and highlighting the vulnerability of island nations to intensifying tropical cyclones.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145555/dorian_amo_2019244.jpg'
  }),

  mk('e2019-e', { 
    type: 'flood', 
    title: 'Midwest Floods (USA)', 
    year: 2019, 
    lat: 41.5, 
    lng: -93.5, 
    region: 'Midwest, USA', 
    imageSeed: '2019-midwestfloods', 
    summary: 'Spring 2019 brought significant flooding across the U.S. Midwest, especially in Iowa and Nebraska. Heavy rainfall caused rivers to overflow, inundating farmland and urban areas. Satellite imagery from Landsat and Terra provided detailed views of river expansion and sediment plumes. The floods disrupted agriculture, transport, and local economies. Observations helped in disaster response and monitoring of flood recovery.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/152000/152982/iowaflooding_oli2_20240609.jpg'
  }),

  mk('e2019-f', { 
    type: 'pollution', 
    title: 'Indonesian Fire Haze', 
    year: 2019, 
    lat: -2, 
    lng: 118, 
    region: 'Indonesia', 
    imageSeed: '2019-indofires', 
    summary: 'In 2019, seasonal forest and peat fires in Indonesia produced widespread haze, affecting air quality in Sumatra, Borneo, and neighboring countries. Satellites tracked fire hotspots, smoke plumes, and aerosol transport. The persistent haze disrupted daily life, impacting health, aviation, and the economy. MODIS imagery was key in identifying burning areas and monitoring emissions. These events underscored ongoing challenges in land management and fire prevention in tropical regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/83000/83304/Indonesia_amo_2014066.jpg'
  }),

  mk('e2019-g', { 
    type: 'wildfire', 
    title: 'Alaska Wildfires', 
    year: 2019, 
    lat: 64.0, 
    lng: -150.0, 
    region: 'Alaska, USA', 
    imageSeed: '2019-alaskafires', 
    summary: 'The 2019 Alaska wildfire season was notable for large-scale boreal fires across interior Alaska. Satellite imagery captured active fire fronts, smoke plumes, and burn scars over hundreds of kilometers. The high-latitude fires contributed significantly to carbon emissions and atmospheric particulates. Smoke from Alaskan fires was observed drifting over the Arctic Ocean. These fires demonstrated the increasing fire activity in subarctic regions associated with warming temperatures.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/13000/13353/Alaska_fires.AMOA2004181.jpg'
  }),

  mk('e2019-h', { 
    type: 'flood', 
    title: 'Monsoon Floods (India/Bangladesh/Nepal)', 
    year: 2019, 
    lat: 23, 
    lng: 80, 
    region: 'South Asia', 
    imageSeed: '2019-monsoon', 
    summary: 'The 2019 South Asian monsoon produced extensive flooding across India, Bangladesh, and Nepal. Heavy, persistent rainfall swelled rivers and inundated low-lying regions, displacing millions. Satellite imagery revealed the extent of inundation and the dynamics of water flow across plains. Floodwaters damaged infrastructure, agriculture, and housing. MODIS and Sentinel data were critical for disaster response and monitoring recovery efforts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/4000/4642/India_TRMM2004194.jpg'
  }),

  mk('e2019-i', { 
    type: 'storm', 
    title: 'Midwest Tornado Outbreak', 
    year: 2019, 
    lat: 39.0, 
    lng: -95.0, 
    region: 'Midwestern USA', 
    imageSeed: '2019-midwesttornado', 
    summary: 'A series of severe convective storms in the U.S. Midwest in 2019 produced multiple tornadoes across Kansas, Missouri, and Iowa. NASA satellites captured storm structure, cloud formation, and post-event damage signatures. Tornadoes destroyed homes, uprooted trees, and caused localized flooding. These events highlighted the challenges of predicting tornadic outbreaks and the role of satellite monitoring in assessing damage patterns.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149205/southeast_vir_2021337.jpg'
  }),

  mk('e2019-j', { 
    type: 'wildfire', 
    title: 'Australian Bushfires (Nov–Dec)', 
    year: 2019, 
    lat: -25, 
    lng: 147, 
    region: 'Australia', 
    imageSeed: '2019-ausbushfires', 
    summary: 'Late-season bushfires in Australia during November–December 2019 intensified ongoing regional fire activity. Fire fronts expanded rapidly due to high temperatures and strong winds, causing catastrophic property and ecological damage. Terra and MODIS imagery tracked the spread and smoke transport, visible across Australia and even into the South Pacific. These fires marked the start of the “Black Summer” events that continued into early 2020. Observations emphasized the link between climate extremes and fire behavior.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/152000/152232/australianheatwave_goes5_2023350.jpg'
  }),
]


// 2020
const EVENTS_2020 = [
  mk('e2020-a', { 
    type: 'wildfire', 
    title: 'Australian Black Summer Wildfires', 
    year: 2020, 
    lat: -25, 
    lng: 147, 
    region: 'Australia', 
    imageSeed: '2020-blacksummer', 
    summary: 'From late 2019 into early 2020, Australia endured one of its most devastating fire seasons on record—nicknamed the “Black Summer.” Blazes swept across New South Wales, Victoria, and South Australia, burning more than 18 million hectares and producing unprecedented smoke plumes that circled the globe. Terra and Aqua satellites captured massive fire fronts, pyrocumulonimbus clouds, and long-range aerosol transport. The fires caused major biodiversity loss, with estimates suggesting over a billion animals perished.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146125/pacific_vircal_2020006.png'
  }),

  mk('e2020-b', { 
    type: 'wildfire', 
    title: 'US Western Wildfires', 
    year: 2020, 
    lat: 39.0, 
    lng: -120.0, 
    region: 'US West Coast', 
    imageSeed: '2020-uswestfires', 
    summary: 'The 2020 U.S. fire season shattered previous records, burning more than 10 million acres across California, Oregon, and Washington. Intense heat, drought, and dry lightning contributed to vast fire complexes such as the August Complex Fire—the largest in California history. NASA’s Terra satellite observed thick smoke plumes stretching across North America and even reaching Europe. The event underscored the accelerating link between warming climate and megafire behavior in the western U.S.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/147000/147293/usa_geos5_vir_2020260.jpg'
  }),

  mk('e2020-c', { 
    type: 'pollution', 
    title: 'Beirut Explosion (aerosol signal)', 
    year: 2020, 
    lat: 33.9, 
    lng: 35.5, 
    region: 'Beirut, Lebanon', 
    imageSeed: '2020-beirut', 
    summary: 'On August 4, 2020, a massive explosion at the Port of Beirut released an immense shockwave that destroyed much of the city’s harbor district. The blast registered as one of the largest non-nuclear explosions ever recorded. NASA’s Earth-observing satellites detected short-term increases in atmospheric aerosols and urban particulate matter following the event. The disaster triggered widespread humanitarian and environmental concerns, with lasting effects on air and water quality in the region.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149047/dc_map_2015_th.jpg'
  }),

  mk('e2020-d', { 
    type: 'storm', 
    title: 'US Midwest Derecho', 
    year: 2020, 
    lat: 41.9, 
    lng: -93.6, 
    region: 'Midwest, USA', 
    imageSeed: '2020-derecho', 
    summary: 'In August 2020, a powerful derecho—a long-lived windstorm—swept across Iowa, Illinois, and surrounding states with hurricane-force gusts. The storm flattened crops, toppled trees, and caused billions of dollars in agricultural damage. NASA’s Terra satellite captured widespread vegetation stress and damage patterns in post-storm imagery. The derecho’s destructive path was one of the most extensive in U.S. history, rivaling the impact of major hurricanes.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/147000/147154/iowa_oli_2020224.jpg'
  }),

  mk('e2020-e', { 
    type: 'cyclone', 
    title: 'Cyclone Amphan', 
    year: 2020, 
    lat: 21.0, 
    lng: 88.0, 
    region: 'Bay of Bengal / India', 
    imageSeed: '2020-amphan', 
    summary: 'Cyclone Amphan, a Category 5 equivalent super cyclonic storm, formed in the Bay of Bengal in May 2020 and became one of the most powerful storms ever recorded in the region. It made landfall near the India–Bangladesh border, causing massive storm surges, flooding, and wind damage. Terra MODIS imagery revealed a clearly defined eye and expansive spiral cloud bands. The storm displaced millions and highlighted the increasing intensity of tropical cyclones in South Asia.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146746/typhoonamphan_tmo_2020140.png'
  }),

  mk('e2020-f', { 
    type: 'pollution', 
    title: 'COVID-19 Air Quality Changes', 
    year: 2020, 
    lat: 48.8, 
    lng: 2.3, 
    region: 'Global urban clusters', 
    imageSeed: '2020-covid-air', 
    summary: 'Global lockdowns during the COVID-19 pandemic led to unprecedented reductions in air pollution. Terra and Aura satellites observed sharp declines in nitrogen dioxide (NO₂) and fine particulate matter (PM2.5) over major cities such as Delhi, Paris, and Los Angeles. Urban skies appeared visibly clearer as industrial activity and traffic slowed. These observations offered a rare glimpse of how human emissions directly influence atmospheric composition on a global scale.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148477/covidpm25fig1_mod_2020.jpg'
  }),

  mk('e2020-g', { 
    type: 'flood', 
    title: 'Yangtze River Floods', 
    year: 2020, 
    lat: 30.6, 
    lng: 112.8, 
    region: 'Yangtze Basin, China', 
    imageSeed: '2020-yangtze', 
    summary: 'Persistent monsoon rainfall in mid-2020 led to widespread flooding along China’s Yangtze River basin. Reservoirs and levees were pushed to their limits, with many cities—including Wuhan—experiencing inundation. Terra MODIS imagery revealed swollen river systems and sediment plumes extending into the East China Sea. The floods affected tens of millions of people and ranked among China’s most severe hydrological disasters in recent decades.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/88000/88467/china_tmo_2016087.jpg'
  }),

  mk('e2020-h', { 
    type: 'wildfire', 
    title: 'Greek Wildfires', 
    year: 2020, 
    lat: 38.0, 
    lng: 23.7, 
    region: 'Greece', 
    imageSeed: '2020-greekfires', 
    summary: 'In the summer of 2020, intense wildfires broke out across Greece amid record heat and dry winds. Fires burned near Athens and the Peloponnese, producing heavy smoke visible from space. MODIS and VIIRS sensors tracked active fire hotspots and burned area progression. The event reflected the growing wildfire risk around the Mediterranean basin under warming and prolonged drought conditions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/18000/18939/Greece_AMO_2007238.jpg'
  }),

  mk('e2020-i', { 
    type: 'flood', 
    title: 'Indonesia Flash Floods', 
    year: 2020, 
    lat: -2, 
    lng: 118, 
    region: 'Indonesia', 
    imageSeed: '2020-indofloods', 
    summary: 'Early in 2020, torrential rains caused deadly flash floods and landslides across parts of Indonesia, including Jakarta and Sulawesi. Satellite imagery revealed widespread inundation and sediment discharge into coastal waters. The tropical rainfall was among the heaviest in decades, overwhelming drainage systems and low-lying settlements. NASA’s Earth-observing platforms helped emergency teams assess affected areas and monitor rainfall trends across the archipelago.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146113/indonesia_aria_20192.png'
  }),

  mk('e2020-j', { 
    type: 'storm', 
    title: 'Hurricane Laura', 
    year: 2020, 
    lat: 29.7, 
    lng: -93.5, 
    region: 'Gulf Coast, USA', 
    imageSeed: '2020-laura', 
    summary: 'Hurricane Laura made landfall in Louisiana in August 2020 as a powerful Category 4 storm. Winds exceeding 240 km/h caused catastrophic damage along the Gulf Coast, accompanied by severe storm surge and flooding. Terra and Aqua satellites captured detailed imagery of Laura’s tightly wound eye and post-storm inundation. The hurricane was one of the strongest to ever strike the region and became part of the record-breaking 2020 Atlantic hurricane season.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/147000/147204/lousiana_oli_2020226.jpg'
  }),
]


// 2021
const EVENTS_2021 = [
  mk('e2021-a', { 
    type: 'storm', 
    title: 'Subtropical Storm Ana', 
    year: 2021, 
    lat: -25.0, 
    lng: -55.0, 
    region: 'South America (subtropical)', 
    imageSeed: '2021-ana', 
    summary: 'Forming unusually early in the South Atlantic, Subtropical Storm Ana marked the beginning of an active storm year. The system brought heavy rain and gusty winds to parts of Paraguay and southern Brazil. Satellite imagery from Terra and Aqua captured cloud bands spiraling into a broad, asymmetric center. The storm highlighted growing trends of off-season tropical activity linked to warming sea surface temperatures.',
    nasaImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrWKAhAQXmCCEgeSAV-tE7Nle8_LekxGNEQ&s'
  }),

  mk('e2021-b', { 
    type: 'flood', 
    title: 'European Floods (Germany, Belgium)', 
    year: 2021, 
    lat: 50.0, 
    lng: 6.0, 
    region: 'Central Europe', 
    imageSeed: '2021-eufloods', 
    summary: 'In July 2021, record-breaking rainfall caused catastrophic flooding across western Germany and Belgium. Rivers like the Ahr and Meuse overflowed, submerging towns and destroying infrastructure. NASA’s Terra MODIS imagery revealed vast muddy plumes and inundated valleys days after the storms. The disaster became one of Europe’s deadliest weather events in decades, prompting renewed urgency in climate adaptation planning.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148598/weuropeflooding_oli_2021167.jpg'
  }),

  mk('e2021-c', { 
    type: 'drought', 
    title: 'US Pacific Northwest Heat Dome & Fires', 
    year: 2021, 
    lat: 46.9, 
    lng: -121.5, 
    region: 'Pacific Northwest, USA', 
    imageSeed: '2021-heatdome', 
    summary: 'An unprecedented “heat dome” gripped the U.S. Pacific Northwest in June 2021, shattering temperature records across Oregon, Washington, and British Columbia. The intense heat dried vegetation rapidly, igniting widespread wildfires visible from space. NASA’s Terra satellite recorded land surface temperatures exceeding 60°C in some regions. The event underscored the increasing frequency of compound climate extremes in temperate zones.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/150000/150459/pnw_amo_2022282_th.jpg'
  }),

  mk('e2021-d', { 
    type: 'snowstorm', 
    title: 'Texas Winter Storm', 
    year: 2021, 
    lat: 31.0, 
    lng: -100.0, 
    region: 'Texas, USA', 
    imageSeed: '2021-texaswinter', 
    summary: 'In February 2021, a massive Arctic air outbreak blanketed Texas in snow and ice, overwhelming the state’s energy grid. Millions were left without power and heat for days amid subfreezing conditions. Terra and Aqua MODIS images showed the entire state under a rare snow cover, stretching to the Gulf Coast. The storm highlighted vulnerabilities in energy infrastructure under extreme cold events.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/147000/147941/houston_bmhd_2021038.jpg'
  }),

  mk('e2021-e', { 
    type: 'cyclone', 
    title: 'Cyclone Tauktae', 
    year: 2021, 
    lat: 17.0, 
    lng: 72.0, 
    region: 'West Coast, India', 
    imageSeed: '2021-tauktae', 
    summary: 'Cyclone Tauktae, one of the strongest Arabian Sea cyclones in recent years, struck India’s western coast in May 2021. The storm brought destructive winds, heavy rainfall, and storm surges affecting Gujarat, Maharashtra, and coastal Karnataka. NASA’s MODIS sensor captured the storm’s well-defined eye and dense cloud structure. It was a stark reminder of the Arabian Sea’s increasing cyclonic intensity linked to warmer waters.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148325/indiacyclone_vir_2021137.jpg'
  }),

  mk('e2021-f', { 
    type: 'wildfire', 
    title: 'Greece/Turkey Wildfires', 
    year: 2021, 
    lat: 38.5, 
    lng: 23.0, 
    region: 'Greece/Turkey region', 
    imageSeed: '2021-grekturkeyfires', 
    summary: 'During the hot Mediterranean summer of 2021, devastating wildfires swept through Greece and Turkey. Satellite imagery from Terra and Aqua captured large smoke plumes drifting over the Aegean Sea. Hundreds of square kilometers of forest and farmland were lost, forcing mass evacuations. The fires coincided with record-breaking heatwaves that gripped southern Europe, intensifying concerns about Mediterranean climate resilience.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148650/firesturkey_oli_2021212.jpg'
  }),

  mk('e2021-g', { 
    type: 'wildfire', 
    title: 'Siberian Wildfires', 
    year: 2021, 
    lat: 60.0, 
    lng: 105.0, 
    region: 'Siberia, Russia', 
    imageSeed: '2021-siberiafires', 
    summary: 'Throughout the summer of 2021, Siberia experienced another season of extensive wildfires, many burning across permafrost landscapes. MODIS and VIIRS imagery captured immense smoke plumes stretching thousands of kilometers across the Arctic Circle. The fires released millions of tons of carbon, contributing to feedback loops accelerating Arctic warming. Yakutia was among the most affected regions, with skies turning orange for weeks.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/153000/153087/arcticfires_oli_20240710.jpg'
  }),

  mk('e2021-h', { 
    type: 'volcano', 
    title: 'Kilauea Resumes Activity', 
    year: 2021, 
    lat: 19.4, 
    lng: -155.2, 
    region: 'Hawaii, USA', 
    imageSeed: '2021-kilauearesume', 
    summary: 'After a quiet period, Hawaii’s Kīlauea volcano resumed eruptive activity in late 2021. Lava fountains reappeared at the summit crater, filling parts of Halemaʻumaʻu with molten rock. NASA’s Earth-observing satellites captured nighttime heat signatures and degassing plumes. The eruption was closely monitored by scientists to study magma system dynamics and its ecological effects on surrounding regions.',
    nasaImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9dNecOdClwWDuG9FjQtCRBk8NQkPTBnYkg&s'
  }),

  mk('e2021-i', { 
    type: 'flood', 
    title: 'Uttarakhand Glacier Flood', 
    year: 2021, 
    lat: 30.0, 
    lng: 79.0, 
    region: 'Uttarakhand, India', 
    imageSeed: '2021-uttar-flood', 
    summary: 'In February 2021, a sudden glacial outburst flood struck the Chamoli district of Uttarakhand, India. A collapsing portion of a glacier triggered debris flows and flash flooding downstream, devastating hydropower sites. Satellite images revealed scarred valleys and sediment-laden rivers in the Himalayas. The disaster drew global attention to the growing risks of glacial melt and infrastructure vulnerability in high mountains.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/81000/81450/nindia_amo_2013172.jpg'
  }),

  mk('e2021-j', { 
    type: 'drought', 
    title: 'Amazon Drought & Burns', 
    year: 2021, 
    lat: -4, 
    lng: -63, 
    region: 'Amazon Basin', 
    imageSeed: '2021-amazondrought', 
    summary: 'The Amazon Basin faced a severe drought in 2021, with reduced rainfall and drying rivers stressing the ecosystem. Fire outbreaks increased sharply, emitting vast smoke plumes observed from NASA satellites. MODIS imagery revealed vegetation browning and patchy canopy loss across southern Brazil. The recurring drought-fire cycle has become a major concern for the rainforest’s resilience and global carbon balance.',
    nasaImage: 'https://assets.science.nasa.gov/content/dam/science/esd/eo/content-feature/amazonfire/images/Brazil.A2003243.1730_350.jpg'
  }),
]


// 2022
const EVENTS_2022 = [
  mk('e2022-a', {
    type: 'volcano',
    title: 'Hunga Tonga Eruption & Tsunami',
    year: 2022,
    lat: -20.5,
    lng: -175.4,
    region: 'Tonga / South Pacific',
    imageSeed: '2022-hunga',
    summary: 'In January 2022, the Hunga Tonga volcano produced one of the most explosive eruptions in recent decades, sending shockwaves through the atmosphere. The eruption triggered a powerful tsunami that impacted Tonga’s coast and neighboring islands. Satellite data captured a dramatic water vapor plume reaching into the stratosphere and ash clouds spreading across the Pacific. The event was widely studied for its atmospheric effects and coupling between volcanic and oceanic processes.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149367/hungatonga_dem_2021100.jpg'
  }),
  mk('e2022-b', {
    type: 'flood',
    title: 'Pakistan Super-Floods',
    year: 2022,
    lat: 30.0,
    lng: 70.0,
    region: 'Pakistan',
    imageSeed: '2022-pakfloods',
    summary: 'In mid-2022, record monsoon rainfall caused catastrophic flooding across Pakistan, submerging large swathes of lowland provinces. Rivers breached embankments, inundating settlements, isolating communities, and damaging infrastructure. Satellite imagery documented vast inland water coverage and sediment-laden flood plumes. The humanitarian crisis triggered mass displacement, with relief efforts focusing on food, health, and shelter in flood zones.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/45000/45091/pakistan_amo_2010220.jpg'
  }),
  mk('e2022-c', {
    type: 'wildfire',
    title: 'US Wildfires (NM, CA)',
    year: 2022,
    lat: 36.0,
    lng: -119.0,
    region: 'US West',
    imageSeed: '2022-usfires',
    summary: 'The 2022 western U.S. wildfire season saw extensive fire activity especially in New Mexico and California. Fire hotspots expanded under persistent drought and high temperatures. Satellite thermal sensors recorded hundreds of active burn sites over long durations. The spread of smoke affected air quality far beyond fire zones, prompting alert levels in multiple states.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149748/newmexico_amovir_2022113.jpg'
  }),
  mk('e2022-d', {
    type: 'drought',
    title: 'China Heat and Drought',
    year: 2022,
    lat: 35.0,
    lng: 105.0,
    region: 'China',
    imageSeed: '2022-chinadrought',
    summary: 'Central and northern China experienced a severe 2022 heatwave that exacerbated drought across major agricultural provinces. Many river systems saw lowered flow, affecting irrigation and hydropower generation. Vegetation stress and soil moisture depletion appeared clearly in satellite drought indices. The heat and dryness aggravated food security concerns in rural districts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/81000/81870/chinalsta_tmo_2013217.jpg'
  }),
  mk('e2022-e', {
    type: 'cyclone',
    title: 'Hurricane Ian',
    year: 2022,
    lat: 27.3,
    lng: -82.5,
    region: 'USA (Florida)',
    imageSeed: '2022-ian',
    summary: 'Hurricane Ian struck Florida in late 2022, becoming one of the costliest hurricanes in U.S. history. Its powerful winds, heavy rains, and storm surge devastated coastal communities. Satellite and radar imagery captured the robust eye and hurricane structure as it made landfall. Ian’s inland flooding and wind damage stretched far beyond the coast, affecting large swathes of central Florida.',
    nasaImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4MuTGd5ZWJTMoxD812fESozWVtvIUYrfxw&s'
  }),
  mk('e2022-f', {
    type: 'flood',
    title: 'Bangladesh/India Floods',
    year: 2022,
    lat: 23.6,
    lng: 90.5,
    region: 'Bangladesh / India',
    imageSeed: '2022-bdfloods',
    summary: 'Intense monsoon rains in 2022 triggered widespread flooding across Bangladesh and eastern India. Floodwaters inundated low-lying delta plains and submerged roads, homes, and croplands. Satellite water extent maps showed rivers overflowing well beyond banks. The floods displaced many thousands and disrupted agriculture in heavily populated areas.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/9000/9950/bangladesh.TMO2002217_lrg.jpg'
  }),
  mk('e2022-g', {
    type: 'drought',
    title: 'East Africa Drought / Famine',
    year: 2022,
    lat: 6.0,
    lng: 39.0,
    region: 'East Africa',
    imageSeed: '2022-eastafricadrought',
    summary: 'In 2022, prolonged lack of rainfall led to severe drought across East Africa, threatening food and water security. Pastoral and agricultural communities were hard hit as pasture and water sources dried up. Satellite imagery showed large vegetation anomalies and moisture deficits over Somalia, Ethiopia, and Kenya. The crisis prompted humanitarian response in regions already vulnerable to climate stress.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/13000/13572/eafrica_avhrr_11-20apr05.jpg'
  }),
  mk('e2022-h', {
    type: 'flood',
    title: 'Australian East Coast Floods',
    year: 2022,
    lat: -25,
    lng: 147,
    region: 'Australia East',
    imageSeed: '2022-ausfloods',
    summary: 'Coastal storms and heavy rainfall fueled flooding and landslides along Australia’s eastern seaboard in 2022. Rivers surged, overwhelming flood defenses in Queensland and New South Wales. Satellite water extent mapping showed inundation across farmland and urban zones. Recovery operations focused on infrastructure repair and community relocation in vulnerable catchments.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/153000/153914/ausflood_mrg_20250204_th.jpg'
  }),
  mk('e2022-i', {
    type: 'drought',
    title: 'Amazon Fires / Drought',
    year: 2022,
    lat: -4,
    lng: -63,
    region: 'Amazon Basin',
    imageSeed: '2022-amazonfires',
    summary: 'Severe drought in 2022 amplified fire activity across the Amazon Basin, especially in eastern Brazil. Thermal scans revealed clusters of active burning near deforested and forest-edge areas. Rivers in the basin shrank, limiting transport and water supply for communities. The combined drought-fire cycle created smoke layers visible from space over vast forested regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/153000/153175/amazon_deforestation_amo_20240804.jpg'
  }),
  mk('e2022-j', {
    type: 'pollution',
    title: 'Middle East Dust Storms',
    year: 2022,
    lat: 24.0,
    lng: 46.0,
    region: 'Middle East',
    imageSeed: '2022-middleeastdust',
    summary: 'In 2022, repeated dust storms swept across the Middle East, driven by strong winds and dry soils. Satellite aerosol imagery tracked dust plumes drifting from the Arabian Peninsula over neighboring countries. Surface visibility dropped significantly in urban centers. The dust transport contributed to respiratory issues and impacted aviation operations.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/154000/154186/dust_tmo_20250414.jpg'
  }),
]

// 2023
const EVENTS_2023 = [
  mk('e2023-a', {
    type: 'wildfire',
    title: 'Canada Record Wildfires',
    year: 2023,
    lat: 60.0,
    lng: -110.0,
    region: 'Canada',
    imageSeed: '2023-canadafires',
    summary: 'In 2023, Canada endured one of its worst wildfire seasons on record, with vast tracts of boreal forest consumed by fire. Satellite observations captured towering smoke plumes that traveled across continents and degraded air quality in distant regions. Burn scars expanded rapidly under drought conditions and lightning ignition. Fire management agencies faced logistical strain as multiple fires merged and expanded simultaneously.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151696/yellowknife_fires_amo_2023220.jpg'
  }),
  mk('e2023-b', {
    type: 'drought',
    title: 'Mediterranean Heat & Drought',
    year: 2023,
    lat: 37.0,
    lng: 15.0,
    region: 'Mediterranean',
    imageSeed: '2023-medheat',
    summary: 'Southern Europe and the Mediterranean region endured prolonged heat and insufficient rainfall in 2023, intensifying drought stress. Water reservoirs and rivers plummeted to historic lows, impacting agriculture and urban water supply. Satellite thermal anomalies revealed large surface heating over Spain, Italy, and Greece. Fire risk soared as vegetation dried out, prompting multi-country heat and water alerts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145874/chiledrought_tmo_2019309.png'
  }),
  mk('e2023-c', {
    type: 'storm',
    title: 'Cyclonic Storms (North Indian Ocean)',
    year: 2023,
    lat: 18.0,
    lng: 85.0,
    region: 'North Indian Ocean',
    imageSeed: '2023-nio-cyclones',
    summary: 'The North Indian Ocean basin saw multiple cyclonic storms in 2023, affecting India, Bangladesh, and Myanmar. Satellite data recorded deep convection, rain bands, and evolving circulation centers over warm sea surfaces. Coastal flooding and wind damage struck low-lying deltas and islands. Forecast models and satellite imagery helped track storm paths and alert vulnerable populations in advance.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145841/maha_tmo_2019308.jpg'
  }),
  mk('e2023-d', {
    type: 'cyclone',
    title: 'Typhoon Mawar',
    year: 2023,
    lat: 15.0,
    lng: 145.0,
    region: 'East Asia / Western Pacific',
    imageSeed: '2023-mawar',
    summary: 'Typhoon Mawar developed into a powerful cyclone in 2023, inflicting heavy rainfall and strong winds on Pacific island nations. Satellite loops show a tightly organized eye and spiral cloud bands wrapping the storm center. Coastal storm surge threatened shorelines, while inland flooding impacted vulnerable communities. Disaster response teams monitored its path across sea and land.',
    nasaImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cPP3auekgaaLcKXE_FDveRgnMjkDLeW1gA&s'
  }),
  mk('e2023-e', {
    type: 'drought',
    title: 'Midwestern US Drought',
    year: 2023,
    lat: 41.5,
    lng: -93.5,
    region: 'Midwest, USA',
    imageSeed: '2023-midwestdrought',
    summary: 'The U.S. Midwest experienced a drought in 2023 as rainfall deficits persisted over multiple growing seasons. Corn and soybean yields suffered under soil moisture stress. NASA’s vegetation and moisture indices showed below-normal greenness and reduced evapotranspiration rates. Water bodies receded and stress on irrigation systems increased across Iowa, Illinois, and Nebraska.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/18000/18478/UnitedStates_AVR_20070531.jpg'
  }),
  mk('e2023-f', {
    type: 'landslide',
    title: 'Papua New Guinea Landslides',
    year: 2023,
    lat: -6.3,
    lng: 143.0,
    region: 'Papua New Guinea',
    imageSeed: '2023-pnglandslides',
    summary: 'In 2023, torrential rainfall triggered multiple landslides across Papua New Guinea’s rugged terrain. Satellite imagery and elevation data mapped debris flows cutting through forest and hillside communities. Some slides blocked stream channels, causing secondary flooding and isolation of villages. Disaster response teams worked to restore access and evacuate impacted settlements.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/8000/8810/png_etm_2001303.jpg'
  }),
  mk('e2023-g', {
    type: 'flood',
    title: 'US Southwest Flooding',
    year: 2023,
    lat: 34.0,
    lng: -111.0,
    region: 'US Southwest',
    imageSeed: '2023-southwestfloods',
    summary: 'Deep convective storms in 2023 dumped intense rainfall over desert basins in the US Southwest. The dry soils led to rapid runoff, producing flash floods in arroyos and urban canyons. Satellite maps captured expanding floodwater footprints in river valleys and city outskirts. Communities experienced damage to roads, homes, and critical infrastructure under sudden flooding events.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/17000/17858/Bolivia_AMO_2007056.jpg'
  }),
  mk('e2023-h', {
    type: 'pollution',
    title: 'North Africa Dust Storms',
    year: 2023,
    lat: 24.0,
    lng: 12.0,
    region: 'North Africa',
    imageSeed: '2023-nadust',
    summary: 'In 2023, strong winds lifted vast amounts of Saharan dust into the atmosphere, forming dense aerosol plumes stretching over the Atlantic and Mediterranean. Satellite aerosol optical depth and RGB imagery traced the dust layers drifting over the Sahel and southern Europe. The dust diminished air quality over wide regions and influenced atmospheric heating profiles. Dust transport modeling showed long-range impacts on precipitation and air currents.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/15000/15878/libya_amo_2005348.jpg'
  }),
  mk('e2023-i', {
    type: 'storm',
    title: 'California Storms & Landslides',
    year: 2023,
    lat: 36.5,
    lng: -119.0,
    region: 'California, USA',
    imageSeed: '2023-ca-storms',
    summary: 'Powerful atmospheric rivers in 2023 brought intense rainfall to California’s foothills and mountains. The saturated soils triggered landslides and debris flows in steep terrain near wildfire-scarred slopes. Satellite imagery documented storm cloud bands and expanding floodplains in damaged watersheds. Communities in coastal and inland zones faced flooding, slope failure, and erosion impacts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/153000/153893/ranchopalos_aria_20241017.jpg'
  }),
  mk('e2023-j', {
    type: 'wildfire',
    title: 'European Wildfires',
    year: 2023,
    lat: 39.0,
    lng: 22.5,
    region: 'Southern Europe',
    imageSeed: '2023-eu-fires',
    summary: 'Mediterranean countries endured a severe wildfire season in 2023, with simultaneous fire outbreaks in Greece, Turkey, and the Balkans. Satellite thermal sensors revealed clusters of fire hotspots and expanding burn scars across forested hills. Smoke plumes spread over the Aegean and eastern Mediterranean Sea. Firefighting efforts spanned multiple nations facing drought-amplified fire conditions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/18000/18772/albania_amo_2007241.jpg'
  }),
]


// 2024
const EVENTS_2024 = [
  mk('e2024-a', { 
    type: 'wildfire', 
    title: 'California Wildfires', 
    year: 2024, 
    lat: 36.5, 
    lng: -119.0, 
    region: 'California, USA', 
    imageSeed: '2024-cawildfires', 
    summary: 'The 2024 fire season brought persistent wildfire outbreaks across California’s forested and grassland regions. Terra imagery captured smoke plumes extending hundreds of kilometers over the Pacific. Burn scars expanded rapidly under hot, dry, and windy conditions. Emergency services battled numerous blazes while air quality alerts stretched from Los Angeles to San Francisco.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148908/dixiesfire_oli_2021256.jpg'
  }),
  mk('e2024-b', { 
    type: 'drought', 
    title: 'Europe Drought & Heat', 
    year: 2024, 
    lat: 50.0, 
    lng: 10.0, 
    region: 'Europe', 
    imageSeed: '2024-eurodrought', 
    summary: 'Europe faced another summer of heat and aridity in 2024, as record-breaking temperatures persisted across the continent. Satellite observations revealed parched river basins, shrinking reservoirs, and agricultural stress across southern and central Europe. Vegetation indices showed widespread browning from France to Poland. Authorities issued water restrictions amid ongoing heatwaves.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151366/iberian_tmo_2023131_th.jpg'
  }),
  mk('e2024-c', { 
    type: 'cyclone', 
    title: 'Philippines / SE Asia Typhoons & Floods', 
    year: 2024, 
    lat: 12.0, 
    lng: 122.0, 
    region: 'Philippines / SE Asia', 
    imageSeed: '2024-sea-typhoons', 
    summary: 'A series of tropical cyclones struck the western Pacific and Southeast Asia during mid-2024. Intense rainfall from multiple typhoons led to widespread flooding in low-lying communities of the Philippines and Vietnam. Landslides were triggered in mountainous terrain, while satellite images showed swollen river systems. Emergency evacuations and relief efforts were mobilized across the region.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/14000/14243/philippine_TRM_2004338.jpg'
  }),
  mk('e2024-d', { 
    type: 'drought', 
    title: 'Amazon Mega-Drought', 
    year: 2024, 
    lat: -4, 
    lng: -63, 
    region: 'Amazon Basin, Brazil', 
    imageSeed: '2024-amazondrought', 
    summary: 'The Amazon Basin experienced one of its most severe droughts in decades. River levels fell dramatically, isolating riverine communities and disrupting ecosystems. Satellite sensors detected widespread vegetation stress and increased fire activity in the region. Scientists attributed the crisis to a combination of warming trends and El Niño-induced rainfall deficits.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/50000/50136/amazonndvia_tmo_2010.png'
  }),
  mk('e2024-e', { 
    type: 'cyclone', 
    title: 'Gulf of Mexico Hurricane Season', 
    year: 2024, 
    lat: 25.0, 
    lng: -90.0, 
    region: 'Gulf of Mexico / Caribbean', 
    imageSeed: '2024-gulfhurricanes', 
    summary: 'An active Atlantic hurricane season saw multiple storms form over the Gulf of Mexico. High sea surface temperatures fueled rapid intensification of several systems. NASA’s Terra satellite captured massive cloud spirals and storm surges impacting coastal communities. The storms caused power outages, flooding, and significant infrastructure damage across the Gulf Coast.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/150000/150406/hurricaneian_tmo_2022270.jpg'
  }),
  mk('e2024-f', { 
    type: 'drought', 
    title: 'South Asia Heatwave', 
    year: 2024, 
    lat: 23.0, 
    lng: 80.0, 
    region: 'South Asia', 
    imageSeed: '2024-southasiaheat', 
    summary: 'A prolonged heatwave engulfed South Asia, with surface temperatures exceeding 45°C in many areas. Crops wilted across large agricultural belts, while power grids struggled under surging demand. Terra imagery revealed extensive land surface temperature anomalies over northern India and Pakistan. Public health warnings were issued as heat-related illnesses increased sharply.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/5000/5603/nindia_tmolst_25may05.jpg'
  }),
  mk('e2024-g', { 
    type: 'wildfire', 
    title: 'Mexico Wildfire Season', 
    year: 2024, 
    lat: 23.0, 
    lng: -102.0, 
    region: 'Mexico', 
    imageSeed: '2024-mexwildfires', 
    summary: 'Large wildfires spread across central and southern Mexico during the dry season. Smoke from the fires blanketed nearby cities, reducing visibility and degrading air quality. NASA satellites observed multiple thermal hotspots and fire fronts across the Sierra Madre. The fires highlighted ongoing challenges of land management and climate-driven drought conditions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/152000/152628/mexicofire_oli2_20240327.jpg'
  }),
  mk('e2024-h', { 
    type: 'flood', 
    title: 'South Africa Flooding', 
    year: 2024, 
    lat: -30.0, 
    lng: 25.0, 
    region: 'South Africa', 
    imageSeed: '2024-safloods', 
    summary: 'Torrential rains triggered flash floods across several South African provinces in early 2024. Rivers burst their banks, inundating farmland and displacing thousands. Satellite imagery showed muddy floodwaters spreading through urban and rural zones. Infrastructure damage and transportation disruptions were widespread, prompting emergency declarations.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/80000/80343/mozambique_ali_2013031.jpg'
  }),
  mk('e2024-i', { 
    type: 'storm', 
    title: 'US Tornado Super-Outbreak', 
    year: 2024, 
    lat: 35.0, 
    lng: -90.0, 
    region: 'Central / Southern USA', 
    imageSeed: '2024-tornadooutbreak', 
    summary: 'One of the largest tornado outbreaks in recent U.S. history struck in spring 2024. Multiple EF3 and EF4 tornadoes touched down across the central and southern plains. Satellite radar data revealed atmospheric instability patterns preceding the event. Entire neighborhoods were leveled as emergency response units coordinated extensive rescue operations.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/11000/11406/radarheight_trm2003124.jpg'
  }),
  mk('e2024-j', { 
    type: 'storm', 
    title: 'Mediterranean Storms', 
    year: 2024, 
    lat: 36.0, 
    lng: 18.0, 
    region: 'Mediterranean', 
    imageSeed: '2024-medstorms', 
    summary: 'A sequence of powerful Mediterranean storms swept across southern Europe and North Africa. Strong winds and torrential rains led to flash floods in coastal cities from Greece to Tunisia. Terra satellite imagery captured swirling low-pressure systems over the sea. These events underscored increasing climate volatility in the Mediterranean basin.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/89000/89034/mediterranean_tmo_2016304.jpg'
  }),
]


// 2025
const EVENTS_2025 = [
  mk('e2025-a', {
    type: 'wildfire',
    title: 'California Continued Wildfires',
    year: 2025,
    lat: 36.5,
    lng: -119.0,
    region: 'California, USA',
    imageSeed: '2025-cawildfires',
    summary: 'In early 2025, California continues to endure an active fire season, with multiple wildfires igniting across the state. Satellite images show expansive burn scars in forest and brushland zones. Smoke plumes drift over urban areas, degrading air quality across valleys and coastal regions. Fire management agencies mobilize resources, while drought and fuel buildup exacerbate fire spread.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/147000/147363/california_vir_2020275_detail.jpg'
  }),
  mk('e2025-b', {
    type: 'cyclone',
    title: 'Cyclone Freddy (Indian Ocean)',
    year: 2025,
    lat: -20.0,
    lng: 60.0,
    region: 'Indian Ocean / Madagascar region',
    imageSeed: '2025-freddy',
    summary: 'Cyclone Freddy persists as one of the longest-lasting tropical cyclones, traversing the Indian Ocean over many days. Its trajectory affects Madagascar and surrounding island nations with heavy rainfall and gusty winds. Satellite imagery reveals deep convective clouds and spiral bands wrapping around the storm center. Flooding and wind damage inland compound coastal impacts.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151002/freddy_vir_2023052.jpg'
  }),
  mk('e2025-c', {
    type: 'deforestation',
    title: 'Amazon Burning (Early 2025)',
    year: 2025,
    lat: -4,
    lng: -63,
    region: 'Amazon Basin, Brazil',
    imageSeed: '2025-amazonburn',
    summary: 'In early 2025, deforestation-linked fires reemerge in the Amazon Basin, producing extensive smoke and burn patches. Satellite detection shows linear fire fronts near roads and clearings, indicating human-driven clearing. Smoke haze blankets large forest zones and drifts into neighboring countries. The event underscores continuing pressure on rainforest ecosystems from land-use change.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/147000/147946/amazonburnedwide_vir_2020.jpg'
  }),
  mk('e2025-d', {
    type: 'flood',
    title: 'Southeast Asia Floods (2025)',
    year: 2025,
    lat: 12.0,
    lng: 105.0,
    region: 'Southeast Asia',
    imageSeed: '2025-seafloods',
    summary: 'Monsoon systems and tropical convection in 2025 lead to widespread flooding across Southeast Asia. Rivers overflow, inundating agricultural plains and low-lying communities. Satellite maps show enlarged water bodies and turbid plumes extending from river mouths to coastal zones. Relief efforts focus on evacuation, infrastructure repair, and public health response in flood-impacted regions.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/76000/76291/seasia_tmo_2011305.jpg'
  }),
  mk('e2025-e', {
    type: 'storm',
    title: 'Central US Tornadoes (2025)',
    year: 2025,
    lat: 38.0,
    lng: -97.0,
    region: 'Central USA',
    imageSeed: '2025-centus-tornadoes',
    summary: 'During 2025’s storm season, central U.S. experiences several tornado outbreaks across the Plains and Midwest. Radar and satellite imagery depict rotating supercells and storm tracks. Tornado damage swaths through rural and suburban areas, damaging structures and uprooting trees. Emergency services respond to casualties and infrastructure damage in impacted counties.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/19000/19973/usa_trmm_2008134.jpg'
  }),
  mk('e2025-f', {
    type: 'drought',
    title: 'European Drought & Wildfires (2025)',
    year: 2025,
    lat: 50.0,
    lng: 10.0,
    region: 'Europe',
    imageSeed: '2025-eudrought',
    summary: 'A 2025 heatwave intensifies drought conditions across large parts of Europe, stressing rivers, soils, and vegetation. Satellite-based moisture indices show widespread deficits. The dry fuels elevate wildfire risk, particularly in southern and central European regions. Countries issue warnings as fire agencies brace for extended fire seasons.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/154000/154654/francefire_tmo_20250806.jpg'
  }),
  mk('e2025-g', {
    type: 'storm',
    title: 'Caribbean / Gulf Hurricanes (2025)',
    year: 2025,
    lat: 18.0,
    lng: -75.0,
    region: 'Caribbean / Gulf',
    imageSeed: '2025-carib-hurricanes',
    summary: 'The early part of the 2025 Atlantic hurricane season shows multiple storm systems developing in the Caribbean and Gulf of Mexico. Satellite loops capture storm genesis near tropical waves and intensification over warm ocean waters. Coastal zones brace for storm surge, heavy rainfall, and wind impacts. Observations monitor evolving paths and landfall potential.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/18000/18891/dean_qsc_20072322331.jpg'
  }),
  mk('e2025-h', {
    type: 'drought',
    title: 'China Heatwave (2025)',
    year: 2025,
    lat: 35.0,
    lng: 116.0,
    region: 'China',
    imageSeed: '2025-chinaheat',
    summary: 'In 2025, Northern and Central China endure a severe heatwave, triggering drought across agricultural provinces. Reduced precipitation and high evapotranspiration stress crops and water reserves. Satellite thermal maps highlight surface temperature anomalies and soil moisture decline. Local governments issue heat warnings and anticipate food security challenges.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/81000/81870/chinalsta_tmo_2013217.jpg'
  }),
  mk('e2025-i', {
    type: 'pollution',
    title: 'Indonesia / Malaysia Smoke Haze',
    year: 2025,
    lat: -1.0,
    lng: 110.0,
    region: 'Indonesia / Malaysia',
    imageSeed: '2025-sea-haze',
    summary: 'Persistent peat and forest fires in 2025 emit dense smoke plumes across Indonesia and Malaysia. Aerosol loading degrades air quality, imposing health hazards in urban centers. Satellite images trace haze layers crossing island states and impacting neighboring countries. The transboundary nature of the haze sparks regional cooperation and response measures.',
    nasaImage: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86596/jambi_oli_2015248_swir.jpg'
  }),
  mk('e2025-j', {
    type: 'earthquake',
    title: 'Japan Seismic Swarms / Tsunami Risk (2025)',
    year: 2025,
    lat: 36.0,
    lng: 139.0,
    region: 'Japan',
    imageSeed: '2025-japanseismic',
    summary: 'In 2025, central Japan experiences a cluster of increased seismic activity, raising concerns about future earthquakes and tsunami potential. Seismic monitoring shows frequent microquakes along subduction zone faults. Satellite deformation data helps map strain accumulation and crustal shifts. Authorities remain vigilant, given Japan’s history of megaquakes and tsunami risk.',
    nasaImage: 'https://cdn.mos.cms.futurecdn.net/iaxtfDW3FAta4HNLgLYLqD-1200-80.jpg'
  }),
]


// Combine into FEATURED
export const FEATURED = [
  ...EVENTS_2005,
  ...EVENTS_2006,

  ...EVENTS_2007,
  ...EVENTS_2008,
  ...EVENTS_2009,
  ...EVENTS_2010,
  ...EVENTS_2011,
  ...EVENTS_2012,
  ...EVENTS_2013,
  ...EVENTS_2014,
  ...EVENTS_2015,
  ...EVENTS_2016,
  ...EVENTS_2017,
  ...EVENTS_2018,
  ...EVENTS_2019,
  ...EVENTS_2020,
  ...EVENTS_2021,
  ...EVENTS_2022,
  ...EVENTS_2023,
  ...EVENTS_2024,
  ...EVENTS_2025,
]


// Regions to sample from (rough centroids)
const REGIONS = [
  { name: 'Amazon Basin', lat: -4, lng: -63 },
  { name: 'US West Coast', lat: 38, lng: -122 },
  { name: 'US East Coast', lat: 40, lng: -74 },
  { name: 'Southern Europe', lat: 41, lng: 14 },
  { name: 'North Africa', lat: 24, lng: 12 },
  { name: 'Horn of Africa', lat: 8, lng: 40 },
  { name: 'South Asia', lat: 23, lng: 80 },
  { name: 'Southeast Asia', lat: 12, lng: 105 },
  { name: 'East Asia', lat: 35, lng: 116 },
  { name: 'Siberia', lat: 60, lng: 105 },
  { name: 'Australia East', lat: -25, lng: 147 },
  { name: 'Andes', lat: -15, lng: -70 },
  { name: 'Mediterranean', lat: 37, lng: 22 },
  { name: 'Central Europe', lat: 50, lng: 10 },
  { name: 'UK & Ireland', lat: 54, lng: -3 },
  { name: 'Japan', lat: 36, lng: 139 },
  { name: 'Indonesia', lat: -2, lng: 118 },
  { name: 'Oceania', lat: -20, lng: 165 },
]

// Simple deterministic RNG
function mulberry32(seed) {
  return function() {
    let t = (seed += 0x6D2B79F5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const strHash = (s) => {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)
  }
  return h >>> 0
}

function pick(arr, rnd) {
  return arr[Math.floor(rnd() * arr.length)]
}

function jitter(value, scale, rnd) {
  return value + (rnd() - 0.5) * scale
}

function genEvent(year, idx, rnd) {
  const type = EVENT_TYPES[Math.floor(rnd() * EVENT_TYPES.length)]
  const base = pick(REGIONS, rnd)
  const lat = Math.max(-80, Math.min(80, jitter(base.lat, 10, rnd)))
  const lng = jitter(base.lng, 15, rnd)
  const label = typeToLabel[type]
  const region = base.name
  const id = `y${year}-${String(idx).padStart(2, '0')}`
  const title = `${label} Activity ${year}-${idx}`
  const summary = `${label} signals observed near ${region}. Conditions consistent with satellite-indicated anomalies.`
  return mk(id, { type, title, year, lat, lng, region, imageSeed: `${year}-${type}-${idx}`, summary })
}

const byYear = new Map()
for (const f of FEATURED) {
  if (!byYear.has(f.year)) byYear.set(f.year, [])
  byYear.get(f.year).push(f)
}

for (let y = 2005; y <= 2025; y++) {
  if (!byYear.has(y)) byYear.set(y, [])
  const list = byYear.get(y)
  const rnd = mulberry32(strHash(`seed-${y}`))
  let idx = list.length
  while (list.length < 10) {
    list.push(genEvent(y, ++idx, rnd))
  }
}

const EVENTS = Array.from({ length: 2025 - 2005 + 1 }, (_, i) => 2005 + i)
  .flatMap(y => byYear.get(y))

export default EVENTS
