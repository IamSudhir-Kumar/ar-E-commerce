import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Drone(props) {
  const { nodes, materials } = useGLTF('models/drone.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.139, 0.519, 5.746]} scale={[3.699, 1.035, 1.418]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/drone.glb')
