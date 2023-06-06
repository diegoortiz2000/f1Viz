/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/f1car.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/f1car-transformed.glb')
  const { actions } = useAnimations(animations, group)
  const frontTiresRef = useRef();
  const backTiresRef = useRef();
  const rimFrontRef = useRef();
  const rimBckRef = useRef();

  useFrame(({clock}) => {
    const rotationValue = clock.getElapsedTime(); // replace with the required rotation speed logic

    if (frontTiresRef.current) {
      frontTiresRef.current.rotation.x = rotationValue;
    }

    if (backTiresRef.current) {
      backTiresRef.current.rotation.x = rotationValue;
    }

    if (rimFrontRef.current) {
      rimFrontRef.current.rotation.x = rotationValue;
    }

    if (rimBckRef.current) {
      rimBckRef.current.rotation.x = rotationValue;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Spoiler_Front" geometry={nodes.Spoiler_Front.geometry} material={materials.Spoiler_Ana} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Canard" geometry={nodes.Canard.geometry} material={materials.Kanard} position={[0, 0, 0.001]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Front_Spoiler_Holder" geometry={nodes.Front_Spoiler_Holder.geometry} material={materials.Torus_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Swan_Neck" geometry={nodes.Swan_Neck.geometry} material={materials.Swan_Neck} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Spoiler" geometry={nodes.Spoiler.geometry} material={materials.Spoiler} position={[0, 0.755, -5.057]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Spoiler_Small" geometry={nodes.Spoiler_Small.geometry} material={materials.Spoiler_Kucuk_1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Spoiler_Big" geometry={nodes.Spoiler_Big.geometry} material={materials.Spoiler_Kucuk_2} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Spoiler_DRS" geometry={nodes.Spoiler_DRS.geometry} material={materials.Spoiler_DRS_Pistonu} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Vertical_Radar_Wing" geometry={nodes.Vertical_Radar_Wing.geometry} material={materials.Dikey_Kanat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Small_Radar_Wing" geometry={nodes.Small_Radar_Wing.geometry} material={materials.Kucuk_Kanat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Horizontal_Radar_Wing" geometry={nodes.Horizontal_Radar_Wing.geometry} material={materials.Yatay_Kanat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Horizontal_Radar_wing_2" geometry={nodes.Horizontal_Radar_wing_2.geometry} material={materials.Yatay_Kanatlar} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Pitot_Tube_Wing" geometry={nodes.Pitot_Tube_Wing.geometry} material={materials.Dikey_Kanat_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="1" geometry={nodes['1'].geometry} material={materials.C_Karbon} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="7" geometry={nodes['7'].geometry} material={materials.Düz_Karbon_2} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="6" geometry={nodes['6'].geometry} material={materials.Cylinder_008} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Differential" geometry={nodes.Differential.geometry} material={materials.Difransiyel} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Chassis" geometry={nodes.Chassis.geometry} material={materials.Şasi} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="2" geometry={nodes['2'].geometry} material={materials.Cylinder} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Exhaust" geometry={nodes.Exhaust.geometry} material={materials.Egzos} position={[0, 0, 0.177]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="3" geometry={nodes['3'].geometry} material={materials.Cylinder_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="4" geometry={nodes['4'].geometry} material={materials.Cylinder_005} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="5" geometry={nodes['5'].geometry} material={materials.Cylinder_006} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Front_Disk" geometry={nodes.Front_Disk.geometry} material={materials.Ön_Disk} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Fender" geometry={nodes.Fender.geometry} material={materials.Çamurluk} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Control" geometry={nodes.Control.geometry} material={materials.Direksiyon} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Switch" geometry={nodes.Switch.geometry} material={materials.Cube} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Shifter" geometry={nodes.Shifter.geometry} material={materials.Kulaklar} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Control_Shaft" geometry={nodes.Control_Shaft.geometry} material={materials.Direksiyon_Mili} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Bujon_Back_Whell" geometry={nodes.Bujon_Back_Whell.geometry} material={materials.Bujon} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Rim_Bck" geometry={nodes.Rim_Bck.geometry} material={materials.Jant} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh ref={backTiresRef} name="Back_Tires" geometry={nodes.Back_Tires.geometry} material={materials.Lastik} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Inside_Rim_Back" geometry={nodes.Inside_Rim_Back.geometry} material={materials.İç_Jant} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Tires_Lid_Back" geometry={nodes.Tires_Lid_Back.geometry} material={materials.Lastik_Kapağı} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Bujon_Front_Wheel" geometry={nodes.Bujon_Front_Wheel.geometry} material={materials.Bujon_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh ref={rimFrontRef} name="Rim_Front" geometry={nodes.Rim_Front.geometry} material={materials.Jant_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh ref={frontTiresRef} name="Front_Tires" geometry={nodes.Front_Tires.geometry} material={materials.Lastik_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Tires_Lid_Front" geometry={nodes.Tires_Lid_Front.geometry} material={materials.Lastik_Kapağı_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Inside_Rim_Front" geometry={nodes.Inside_Rim_Front.geometry} material={materials.İç_Jant_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Small_Tube" geometry={nodes.Small_Tube.geometry} material={materials.Kısa_Çubuk} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Big_Tube" geometry={nodes.Big_Tube.geometry} material={materials.Uzun_Çubuk} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Mirror" geometry={nodes.Mirror.geometry} material={materials.Ayna} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="DOWN_CANARD" geometry={nodes.DOWN_CANARD.geometry} material={materials.Alt_Kanard} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Grid" geometry={nodes.Grid.geometry} material={materials.Izgaralar} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Cabin" geometry={nodes.Cabin.geometry} material={materials.Kabin} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Body" geometry={nodes.Body.geometry} material={materials.Govde} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Front_Wing" geometry={nodes.Front_Wing.geometry} material={materials.Ön_Kanatlar} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Body_Back_Wing" geometry={nodes.Body_Back_Wing.geometry} material={materials.Govde_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Belt_Lock" geometry={nodes.Belt_Lock.geometry} material={materials.Kilit} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Shoulder_Belt" geometry={nodes.Shoulder_Belt.geometry} material={materials.Omuz_Kemeri} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Waist_Belt" geometry={nodes.Waist_Belt.geometry} material={materials.Bel_Kemeri} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Seat" geometry={nodes.Seat.geometry} material={materials.Koltuk} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Clip1" geometry={nodes.Clip1.geometry} material={materials.Toka} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Clip2" geometry={nodes.Clip2.geometry} material={materials.Toka_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Clip3" geometry={nodes.Clip3.geometry} material={materials.Toka_002} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Leg_Belt" geometry={nodes.Leg_Belt.geometry} material={materials.Bacak_Kemeri} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Lights" geometry={nodes.Lights.geometry} material={materials.Lights} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Mirror_Glass" geometry={nodes.Mirror_Glass.geometry} material={materials.Ayna_Camı} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Front_Tires001" geometry={nodes.Front_Tires001.geometry} material={materials.Lastik_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Rim_Front001" geometry={nodes.Rim_Front001.geometry} material={materials.Jant_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Inside_Rim_Front001" geometry={nodes.Inside_Rim_Front001.geometry} material={materials.İç_Jant_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Bujon_Front_Wheel001" geometry={nodes.Bujon_Front_Wheel001.geometry} material={materials.Bujon_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Fender001" geometry={nodes.Fender001.geometry} material={materials.Çamurluk} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Tires_Lid_Front001" geometry={nodes.Tires_Lid_Front001.geometry} material={materials.Lastik_Kapağı_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Front_Disk001" geometry={nodes.Front_Disk001.geometry} material={materials.Ön_Disk} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="3001" geometry={nodes['3001'].geometry} material={materials.Cylinder_001} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="4001" geometry={nodes['4001'].geometry} material={materials.Cylinder_005} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="5001" geometry={nodes['5001'].geometry} material={materials.Cylinder_006} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Front_Wing001" geometry={nodes.Front_Wing001.geometry} material={materials.Ön_Kanatlar} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Mirror001" geometry={nodes.Mirror001.geometry} material={materials.Ayna} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Back_Tires001" geometry={nodes.Back_Tires001.geometry} material={materials.Lastik} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh ref={rimBckRef} name="Rim_Bck001" geometry={nodes.Rim_Bck001.geometry} material={materials.Jant} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Inside_Rim_Back001" geometry={nodes.Inside_Rim_Back001.geometry} material={materials.İç_Jant} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Bujon_Back_Whell001" geometry={nodes.Bujon_Back_Whell001.geometry} material={materials.Bujon} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Swan_Neck001" geometry={nodes.Swan_Neck001.geometry} material={materials.Swan_Neck} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="1001" geometry={nodes['1001'].geometry} material={materials.C_Karbon} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="2001" geometry={nodes['2001'].geometry} material={materials.Cylinder} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="6001" geometry={nodes['6001'].geometry} material={materials.Cylinder_008} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="7001" geometry={nodes['7001'].geometry} material={materials.Düz_Karbon_2} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Canard001" geometry={nodes.Canard001.geometry} material={materials.Kanard} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Horizontal_Radar_wing_2001" geometry={nodes.Horizontal_Radar_wing_2001.geometry} material={materials.Yatay_Kanatlar} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Tires_Lid_Back001" geometry={nodes.Tires_Lid_Back001.geometry} material={materials.Lastik_Kapağı} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="DOWN_CANARD001" geometry={nodes.DOWN_CANARD001.geometry} material={materials.Alt_Kanard} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('models/f1car-transformed.glb')
