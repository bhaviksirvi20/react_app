import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  let username = "admin"
  let password = "admin@123"

  let navigate = useNavigate()

  let [user, setUser] = useState("")
  let [pass, setPass] = useState("")

  let hendleLogin = () => {

    if (username === user && password === pass) {
      alert("Successfull Login")
      navigate("/Home")
    }
    else (
      alert("Invalid !")
     
    )
  }

  return (
    <div>
      <h1>login</h1>
      <label htmlFor="username">username : </label> <br />
      <input type="text" placeholder="Username" onChange={(e)=>setUser(e.target.value)} /> <br /> <br />

      <label htmlFor="password">password : </label> <br />
      <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} /> <br /> <br />

      <button onClick={hendleLogin}>login</button> &nbsp;
      <Link to="SignUp"><button>SignUp</button></Link> <br /><br />
    </div>
  )
}

export default Login
