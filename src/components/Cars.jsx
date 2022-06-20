import { Suspense } from 'react';
import Dragable from './Dragable';
import Model from './Model';
import BoundingBox from './BoundingBox';
const Cars = props => {
    return (
        <>
             <Dragable transformGroup>
            <Suspense fallback={null}>
              <BoundingBox  position={[4,2,0]} dims={[3,2,5]} offset={[0,-0.3,0]}>
                  <Model path='/tesla_model_3/scene.gltf'  scale={new Array(3).fill(0.01)} />
              </BoundingBox>
            </Suspense>
              </Dragable>
              <Dragable transformGroup>
            <Suspense fallback={null}>
              <BoundingBox  position={[-4,2,0]} dims={[3,2,6]} offset={[0,-0.7,0.2]}>
              <Model path='/tesla_model_s/scene.gltf'  scale={new Array(3).fill(0.7)} />
              </BoundingBox>
            </Suspense>

          </Dragable>
        </>
    )
}

export default Cars;