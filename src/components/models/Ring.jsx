import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Ring(props) {
  const { nodes, materials } = useGLTF('models/ring.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Torus029_1.geometry} material={materials['GOLD ']} />
      <mesh geometry={nodes.Torus029_2.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('models/ring.glb')
