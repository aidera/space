import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import PlanetRingsModel from './PlanetRingsModel';
import OrbitPlanetsModel from './OrbitPlanetsModel';

export default function PlanetModel() {
  const sceneRef = useRef<ThreeElements['primitive']>();
  const sceneModel = useLoader(
    GLTFLoader,
    `${import.meta.env.BASE_URL}planet.glb`
  );

  useEffect(() => {
    if (sceneRef.current) {
      gsap.to(sceneRef.current.rotation, {
        y: `-=${Math.PI * 2}`,
        duration: 300,
        repeat: -1,
        ease: 'none',
      });
    }
  }, [sceneRef.current]);

  return (
    <group rotation={[0.11, 0.32, -0.19]}>
      <primitive object={sceneModel.scene} ref={sceneRef} />
      <OrbitPlanetsModel />
      <PlanetRingsModel />
    </group>
  );
}
