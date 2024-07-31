import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mainvalue, setMainvalue] = useState(1)
  // const [multipledvalue, setMultipledvalue] = useState(1)

  let multipledvalue = mainvalue * 5

  const handlemultiply = () => {
    setMainvalue(mainvalue + 1)
  }

  return (
    <>
      <h1>Main Value: {mainvalue} </h1>
      <button onClick={handlemultiply}>Click to multiply by 5</button>
      <h2>Multiplied Value: {multipledvalue} </h2>
    </>
  )
}

export default App
