import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [user,setUser] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <>
      <form>
        <input type="text" name="user" onChange={(e)=>{
                setUser(e.target.value)
        }} placeholder='enter your name'/>
        <button  type='submit'>Save</button>
      </form>
    </>
  )
}

export default App
