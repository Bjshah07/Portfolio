import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const sanitizeGeometry = (geometry) => {
  if (!geometry.attributes || !geometry.attributes.position) return;

  const position = geometry.attributes.position;
  const array = position.array;
  let needsUpdate = false;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) || !isFinite(array[i])) {
      array[i] = 0; // replace NaN or Infinity with 0
      needsUpdate = true;
    }
  }

  if (needsUpdate) {
    position.needsUpdate = true;
    geometry.computeBoundingSphere();
  }
};

const sanitizeScene = (scene) => {
  scene.traverse((child) => {
    if (child.isMesh && child.geometry) {
      sanitizeGeometry(child.geometry);
    }
  });
};

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  if (earth && earth.scene) {
    sanitizeScene(earth.scene);
  }

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-primary">
        <div className="text-center">
          <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-4xl">🌍</span>
          </div>
          <p className="text-secondary text-lg">Earth Model Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      shadows={!isMobile}
      frameloop='demand'
      dpr={isMobile ? [1, 1] : [1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: !isMobile }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
