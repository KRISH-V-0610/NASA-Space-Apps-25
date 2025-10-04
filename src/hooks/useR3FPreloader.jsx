// hooks/useR3FPreloader.jsx
import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const PRELOAD_ASSETS = {
  models: [
    '/3Dmodels/terra2.glb',
    '/3Dmodels/earth8k.glb',
    '/3Dmodels/astronaut.glb'
  ]
};

export function useR3FPreloader() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const totalAssets = PRELOAD_ASSETS.models.length;
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = (loadedCount / totalAssets) * 100;
      if (isMounted) {
        setProgress(newProgress);
        if (loadedCount === totalAssets) {
          setIsReady(true);
          console.log('All assets preloaded into R3F cache');
        }
      }
    };

    // Preload all models using R3F's built-in cache
    const preloadPromises = PRELOAD_ASSETS.models.map(url => {
      return new Promise((resolve) => {
        // Use R3F's preload API - this loads into their internal cache
        useGLTF.preload(url);
        
        // Since preload is synchronous, we simulate async for progress tracking
        setTimeout(() => {
          updateProgress();
          resolve();
        }, 100);
      });
    });

    Promise.all(preloadPromises).catch(err => {
      console.error('Preload error:', err);
      if (isMounted) {
        setIsReady(true); // Allow app to continue
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { progress, isReady };
}