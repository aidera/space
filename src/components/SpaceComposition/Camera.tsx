import { useRef } from 'react';
import { PerspectiveCamera as DreiPerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera } from 'three';

export default function Camera() {
  const cameraRef = useRef<PerspectiveCamera>(null);

  return (
    <DreiPerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={20}
      position={[.6, -.2, 3.2]}
    />
  );
}
