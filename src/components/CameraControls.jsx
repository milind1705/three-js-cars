import { useFrame } from "react-three-fiber"
import state from '../state'

const CameraControls = () =>{
    useFrame(({camera, scene}) =>{
        // console.log(camera.position)
        if(state.shouldUpdate){
            camera.position.lerp(...state.cameraPos, 0.1)
            scene.orbitControls.target.lerp(state.target, 0.1)
            scene.orbitControls.update()
            const diff =  camera.position.clone().sub(state.cameraPos).length();
            console.log(diff)
            if(diff < 0) state.shouldUpdate = false
        }
    },[])
    return (
        null
    )
}

export default CameraControls;