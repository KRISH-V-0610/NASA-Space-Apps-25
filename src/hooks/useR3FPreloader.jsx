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

    // Preload all models immediately
    const preloadAll = async () => {
      const totalAssets = PRELOAD_ASSETS.models.length;
      let loadedCount = 0;

      // Use Promise.all for faster parallel loading
      const loadPromises = PRELOAD_ASSETS.models.map((url) => {
        return new Promise((resolve, reject) => {
          try {
            // Preload using R3F's built-in method
            useGLTF.preload(url);
            
            // Small delay to ensure model is cached
            setTimeout(() => {
              loadedCount++;
              if (isMounted) {
                const newProgress = (loadedCount / totalAssets) * 100;
                setProgress(newProgress);
                
                if (loadedCount === totalAssets) {
                  setIsReady(true);
                  console.log('✅ All 3D models preloaded successfully');
                }
              }
              resolve();
            }, 50);
          } catch (error) {
            console.error(`Failed to preload ${url}:`, error);
            loadedCount++;
            if (isMounted) {
              setProgress((loadedCount / totalAssets) * 100);
            }
            resolve(); // Don't block other models
          }
        });
      });

      await Promise.all(loadPromises);
    };

    preloadAll();

    return () => {
      isMounted = false;
    };
  }, []);

  return { progress, isReady };
}