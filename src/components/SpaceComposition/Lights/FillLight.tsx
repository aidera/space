import { useRef } from 'react';
import { SpotLight, MathUtils } from 'three';

export default function FillLight() {
  const lightRef = useRef<SpotLight>(null);

  return (
    <>
      <spotLight
        ref={lightRef}
        position={[3.4, -1.3, 1.8]}
        rotation={[
          MathUtils.degToRad(124),
          MathUtils.degToRad(0),
          MathUtils.degToRad(76),
        ]}
        intensity={2.5}
        color={0xffffff}
        distance={10}
        angle={0.26}
        penumbra={1}
        decay={1.76}
      />
    </>
  );
}
