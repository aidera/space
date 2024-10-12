import { useEffect, useRef } from 'react';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';
import { isMesh } from '../../../utils';

export default function OrbitPlanetsModel() {
  const sceneRef = useRef<ThreeElements['primitive']>();
  const sceneModel = useLoader(
    GLTFLoader,
    `${import.meta.env.BASE_URL}planets.glb`
  );

  useEffect(() => {
    if (sceneModel) {
      sceneModel.scene.traverse((child) => {
        if (isMesh(child)) {
          const randomDuration = Math.random() * 100 + 100;
          gsap.to(child.rotation, {
            y: `-=${Math.PI * 2}`,
            duration: randomDuration,
            repeat: -1,
            ease: 'none',
          });
        }
      });
    }
  }, [sceneModel]);

  useEffect(() => {
    if (sceneRef.current) {
      gsap.to(sceneRef.current.rotation, {
        y: `-=${Math.PI * 2}`,
        duration: 800,
        repeat: -1,
        ease: 'none',
      });
    }
  }, [sceneRef.current]);

  return (
    <group rotation={[0, -0.45, 0]}>
      <primitive object={sceneModel.scene} ref={sceneRef} />
    </group>
  );
}
