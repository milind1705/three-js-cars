import { useLoader} from 'react-three-fiber'
import * as THREE from 'three';
const Background = ()=>{
    const texture = useLoader(THREE.TextureLoader, '/autoshop.jpg');
    // const {gl} =useThree()
    // const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
    return(
      <primitive attach='background' object={texture} />
    )
  }

  export default Background;