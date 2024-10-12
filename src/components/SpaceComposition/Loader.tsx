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
    <Html>
      <div
        style={{
          textAlign: 'center',
          width: '200px',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {Math.round(progress)}% Loading ...
      </div>
    </Html>
  );
}
