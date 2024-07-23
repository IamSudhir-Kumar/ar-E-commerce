import React from 'react';
import { useGLTF } from '@react-three/drei';

const colorMap = {
  gold: '#FFD700',
  silver: '#C0C0C0',
  roseGold: '#B76E79',
  white: '#FFFFFF',
  citrin: '#E4D00A',
  ruby: '#E0115F',
  emerald: '#50C878',
};

export default function Ring({ ringColor, diamondColor, ...props }) {
  const { nodes, materials } = useGLTF('models/ring.glb');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Torus029_1.geometry} material={materials['GOLD ']} material-color={colorMap[ringColor]} />
      <mesh geometry={nodes.Torus029_2.geometry} material={materials['Material.001']} material-color={colorMap[diamondColor]} />
    </group>
  );
}

useGLTF.preload('models/ring.glb');
