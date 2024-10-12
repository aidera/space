import { useEffect, useRef } from 'react';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import PlanetRingsModel from '../PlanetRings/PlanetRingsModel';
import OrbitPlanetsModel from '../OrbitPlanets/OrbitPlanetsModel';
import gsap from 'gsap';

export default function PlanetModel() {
  const sceneRef = useRef<ThreeElements['primitive']>();
  const sceneModel = useLoader(
    GLTFLoader,
    `${import.meta.env.BASE_URL}planet.glb`
  );
  const { rotationX, rotationY, rotationZ } = useControls('Planet', {
    rotationX: { value: 0.11, min: -10, max: 10, step: 0.01 },
    rotationY: { value: 0.32, min: -10, max: 10, step: 0.01 },
    rotationZ: { value: -0.19, min: -10, max: 10, step: 0.01 },
  });

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
    <group rotation={[rotationX, rotationY, rotationZ]}>
      <primitive object={sceneModel.scene} ref={sceneRef} />
      <OrbitPlanetsModel />
      <PlanetRingsModel />
    </group>
  );
}
