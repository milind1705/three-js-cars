
import {  Suspense } from 'react';
import {Canvas, } from 'react-three-fiber'
import { Physics } from '@react-three/cannon';
import Orbit from './components/Orbit'
import Bulb from './components/Bulb'

import Background from './components/Background';
import Floor from './components/Floor'
import Cars from './components/Cars';
import CameraControls from './components/CameraControls';
console.log(Canvas)
function App() {
  return (
    <div style={{height:'100vh', width: '100vw' }}>
      <Canvas style={{background:'black'}} camera={{position:[7,7,7]}}>
        
        <CameraControls />
        <ambientLight intensity={0.2}/>
        
        <Bulb position={[0 ,3,0]}/>
        <Orbit />
        <axesHelper args={[5]} />
        <Physics>
         <Cars />
          <Floor position={[0, -0.5, 0 ]}/>
        <Suspense fallback={null}>
          <Background  />
        </Suspense>
        </Physics>

      </Canvas>
    </div>
  );
}

export default App;
