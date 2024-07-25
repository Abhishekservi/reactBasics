import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-white bg-yellow-800 p-4'>To-do List</h1>
        <br />
      <Todo />
    </>
  )
}

export default App
