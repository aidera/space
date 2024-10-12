import { useRef } from 'react';
import { RectAreaLight, MathUtils } from 'three';

export default function RimLight() {
  const lightRef = useRef<RectAreaLight>(null);

  return (
    <rectAreaLight
      ref={lightRef}
      position={[2.6, 0.6, -3]}
      rotation={[
        MathUtils.degToRad(40),
        MathUtils.degToRad(128),
        MathUtils.degToRad(68),
      ]}
      intensity={60}
      color={0xffffff}
      width={2.3}
      height={2}
    />
  );
}
