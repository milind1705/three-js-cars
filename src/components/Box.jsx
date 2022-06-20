import * as THREE from 'three';
import { useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { useFrame,  useLoader} from 'react-three-fiber'

const Box = props =>{
  const [ref, api] = useBox(()=>({mass:1,...props}))
    const texture = useLoader(THREE.TextureLoader, '/wood.jpg');
    const handelPointerDown = (e) =>{
      if(window.activeMesh){
        scaleDown(window.activeMesh)
      }
      e.object.active = true;
      window.activeMesh = e.object
    }
    const pointerEnter = (e) =>{
      e.object.scale.x= 1.5
      e.object.scale.y= 1.5
      e.object.scale.z= 1.5
    }
  
    const pointerLeave = (e) =>{
    if(!e.object.active) { scaleDown(e.object)
       }
    }
  
    const scaleDown = object => {
      object.scale.x= 1
      object.scale.y= 1
      object.scale.z= 1
    }
  
    return(
      <mesh api={api} ref={ref} {...props} castShadow receiveShadow onPointerEnter={pointerEnter} onPointerLeave={pointerLeave} onPointerDown={handelPointerDown}>
          <boxBufferGeometry args={[1,1,1]}/>
          <meshPhysicalMaterial map={texture}
          side={THREE.DoubleSide}
           />
        </mesh>
    )
  }

  export default Box