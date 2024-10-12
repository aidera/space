import { useRef } from 'react';
import { RectAreaLight, MathUtils } from 'three';
import { useControls } from 'leva';

export default function RimLight() {
  const lightRef = useRef<RectAreaLight>(null);

  const {
    intensity,
    color,
    width,
    height,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
  } = useControls('Rim Light', {
    intensity: { value: 60, min: 0, max: 1000 },
    color: '#ffffff',
    width: { value: 2.3, min: 0, max: 10 },
    height: { value: 2, min: 0, max: 10 },
    positionX: { value: 2.6, min: -10, max: 10 },
    positionY: { value: 0.6, min: -10, max: 10 },
    positionZ: { value: -3.0, min: -10, max: 10 },
    rotationX: { value: 40, min: 0, max: 360 },
    rotationY: { value: 128, min: 0, max: 360 },
    rotationZ: { value: 68, min: -0, max: 360 },
  });

  return (
    <rectAreaLight
      ref={lightRef}
      position={[positionX, positionY, positionZ]}
      rotation={[
        MathUtils.degToRad(rotationX),
        MathUtils.degToRad(rotationY),
        MathUtils.degToRad(rotationZ),
      ]}
      intensity={intensity}
      color={color}
      width={width}
      height={height}
    />
  );
}
