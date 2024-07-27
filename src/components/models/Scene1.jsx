import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function New(props) {
  const { nodes, materials } = useGLTF('ring/scene.gltf');
  const diamondTexture = useTexture('ring/tect.jpg'); // Path to your diamond texture

  // Clone the diamond material and set the texture map
  const diamondMaterial = materials.Material_54.clone();
  diamondMaterial.map = diamondTexture;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_8.geometry} material={diamondMaterial} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Material_51} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Material_51} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Material_51} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.Material_51} />
      <mesh geometry={nodes.Object_18.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_20.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_22.geometry} material={diamondMaterial} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_32.geometry} material={diamondMaterial} />
      <mesh geometry={nodes.Object_34.geometry} material={diamondMaterial} />
      <mesh geometry={nodes.Object_36.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.Material_51} />
    </group>
  );
}

useGLTF.preload('ring/scene.gltf');
