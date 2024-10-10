import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei';
import Loader from './Loader';
import PlanetModel from './Planet/PlanetModel';
import Camera from './Camera';
import FogModel from './FogModel';
import RimLight from './RimLight';
import FillLight from './FillLight';
import Background from './Background';
import { ACESFilmicToneMapping } from 'three';

export default function SpaceComposition() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
      }}
    >
      <color attach="background" args={['#000000']} />
      <Suspense fallback={<Loader />}>
        <Background />
        <PlanetModel />

        <FogModel />

        <RimLight />
        <FillLight />

        <Camera />
        {/* <OrbitControls /> */}

        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.1}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
