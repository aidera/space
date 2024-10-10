import { useEffect, useRef } from 'react';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Material, DoubleSide, Color } from 'three';
import { isMesh } from '../../../utils';

export default function PlanetRingsModel() {
  const sceneRef = useRef<ThreeElements['primitive']>();
  const sceneModel = useLoader(
    GLTFLoader,
    `${import.meta.env.BASE_URL}planet-rings.glb`
  );

  useEffect(() => {
    if (sceneModel) {
      sceneModel.scene.traverse((child) => {
        if (isMesh(child)) {
          const material = child.material as Material;
          material.side = DoubleSide;
          material.opacity = 0.4;
          material.needsUpdate = true;
        }
      });
    }
  }, [sceneModel]);

  return (
    <group>
      <primitive object={sceneModel.scene} ref={sceneRef} />
    </group>
  );
}
