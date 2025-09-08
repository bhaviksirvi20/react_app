import {  useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {

  let emailadd = "admin@gamil.com"
  let password = "admin@123"

  let navigate = useNavigate()

  let [email, setEmail] = useState("")
  let [pass, setPass] = useState("")

  let hendleSignup = () => {
    if(email === emailadd && pass === password){
      alert("Successfull SignUp....")
      navigate('/')
    }
    else{
      alert("Invalid !")
    }
  }

  return (
    <div>
      <h1>Sign up</h1>

      <label htmlFor="email">UserEmail : </label> <br />
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> <br /><br />

      <label htmlFor="password">Password : </label> <br />
      <input type="password" placeholder='password' onChange={(e)=>setPass(e.target.value)}/> <br /><br />

      <button onClick={hendleSignup}>SignUp</button> <br />
    </div>
  )
}

export default SignUp
