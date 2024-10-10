import { useLoader } from '@react-three/fiber';
import {
  LinearFilter,
  NoColorSpace,
  TextureLoader,
  RepeatWrapping,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

export default function Background() {
  const texture = useLoader(
    TextureLoader,
    `${import.meta.env.BASE_URL}stars.png`
  );

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1.8, 1.8);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.colorSpace = NoColorSpace;

  const geometry = new PlaneGeometry(1, 1);
  const material = new MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.5,
  });
  const mesh = new Mesh(geometry, material);

  return (
    <primitive
      object={mesh}
      position={[0, 0, -5]} // Adjust position to place it appropriately in the background
      scale={[10, 10, 10]}
    />
  );
}
