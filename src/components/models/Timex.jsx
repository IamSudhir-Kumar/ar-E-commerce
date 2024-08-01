  import React, { useRef, useEffect } from 'react';
  import { useGLTF, useAnimations } from '@react-three/drei';

  export default function Timex(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('timex/scene.gltf');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
      if (actions && actions[Object.keys(actions)[0]]) {
        actions[Object.keys(actions)[0]].play(); // Play the first animation found
      }

      // Increase metalness and decrease roughness for shininess
      Object.keys(materials).forEach(key => {
        materials[key].metalness = 1;
        materials[key].roughness = 0.1;
      });
    }, [actions, materials]);

    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" position={[0, -1.518, 4.444]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Plane006_9" position={[-0.006, 2.251, 1.414]} rotation={[0, 1.243, 0]}>
                  <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.chrom_plastik} />
                  <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.pomaranczowy} />
                </group>
                <group name="Plane000_10" position={[0, 2.341, 0]}>
                  <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.pomaranczowy} />
                  <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.chrom_plastik} />
                </group>
                <group name="Circle003_0" position={[0, 0.637, 0]} rotation={[0, -0.522, 0]} scale={4.195}>
                  <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Material} />
                </group>
                <group name="Plane001_1" position={[-5.345, 2.394, 9.852]} rotation={[0.1, 0, 0]} scale={0.105}>
                  <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.timex_logo} />
                </group>
                <group name="Circle001_2" position={[0, 2.797, 0]} scale={[1, 0.98, 1]}>
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['zielony_plastik.002']} />
                </group>
                <group name="Circle_3" position={[0, 2.79, 0]}>
                  <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.chrom} />
                </group>
                <group name="Circle010_4" position={[-0.044, 2.169, -0.019]} rotation={[Math.PI, 1.055, 0]} scale={3.575}>
                  <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
                </group>
                <group name="Circle009_5" position={[-0.044, 2.18, -0.019]} rotation={[Math.PI, 1.055, 0]} scale={3.575}>
                  <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['indeksy.data']} />
                </group>
                <group name="Circle002_6" position={[0, 2.207, 0]} scale={3.575}>
                  <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.indeksy} />
                </group>
                <group name="Circle012_7" position={[0, 2.665, 0]} scale={3.321}>
                  <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['szklo.001']} />
                </group>
                <group name="Plane009_8" position={[0.014, -6.811, -1.783]} rotation={[-2.944, 0, 0]}>
                  <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['chrom.001']} />
                </group>
                <group name="Circle006_11" position={[4.143, 1.387, -2.147]} rotation={[0, -0.524, -Math.PI / 2]} scale={0.454}>
                  <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.chrom_plastik} />
                </group>
                <group name="Circle005_12" position={[4.14, 1.387, 2.42]} rotation={[0, -0.524, -Math.PI / 2]} scale={0.454}>
                  <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.chrom_plastik} />
                </group>
                <group name="Circle004_13" position={[4.442, 1.387, 0.005]} rotation={[0, 0, -Math.PI / 2]} scale={0.652}>
                  <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.chrom} />
                </group>
                <group name="Plane002_14" position={[0, 2.341, 0]}>
                  <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.chrom_plastik} />
                  <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials['Material.002']} />
                  <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.pomaranczowy} />
                </group>
                <group name="Circle007_15" position={[0, 2.207, 0]} scale={3.575}>
                  <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.zielony_plast_indiglo} />
                </group>
                <group name="Plane007_16" position={[-0.203, -3.161, 9.615]} rotation={[-1.47, 0, 0]} scale={[5.68, 3.468, 5.525]}>
                  <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials['szklo.plastik']} />
                </group>
                <group name="Circle008_17" position={[2.61, -3.562, 3.762]} rotation={[0.101, 0, -Math.PI / 2]} scale={[3.468, 4.542, 3.468]}>
                  <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials['szklo.plastik']} />
                </group>
                <group name="Plane_18" position={[0, 2.881, 5.786]}>
                  <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.skora} />
                  <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials['Material.004']} />
                  <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials['pomaranczowy.001']} />
                  <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials['skora.jasna']} />
                </group>
                <group name="Plane003_19" position={[-0.002, -7.233, -3.35]} rotation={[0.064, 0, 0]} scale={[0.89, 1, 1.219]}>
                  <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.skora} />
                </group>
                <group name="Plane008_20" position={[-0.01, 0.836, -12.386]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1.936, 1, 1]}>
                  <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.skora} />
                  <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials['Material.004']} />
                  <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials['pomaranczowy.001']} />
                  <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials['skora.jasna']} />
                </group>
                <group name="Circle011_21" position={[0, 2.431, 0]} scale={1.003}>
                  <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials['indeksy.obrecz']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    );
  }

  useGLTF.preload('timex/scene.gltf');


// import React, { useRef, useEffect } from 'react';
// import { useGLTF, useAnimations } from '@react-three/drei';
// import { TextureLoader } from 'three';

// export default function Timex(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF('timex/scene.gltf');
//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     if (actions && actions[Object.keys(actions)[0]]) {
//       actions[Object.keys(actions)[0]].play(); // Play the first animation found
//     }

