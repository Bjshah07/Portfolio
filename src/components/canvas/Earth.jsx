import React, { Suspense } from "react";
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
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
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
