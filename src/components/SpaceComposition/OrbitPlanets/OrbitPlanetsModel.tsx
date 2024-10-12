import { useEffect, useRef } from 'react';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useControls } from 'leva';
import gsap from 'gsap';
import { isMesh } from '../../../utils';

export default function OrbitPlanetsModel() {
  const sceneRef = useRef<ThreeElements['primitive']>();
  const sceneModel = useLoader(
    GLTFLoader,
    `${import.meta.env.BASE_URL}planets.glb`
  );
  const { rotationX, rotationY, rotationZ } = useControls('Orbit Planets', {
    rotationX: { value: 0, min: -10, max: 10, step: 0.01 },
    rotationY: { value: -0.45, min: -10, max: 10, step: 0.01 },
    rotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
  });

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
    <group rotation={[rotationX, rotationY, rotationZ]}>
      <primitive object={sceneModel.scene} ref={sceneRef} />
    </group>
  );
}
