// /* eslint-disable no-unused-vars */
// // hooks/useBackgroundPreloader.jsx
// import { useState, useEffect, useRef } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader';

// const PRELOAD_ASSETS = {
//   models: [
//     '/3Dmodels/terra2.glb',
//     '/3Dmodels/earth8k.glb',
//     '/3Dmodels/astronaut.glb'
//   ],
//   environments: [
//     '/Backgrounds/space2.exr'
//   ],
//   videos: [
//     '/Backgrounds/loading-background.mp4'
//   ]
// };

// export function useBackgroundPreloader() {
//   const [progress, setProgress] = useState(0);
//   const [isReady, setIsReady] = useState(false);
//   const [error, setError] = useState(null);
//   const loadedAssetsRef = useRef(new Map());

//   useEffect(() => {
//     let isMounted = true;
//     const gltfLoader = new GLTFLoader();
//     const exrLoader = new EXRLoader();

//     const totalAssets = 
//       PRELOAD_ASSETS.models.length + 
//       PRELOAD_ASSETS.environments.length + 
//       PRELOAD_ASSETS.videos.length;
    
//     let loadedCount = 0;

//     const updateProgress = () => {
//       loadedCount++;
//       const newProgress = (loadedCount / totalAssets) * 100;
//       if (isMounted) {
//         setProgress(newProgress);
//         if (loadedCount === totalAssets) {
//           setIsReady(true);
//         }
//       }
//     };

//     const loadModel = (url) => {
//       return new Promise((resolve, reject) => {
//         gltfLoader.load(
//           url,
//           (gltf) => {
//             if (isMounted) {
//               loadedAssetsRef.current.set(url, gltf);
//               updateProgress();
//               resolve(gltf);
//             }
//           },
//           undefined,
//           (error) => {
//             console.error(`Failed to load model: ${url}`, error);
//             if (isMounted) {
//               updateProgress(); // Count as loaded to prevent blocking
//               resolve(null);
//             }
//           }
//         );
//       });
//     };

//     const loadEnvironment = (url) => {
//       return new Promise((resolve, reject) => {
//         exrLoader.load(
//           url,
//           (texture) => {
//             if (isMounted) {
//               loadedAssetsRef.current.set(url, texture);
//               updateProgress();
//               resolve(texture);
//             }
//           },
//           undefined,
//           (error) => {
//             console.error(`Failed to load environment: ${url}`, error);
//             if (isMounted) {
//               updateProgress();
//               resolve(null);
//             }
//           }
//         );
//       });
//     };

//     const loadVideo = (url) => {
//       return new Promise((resolve) => {
//         const video = document.createElement('video');
//         video.src = url;
//         video.preload = 'auto';
        
//         const onCanPlay = () => {
//           if (isMounted) {
//             loadedAssetsRef.current.set(url, video);
//             updateProgress();
//             resolve(video);
//           }
//           cleanup();
//         };

//         const onError = () => {
//           console.error(`Failed to load video: ${url}`);
//           if (isMounted) {
//             updateProgress();
//             resolve(null);
//           }
//           cleanup();
//         };

//         const cleanup = () => {
//           video.removeEventListener('canplaythrough', onCanPlay);
//           video.removeEventListener('error', onError);
//         };

//         video.addEventListener('canplaythrough', onCanPlay);
//         video.addEventListener('error', onError);
        
//         // Start loading
//         video.load();
//       });
//     };

//     // Start preloading all assets
//     const preloadAll = async () => {
//       try {
//         const modelPromises = PRELOAD_ASSETS.models.map(loadModel);
//         const envPromises = PRELOAD_ASSETS.environments.map(loadEnvironment);
//         const videoPromises = PRELOAD_ASSETS.videos.map(loadVideo);

//         await Promise.all([...modelPromises, ...envPromises, ...videoPromises]);
        
//         if (isMounted) {
//           console.log('All assets preloaded successfully');
//         }
//       } catch (err) {
//         console.error('Preloading error:', err);
//         if (isMounted) {
//           setError(err);
//           setIsReady(true); // Allow app to continue even on error
//         }
//       }
//     };

//     preloadAll();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   return { 
//     progress, 
//     isReady, 
//     error,
//     getAsset: (url) => loadedAssetsRef.current.get(url)
//   };
// }