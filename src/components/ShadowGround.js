import React from 'react';

const ShadowGround = () => 
  <group>
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" opacity={0.3} color="blue" />
    </mesh>
  </group>

export default ShadowGround;