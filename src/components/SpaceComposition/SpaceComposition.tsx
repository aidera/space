import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei';
import { ACESFilmicToneMapping } from 'three';
import Loader from './Loader';
import PlanetModel from './Models/PlanetModel';
import Camera from './Camera';
import FogModel from './FogModel';
import RimLight from './Lights/RimLight';
import FillLight from './Lights/FillLight';
import Background from './Background';
import Vignette from './Vignette/Vignette';
import Glare from './Glare/Glare';

export default function SpaceComposition() {
  return (
    <>
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
            intensity={2}
            luminanceThreshold={0.01}
            luminanceSmoothing={0.5}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
    
    <Vignette />
    <Glare />
    </>
  );
}
