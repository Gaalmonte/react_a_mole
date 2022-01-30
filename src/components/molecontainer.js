import {useState} from "react"
import Mole from "./mole.js"
import Emptyslot from "./emptyslot.js"

const Molecontainer = (props) => {
    let [molevar,onHit] = useState(false)
    const handleClick = (e) =>{
        props.setScore(props.score + 1)
        onHit(false)
    }
    let showMole = molevar ? <Mole setScore={props.setScore} handleClick={handleClick} toggle={onHit}/> : <Emptyslot toggle={onHit} />
    return (
        <div style={{'display': 'inline-block', 'width' : '30vw'}}>
            {showMole}
        </div>
    )

}

export default Molecontainer;