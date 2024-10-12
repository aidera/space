import { useRef, useEffect } from 'react';
import { PerspectiveCamera as DreiPerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera } from 'three';

export default function Camera() {
  const cameraRef = useRef<PerspectiveCamera>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth) * 2 - 1;
      const y = -(clientY / innerHeight) * 2 + 1;

      if (cameraRef.current) {
        cameraRef.current.position.x = 0.6 + x * 0.01;
        cameraRef.current.position.y = -0.2 + y * 0.0025;
        cameraRef.current.rotation.x = y * 0.001;
        cameraRef.current.rotation.y = x * -0.001;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <DreiPerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={20}
      position={[0.6, -0.2, 3.2]}
    />
  );
}
