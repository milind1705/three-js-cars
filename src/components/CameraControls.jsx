import { useFrame } from "@react-three/fiber"
import state from '../state'

const CameraControls = () =>{
    useFrame(({  scene, camera }) => {
      
        if(state.shouldUpdate){
            // console.log(camera.position)
            camera.position.lerp(state.cameraPos, 0.1)
                    scene.orbitControls.target.lerp(state.target, 0.1)
                    scene.orbitControls.update()
                    const diff =  camera.position.clone().sub(state.cameraPos).length();
                    console.log(diff)
                    if(diff < 0.1) state.shouldUpdate = false
                }
        
      }, 1)
    return (
        null
    )
}

export default CameraControls;