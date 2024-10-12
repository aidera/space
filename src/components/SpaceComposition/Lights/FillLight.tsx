import { useRef } from 'react';
import { SpotLight, MathUtils } from 'three';
import { useControls } from 'leva';

export default function FillLight() {
  const lightRef = useRef<SpotLight>(null);

  const {
    intensity,
    color,
    distance,
    angle,
    penumbra,
    decay,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
  } = useControls('Fill Light', {
    intensity: { value: 2.5, min: 0, max: 100, step: 0.1 },
    color: '#ffffff',
    distance: { value: 10, min: 0, max: 200 },
    angle: { value: 0.26, min: 0, max: Math.PI / 2 },
    penumbra: { value: 1, min: 0, max: 1 },
    decay: { value: 1.76, min: 1, max: 2 },
    positionX: { value: 3.4, min: -10, max: 10 },
    positionY: { value: -1.3, min: -10, max: 10 },
    positionZ: { value: 1.8, min: -10, max: 10 },
    rotationX: { value: 124, min: 0, max: 360 },
    rotationY: { value: 0, min: 0, max: 360 },
    rotationZ: { value: 76, min: 0, max: 360 },
  });

  return (
    <>
      <spotLight
        ref={lightRef}
        position={[positionX, positionY, positionZ]}
        rotation={[
          MathUtils.degToRad(rotationX),
          MathUtils.degToRad(rotationY),
          MathUtils.degToRad(rotationZ),
        ]}
        intensity={intensity}
        color={color}
        distance={distance}
        angle={angle}
        penumbra={penumbra}
        decay={decay}
      />
    </>
  );
}
