import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Jordan(props) {
  const { nodes, materials } = useGLTF('models/jordan1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.laces001.geometry} material={materials['Material.002']} position={[0.941, 0.024, -0.545]} rotation={[2.572, -1.525, -1.235]} scale={[-0.087, -0.554, -0.554]} />
      <group position={[0.897, -0.634, 0.035]} rotation={[1.461, -1.516, -1.75]} scale={[-1.146, -0.954, -1.223]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[0.797, -0.196, -2.72]} rotation={[-1.501, -0.054, 1.581]} scale={-1.127}>
        <mesh geometry={nodes.Plane012_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane012_2.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Plane009.geometry} material={materials['Material.001']} position={[0.777, -0.597, -3.241]} rotation={[-1.501, -0.054, 1.581]} scale={[-0.583, -0.343, -0.343]} />
      <mesh geometry={nodes.Plane010.geometry} material={materials['Material.001']} position={[0.705, 0.558, -3.043]} rotation={[-1.501, -0.054, 1.581]} scale={-1.127} />
      <mesh geometry={nodes.Plane011.geometry} material={materials['Material.001']} position={[0.174, -0.115, -1.094]} rotation={[-1.501, -0.054, 1.581]} scale={-1.127} />
      <mesh geometry={nodes.Plane012.geometry} material={materials['Material.001']} position={[1.673, 0.016, -1.103]} rotation={[-1.501, -0.054, 1.581]} scale={-1.127} />
      <mesh geometry={nodes.Plane013.geometry} material={materials['Material.001']} position={[0.99, -1.175, 0.506]} rotation={[-1.501, -0.054, 1.581]} scale={-0.448} />
      <mesh geometry={nodes.Plane014.geometry} material={materials['Material.002']} position={[0.79, 0.995, -1.536]} rotation={[1.461, -1.516, -2.735]} scale={[-0.169, -1.127, -1.127]} />
      <mesh geometry={nodes.Plane015.geometry} material={materials['Material.002']} position={[0.931, 0.37, -0.869]} rotation={[1.461, -1.516, -1.75]} scale={[-0.174, -1.127, -1.127]} />
      <group position={[0.688, 1.676, -1.843]} rotation={[1.271, -1.456, -2.954]} scale={[-0.116, -1.127, -0.701]}>
        <mesh geometry={nodes.Plane023.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane023_1.geometry} material={materials['0068376727ed1be0253958db7268a4ba']} />
      </group>
      <group position={[0.935, -1.422, -0.821]} rotation={[1.461, -1.516, -1.75]} scale={[-1.146, -0.954, -1.146]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.laces002.geometry} material={materials['Material.002']} position={[-1.602, 0.024, -0.545]} rotation={[-0.569, -1.525, -1.235]} scale={[0.087, 0.554, 0.554]} />
      <group position={[-1.559, -0.634, 0.035]} rotation={[-1.681, -1.516, -1.75]} scale={[1.146, 0.954, 1.223]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-1.459, -0.196, -2.72]} rotation={[1.64, -0.054, 1.581]} scale={1.127}>
        <mesh geometry={nodes.Plane008_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane008_2.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.001']} position={[-1.439, -0.597, -3.241]} rotation={[1.64, -0.054, 1.581]} scale={[0.583, 0.343, 0.343]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.001']} position={[-1.366, 0.558, -3.043]} rotation={[1.64, -0.054, 1.581]} scale={1.127} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['Material.001']} position={[-0.835, -0.115, -1.094]} rotation={[1.64, -0.054, 1.581]} scale={1.127} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.001']} position={[-2.334, 0.016, -1.103]} rotation={[1.64, -0.054, 1.581]} scale={1.127} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.001']} position={[-1.651, -1.175, 0.506]} rotation={[1.64, -0.054, 1.581]} scale={0.448} />
      <mesh geometry={nodes.Plane007.geometry} material={materials['Material.002']} position={[-1.452, 0.995, -1.536]} rotation={[-1.681, -1.516, -2.735]} scale={[0.169, 1.127, 1.127]} />
      <mesh geometry={nodes.Plane016.geometry} material={materials['Material.002']} position={[-1.592, 0.37, -0.869]} rotation={[-1.681, -1.516, -1.75]} scale={[0.174, 1.127, 1.127]} />
      <mesh geometry={nodes.Plane018.geometry} material={materials['Material.004']} position={[-1.346, 1.678, -1.908]} rotation={[-1.87, -1.456, -2.954]} scale={[0.116, 1.127, 0.701]} />
      <group position={[-1.596, -1.422, -0.821]} rotation={[-1.681, -1.516, -1.75]} scale={[1.146, 0.954, 1.146]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Plane019.geometry} material={materials['0068376727ed1be0253958db7268a4ba']} position={[-1.414, 1.661, -1.633]} rotation={[-2.169, -1.391, -0.16]} scale={[-0.116, -1.127, -0.701]} />
    </group>
  )
}

useGLTF.preload('models/jordan1.glb')
