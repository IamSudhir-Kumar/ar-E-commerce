import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Black(props) {
  const { nodes, materials } = useGLTF('black/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Default} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Material_1} />
      </group>
    </group>
  )
}

useGLTF.preload('black/scene.gltf')
