import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei';
import Loader from './Loader';
import PlanetModel from './Planet/PlanetModel';
import Camera from './Camera';
import FogModel from './FogModel';
import RimLight from './RimLight';
import FillLight1 from './FillLight1';

export default function SpaceComposition() {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <color attach="background" args={['#050505']} />
      <Suspense fallback={<Loader />}>
        <PlanetModel />

        <FogModel />

        <RimLight />
        <FillLight1 />

        <Camera />
        {/* <OrbitControls /> */}

        <EffectComposer>
          <Bloom intensity={.5} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
