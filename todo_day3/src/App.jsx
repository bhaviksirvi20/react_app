import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import './Add.css'


const App = () => {

  let [input, setInput] = useState("")
  let [add, setAdd] = useState([])
  let [btn, setBtn] = useState(true)
  let [index, setIndex] = useState(null)

  let hendleAddorUpdate = (() => {
    if (btn) {
      setAdd([...add, input])
      setInput("")
    }
    else {
      let newIndex = [...add]
      newIndex[index] = input
      setAdd(newIndex)
      setBtn(true)
      setInput("")
    }
  })
  let hendleClear = (() => {
    setAdd([])
  })
  let hendleRemove = ((i) => {
    let remove = add.filter((e) => add[i] !== e)
    setAdd(remove)
  })
  let hendleEdit = ((i) => {
    setInput(add[i])
    setIndex(i)
    setBtn(false)
  })

  return (
    <>
      {/* <div className="main">

        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        <button onClick={hendleAddorUpdate}> {btn ? "Add" : "Update"}</button>
        <button onClick={hendleClear}>Clear All</button>

        <ul>
          {
            add.map((e, i) => {
              return (
                <div key={i}>
                  <li>{e}</li>
                  <button onClick={() => hendleRemove(i)}>Remove</button>
                  <button onClick={() => hendleEdit(i)}> <CiEdit /> Edit</button>
                </div>
              )
            })
          }
        </ul>
      </div> */}

      <div className="main">
  <div className="top-row">
    <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
    <button className="add-btn" onClick={hendleAddorUpdate}>{btn ? "Add" : "Update"}</button>
    <button className="clear-btn" onClick={hendleClear}>Clear All</button>
  </div>

  <ul>
    {add.map((e, i) => (
      <div key={i}>
        <li>{e}</li>
        <button className="remove-btn" onClick={() => hendleRemove(i)}>Remove</button>
        <button className="edit-btn" onClick={() => hendleEdit(i)}> <CiEdit /> Edit</button>
      </div>
    ))}
  </ul>
</div>

    </>
  )
}

export default App