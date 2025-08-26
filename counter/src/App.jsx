import { useState } from 'react'
import './App.css';


function App() {


  let [count, setCount] = useState(0)
  

  let hendleplus = (() => {
    setCount(count + 1)
  })
  let hendleminus = (() => {``
    if(count > 0 ){
      setCount(count - 1)
    }
  })

  return (
    <>
      <div className="main">

      <button onClick={hendleplus}>+</button>
      <h1>count is {count}</h1>
      <button onClick={hendleminus}>-</button>
      </div>
    </>
  )
}

export default App
