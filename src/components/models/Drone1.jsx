import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Drone1(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('models/drone1.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube006" position={[0.143, -0.308, -0.056]} scale={[1, 1.001, 1.002]}>
          <mesh name="Cube006_1" geometry={nodes.Cube006_1.geometry} material={materials.Material} />
          <mesh name="Cube006_2" geometry={nodes.Cube006_2.geometry} material={materials['Material.003']} />
          <mesh name="Cube006_3" geometry={nodes.Cube006_3.geometry} material={materials['Material.002']} />
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['Material.001']} position={[6.625, 0.214, 7.431]} rotation={[0, 1.062, 0]} scale={[0.998, 0.999, 0.999]} />
          <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['Material.001']} position={[-7.887, 0.192, 7.295]} rotation={[0, 1.062, 0]} scale={[3.692, 1.034, 1.417]} />
          <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials['Material.001']} position={[-7.87, 0.204, -7.168]} rotation={[0, 1.062, 0]} scale={[3.692, 1.034, 1.417]} />
          <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.001']} position={[6.625, 0.177, -7.196]} rotation={[0, 1.062, 0]} scale={[3.692, 1.034, 1.417]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/drone1.glb')