//     const textureLoader = new TextureLoader();
//     const normalMap = textureLoader.load('timex/metal/normal'); // Replace with your normal map path
//     const roughnessMap = textureLoader.load('timex/metal/rough'); // Replace with your roughness map path
//     const metalnessMap = textureLoader.load('timex/metal/metal'); // Replace with your metalness map path

//     // Apply the texture maps to materials
//     Object.keys(materials).forEach(key => {
//       materials[key].metalness = 1;
//       materials[key].roughness = 0.1;
//       materials[key].normalMap = normalMap;
//       materials[key].roughnessMap = roughnessMap;
//       materials[key].metalnessMap = metalnessMap;
//     });
//   }, [actions, materials]);

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Sketchfab_Scene">
//         <group name="Sketchfab_model" position={[0, -1.518, 4.444]}>
//           <group name="root">
//             <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
//               <group name="Plane006_9" position={[-0.006, 2.251, 1.414]} rotation={[0, 1.243, 0]}>
//                 <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.chrom_plastik} />
//                 <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.pomaranczowy} />
//               </group>
//               <group name="Plane000_10" position={[0, 2.341, 0]}>
//                 <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.pomaranczowy} />
//                 <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.chrom_plastik} />
//               </group>
//               <group name="Circle003_0" position={[0, 0.637, 0]} rotation={[0, -0.522, 0]} scale={4.195}>
//                 <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Material} />
//               </group>
//               <group name="Plane001_1" position={[-5.345, 2.394, 9.852]} rotation={[0.1, 0, 0]} scale={0.105}>
//                 <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.timex_logo} />
//               </group>
//               <group name="Circle001_2" position={[0, 2.797, 0]} scale={[1, 0.98, 1]}>
//                 <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['zielony_plastik.002']} />
//               </group>
//               <group name="Circle_3" position={[0, 2.79, 0]}>
//                 <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.chrom} />
//               </group>
//               <group name="Circle010_4" position={[-0.044, 2.169, -0.019]} rotation={[Math.PI, 1.055, 0]} scale={3.575}>
//                 <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
//               </group>
//               <group name="Circle009_5" position={[-0.044, 2.18, -0.019]} rotation={[Math.PI, 1.055, 0]} scale={3.575}>
//                 <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['indeksy.data']} />
//               </group>
//               <group name="Circle002_6" position={[0, 2.207, 0]} scale={3.575}>
//                 <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.indeksy} />
//               </group>
//               <group name="Circle012_7" position={[0, 2.665, 0]} scale={3.321}>
//                 <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['szklo.001']} />
//               </group>
//               <group name="Plane009_8" position={[0.014, -6.811, -1.783]} rotation={[-2.944, 0, 0]}>
//                 <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['chrom.001']} />
//               </group>
//               <group name="Circle006_11" position={[4.143, 1.387, -2.147]} rotation={[0, -0.524, -Math.PI / 2]} scale={0.454}>
//                 <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.chrom_plastik} />
//               </group>
//               <group name="Circle005_12" position={[4.14, 1.387, 2.42]} rotation={[0, -0.524, -Math.PI / 2]} scale={0.454}>
//                 <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.chrom_plastik} />
//               </group>
//               <group name="Circle004_13" position={[4.442, 1.387, 0.005]} rotation={[0, 0, -Math.PI / 2]} scale={0.652}>
//                 <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.chrom} />
//               </group>
//               <group name="Plane002_14" position={[0, 2.341, 0]}>
//                 <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.chrom_plastik} />
//                 <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials['Material.002']} />
//                 <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.pomaranczowy} />
//               </group>
//               <group name="Circle007_15" position={[0, 2.207, 0]} scale={3.575}>
//                 <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.zielony_plast_indiglo} />
//               </group>
//               <group name="Plane007_16" position={[-0.203, -3.161, 9.615]} rotation={[-1.47, 0, 0]} scale={[5.68, 3.468, 5.525]}>
//                 <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials['szklo.plastik']} />
//               </group>
//               <group name="Circle008_17" position={[2.61, -3.562, 3.762]} rotation={[0.101, 0, -Math.PI / 2]} scale={[3.468, 4.542, 3.468]}>
//                 <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials['szklo.plastik']} />
//               </group>
//               <group name="Plane_18" position={[0, 2.881, 5.786]}>
//                 <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.skora} />
//                 <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials['Material.004']} />
//                 <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials['pomaranczowy.001']} />
//                 <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials['skora.jasna']} />
//               </group>
//               <group name="Plane003_19" position={[-0.002, -7.233, -3.35]} rotation={[0.064, 0, 0]} scale={[0.89, 1, 1.219]}>
//                 <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.skora} />
//               </group>
//               <group name="Plane008_20" position={[-0.01, 0.836, -12.386]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1.936, 1, 1]}>
//                 <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.skora} />
//                 <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials['Material.004']} />
//                 <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials['pomaranczowy.001']} />
//                 <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials['skora.jasna']} />
//               </group>
//               <group name="Circle011_21" position={[0, 2.431, 0]} scale={1.003}>
//                 <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials['indeksy.obrecz']} />
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload('timex/scene.gltf');
