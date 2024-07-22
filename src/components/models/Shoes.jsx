import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Shoes(props) {
  const { nodes, materials } = useGLTF('models/shoes.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Plane002_3.geometry} material={materials.Material} />
      <mesh geometry={nodes.Plane002_4.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Plane002_5.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Plane002_6.geometry} material={materials['0068376727ed1be0253958db7268a4ba']} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Material} />
      <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Cube004_3.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube004_4.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Cube004_5.geometry} material={materials['0068376727ed1be0253958db7268a4ba']} />
    </group>
  )
}

useGLTF.preload('models/shoes.glb')
