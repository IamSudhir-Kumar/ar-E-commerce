import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Ipad(props) {
  const { nodes, materials } = useGLTF('models/ipad1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.664, 4.17, 3.94]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1.261, 1, 1]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane001_4.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane001_5.geometry} material={materials.video} />
      </group>
    </group>
  )
}

useGLTF.preload('models/ipad1.glb')
