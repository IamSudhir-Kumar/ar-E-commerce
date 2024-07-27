import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Gold(props) {
  const { nodes, materials } = useGLTF('models/gold.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Material_54} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Material_51} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Material_51} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Material_51} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.Material_51} />
      <mesh geometry={nodes.Object_18.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_20.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.Material_54} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.Material_54} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.Material_54} />
      <mesh geometry={nodes.Object_36.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.Material_51} />
    </group>
  )
}

useGLTF.preload('models/gold.glb')
