import state from "../state"

const style = {
    zIndex : 1,
    position: 'absolute',
    bottom: '30vh',
    height : '30px',
    width : '30px',
    background :'white',
    textAlign: 'center',
    borderRadius: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: '0.7',
    border: '1px solid black'

}

const CameraButtons = ()=>{
    const sets = {
        1 : {
            cameraPos: [3,2,4],
            target: [4,0,0]
        },

        2 : {
            cameraPos: [-2,2,5],
            target: [-4,0,0]
        }
    }
    const handelClick = num=>{
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.shouldUpdate = true
    }
    return(
       <>
        <button style={{
            left:'40vw',
            ...style
        }} onClick={e => handelClick(1)}>
            {'<'}
        </button>
        <button style={{
            right:'40vw',
            ...style
        }} onClick={e => handelClick(2)}>
            {'>'}
        </button>
       </>
    )
}
export default CameraButtons