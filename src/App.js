import React from 'react';
import './App.scss';

import { Canvas } from 'react-three-fiber';
import { softShadows, OrbitControls } from 'drei';

import SpinningMesh from './components/SpinningMesh';
import ShadowGround from './components/ShadowGround';

softShadows();

const App = () =>
  <>
    <Canvas 
      shadowMap 
      colorManagement 
      camera={{ 
        position: [-5, 2, 10], 
        fov: 60 
      }}
      >
      <ambientLight intensity={0.3} />
      <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
      
      <ShadowGround />

      <SpinningMesh 
        position={[0, 1, 0]} 
        args={[3, 2, 1]} 
        color="lightblue" 
        speed={10} 
        />
      <SpinningMesh 
        position={[-2, 1, -5]} 
        color="red" 
        />
      <SpinningMesh 
        position={[5, 1, -2]} 
        color="pink" 
        />

      <OrbitControls />
    </Canvas>
  </>

export default App;
