import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Old(props) {
  const { nodes, materials } = useGLTF('old/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.139, 0.06, -0.039]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.ring_low_EMP_Accessories_0.geometry}
            material={materials.EMP_Accessories}
            position={[-1.14, -20.23, -24.345]}
            rotation={[-1.589, 0.252, -0.783]}
            scale={5.983} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('old/scene.gltf')
