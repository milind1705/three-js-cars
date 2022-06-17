import * as THREE from 'three';
import { useRef, Suspense } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from 'react-three-fiber'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
extend({OrbitControls})

const Orbit = () => {
  const {camera, gl} = useThree()
  return(
    <orbitControls args={[camera, gl.domElement ]}  /> 
  )
}
const Box = props =>{
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, '/wood.jpg');

  useFrame(state =>{
    ref.current.rotation.x +=0.01;
    ref.current.rotation.y +=0.01;
  })
  return(
    <mesh ref={ref} {...props} castShadow receiveShadow >
        <boxBufferGeometry/>
        <meshPhysicalMaterial map={texture}
        // color='white' 
        // opacity={0.5}
        //  transparent 
        //  fog={false} 
        //  wireframe 
        //  metalness={1}
        //  roughness={0}
        // clearcoat={1}
        // transmission={0.5}
        // reflectivity={1}
        side={THREE.DoubleSide}
         />
      </mesh>
  )
}

const Background = ()=>{
  const texture = useLoader(THREE.TextureLoader, '/autoshop.jpg');
  const {gl} =useThree()
  const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
  return(
    <primitive attach='background' object={texture} />
  )
}

const Floor = props =>{
  const ref = useRef();
 
  return(
    <mesh ref={ref} {...props} receiveShadow>
        <boxBufferGeometry args={[20,1,10]}/>
        <meshPhysicalMaterial color='white' />
      </mesh>
  )
}

const Bulb = props =>{
  return(
  <mesh {...props}>
    <pointLight castShadow/>
    <sphereBufferGeometry args={[0.2, 20,20]} />
    <meshPhongMaterial emissive ='yellow' />
    
  </mesh>
  ) 
}
function App() {
  return (
    <div style={{height:'100vh', width: '100vw' }}>
      <Canvas style={{background:'black'}} camera={{position:[1,5,1]}}>
        <ambientLight intensity={0.2}/>
        {/* <fog attach='fog' args={['white', 1, 10]}/> */}
        <Bulb position={[0 ,3,0]}/>
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Box position={[0,1,0]} />
        </Suspense>

        <Suspense fallback={null}>
          <Background  />
        </Suspense>
       <Floor position={[0, -0.5, 0 ]}/>

        
      </Canvas>
    </div>
  );
}

export default App;
