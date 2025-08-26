import { useState } from 'react'

function App(name,surname) {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <h1>name - {name}</h1>
    <h2>surname - {surname}</h2>
      
    </>
  )
}

export default App
