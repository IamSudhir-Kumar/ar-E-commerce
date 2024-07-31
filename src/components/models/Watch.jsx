import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Watch(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('watch/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Circle013_2">
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Material.005']} />
              </group>
              <group name="Circle014_3">
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Material.006']} />
              </group>
              <group name="Circle012_1" position={[0, -10.739, 0]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.002']} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.MC_STEL_F} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.004']} />
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.003']} />
              </group>
              <group name="WATCH_33" position={[0, 1.339, 2.119]} rotation={[-0.255, 0, 0]} scale={1.611}>
                <group name="Circle_6" scale={0.621}>
                  <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Material} />
                  <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.TR_TRC} />
                </group>
                <group name="Circle001_7" scale={0.621}>
                  <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.MC_STEL_F} />
                </group>
                <group name="Circle002_8" position={[0, 0, -0.03]} scale={0.621}>
                  <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.MC_STEL_F} />
                </group>
                <group name="Circle003_9" position={[0, 1.237, 0]} scale={0.621}>
                  <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.MC_STEL_F} />
                  <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.GM_DMD} />
                  <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials['Material.001']} />
                </group>
                <group name="Circle004_10" scale={0.621}>
                  <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials['Material.001']} />
                </group>
                <group name="Circle005_11" scale={0.621}>
                  <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.BLACK_TXT} />
                  <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.ETTN_YLLW_FER} />
                </group>
                <group name="Circle006_12" scale={0.621}>
                  <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.EXP_FER} />
                </group>
                <group name="Circle007_13" scale={0.621}>
                  <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.ROGER_DUBUIS} />
                  <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.Geneve} />
                </group>
                <group name="Circle008_14" scale={0.621}>
                  <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.TR_VER_BL} />
                </group>
                <group name="Circle009_15" scale={0.621}>
                  <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.Material} />
                  <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.ETTN_YLLW_FER} />
                  <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.GRS_FF} />
                  <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.material} />
                </group>
                <group name="Circle010_16" scale={0.621}>
                  <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.GRS_FF} />
                  <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.BL_FER} />
                </group>
                <group name="Circle011_17" scale={0.621}>
                  <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.BLACK_TXT} />
                </group>
                <group name="Cube_18" scale={0.621}>
                  <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.EXP_FER} />
                </group>
                <group name="Cube001_19" position={[0, 0, -0.006]} scale={0.621}>
                  <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.SLE_STAL} />
                  <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.BLACK_TXT} />
                </group>
                <group name="Cube002_20" position={[0, 0, -0.006]} scale={0.621}>
                  <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.BLACK_TXT} />
                  <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.GM_DMD} />
                </group>
                <group name="Cube003_21" scale={0.621}>
                  <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.BLACK_TXT} />
                  <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.ETTN_YLLW_FER} />
                </group>
                <group name="Cube004_22" scale={0.621}>
                  <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.material_20} />
                  <mesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.KLMR} />
                </group>
                <group name="Cube005_23" scale={0.621}>
                  <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.material_22} />
                  <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.material_23} />
                  <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.material_24} />
                  <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.material_25} />
                  <mesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.material_26} />
                  <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.material_27} />
                </group>
                <group name="Cube006_24" scale={0.621}>
                  <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.material_20} />
                  <mesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials.KLMR} />
                </group>
                <group name="Plane_25" scale={0.621}>
                  <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials.BL_FER} />
                </group>
                <group name="Plane001_26" position={[0, 0, -0.017]} scale={0.621}>
                  <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials['08_txt']} />
                  <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.BL_FER} />
                </group>
                <group name="Plane002_27" scale={0.191}>
                  <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.MECHA} />
                </group>
                <group name="Plane003_28" position={[0, 0, 0.021]} rotation={[0, 0, 2.033]} scale={0.621}>
                  <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.GRS_FF} />
                  <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.ETTN_YLLW_FER} />
                </group>
                <group name="Plane004_29" position={[0, 0, 0.028]} scale={0.621}>
                  <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials.GRS_FF} />
                  <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.ETTN_YLLW_FER} />
                </group>
                <group name="Plane005_30" position={[0, 0, 0.028]} scale={0.621}>
                  <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.ETTN_YLLW_FER} />
                </group>
                <group name="Plane006_31" rotation={[Math.PI / 2, 0, 0]} scale={0.621}>
                  <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.BLACK_TXT} />
                </group>
                <group name="Plane007_32" rotation={[Math.PI / 2, 0, 0]} scale={0.621}>
                  <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.BLACK_TXT} />
                </group>
              </group>
              <group name="Torus_34">
                <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['Material.007']} />
              </group>
              <group name="Circle015_35">
                <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials['Material.008']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('watch/scene.gltf')
