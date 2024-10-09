import { useEffect, useRef } from 'react';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import PlanetRingsModel from '../PlanetRings/PlanetRingsModel';
import { useControls } from 'leva';
import { DoubleSide, Material } from 'three';
import { isMesh } from '../../../utils';

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
    if (sceneModel) {
      sceneModel.scene.traverse((child) => {
        if (isMesh(child)) {
          const material = child.material as Material;
          material.needsUpdate = true;
        }
      });
    }
  }, [sceneModel]);

  return (
    <group rotation={[rotationX, rotationY, rotationZ]}>
      <primitive object={sceneModel.scene} ref={sceneRef} />
      <PlanetRingsModel />
    </group>
  );
}
