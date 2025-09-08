import { useState } from 'react'


function App() {

  let [input, setTodo] = useState("")
  console.log(input);


  let [add, setAdd] = useState([])

  let hendleAdd = (() => {
    setAdd([...add, input])
    setTodo("")
  })

  return (
    <>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={input} />
      <button onClick={hendleAdd}>Add</button>

      <ul>
        {
          add.map((e, i) => {
            return (

              <div key={i}>
                <li>{e}</li>
              </div>
            )
          })
        }
      </ul>
    </>
  )
}

export default App