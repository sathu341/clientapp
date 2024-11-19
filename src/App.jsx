import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [user,setUser] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(user)
    axios.post("https://backendappl.vercel.app/",user)
    .then((res)=>{
        alert(res.data)
    })
    .catch(err=>console.log(err))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" onChange={(e)=>{
                setUser(e.target.value)
        }} placeholder='enter your name'/>
        <button  type='submit'>Save</button>
      </form>
    </>
  )
}

export default App
