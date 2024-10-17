import { useEffect } from 'react';
import { Html, useProgress } from '@react-three/drei';

export default function Loader(params: {
  isLoaded: boolean;
  setIsLoaded: (status: boolean) => void;
}) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress >= 100 && !params.isLoaded) {
      params.setIsLoaded(true);
    }
  }, [progress, params.isLoaded]);

  return (
    <Html transform={false}>
      <div
        style={{
          textAlign: 'center',
          width: '200px',
          height: '100px',
          top: '0',
          left: '0',
          transform: 'translateX(-50%) translateY(200%)',
          zIndex: 1000,
          color: 'white',
        }}
      >
        {Math.round(progress)}% Loading ...
        <br />
        3D is loading. It can take a while
      </div>
    </Html>
  );
}
