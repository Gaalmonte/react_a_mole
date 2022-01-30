import Molecontainer from "./components/molecontainer.js";
import {useState} from 'react'

function App() {
    let [score, setScore] = useState(0)
    const createMoleHill = () => {
      let hills = []
      for(let i = 0; i < 9 ; i++){
        hills.push(
          <Molecontainer key = {i} setScore ={setScore} score={score} />
        )
      }
      return (
        <div>
          {hills}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>React-a-Mole!</h1>
        {score}
        {createMoleHill()}
      </div>
    )
}

export default App;
