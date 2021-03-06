
import {  Suspense } from 'react';
import {Canvas, } from 'react-three-fiber'
import { Physics } from '@react-three/cannon';
import Orbit from './components/Orbit'
import Bulb from './components/Bulb'

import Background from './components/Background';
import Floor from './components/Floor'
import Cars from './components/Cars';
import CameraControls from './components/CameraControls';
import CameraButtons from './components/CameraButtons';
import ColorPicker from './components/ColorPicker';
import {EffectComposer, DepthOfField, Bloom} from '@react-three/postprocessing';
console.log(Canvas)
function App() {
 
  return (
    <div style={{height:'100vh', width: '100vw' }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas style={{background:'black'}} camera={{position:[7,7,7]}}>
        
        <CameraControls />
        <ambientLight intensity={0.2}/>
        
        <Bulb position={[-6 ,3,0]}/>
        <Bulb position={[0 ,3,0]}/>
        <Bulb position={[6 ,3,0]}/>
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Background  />
        </Suspense>
        <Physics>
         <Cars />
          <Floor position={[0, -2, 0 ]}/>
        
        </Physics>
        <EffectComposer >
          <DepthOfField focusDistance={0} focalLength={0.2} bokehScale={2} height={480}/>
          <Bloom />
        </EffectComposer>
        
      </Canvas>
    </div>
  );
}

export default App;
