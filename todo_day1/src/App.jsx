import React, { useState } from 'react'
import './App.css'
function App() {
  // new Todo
  let [input, setInput] = useState("")

  // Total Todos
  let [add, setAdd] = useState([])

  let [btn, setBtn] = useState(true)
  // Todo Add 
  let hendleAdd = (() => {
    setAdd([...add, input])
    setInput("")

    if (input == "") {
      alert("Enter Input")
      setAdd([...add])
    }
  })

  // Todo all Remove 
  let hendleClear = (() => {
    setAdd([])
  })

  // Seprate Todo Remove 
  let hendleRemove = ((i) => {
    setAdd(add.filter((_, j) => j !== i))
    // setInput(i)
  })

  let hendleEdit = ((i) => {
    // setInput(add.filter((_, j) => j == i))
    setInput(add[i])
    setBtn(i)
  })

  let hendleSave = ((i) => {

    // setInput(add[input]);
    console.log(add[i]);
    setInput(...add, [add[i] = input])
    setInput("")
    setBtn(btn ? true : false)

  })

  return (

    <>
      <div className="body">

        <div className="div">

          <input type="text" onChange={(e) => setInput(e.target.value)} value={input} /> {
            <button onClick={hendleAdd}>Add</button>
          }

          <button onClick={hendleClear}>Clear All</button>

          <ul>
            {
              add.map((e, i) => {
                return (
                  <>
                    <div key={i}>
                      <li>{e}</li>
                      <button onClick={() => hendleRemove(i)}>Delete</button>

                      {
                      btn !== i ? <button onClick={() => hendleEdit(i)}>Edit</button> : <button onClick={() => hendleSave(i)}>Save</button>
                      }


                    </div>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
