import { Mesh, Object3D } from 'three';

export const isMesh = (object: Object3D): object is Mesh => {
  return (object as Mesh).isMesh !== undefined;
};
