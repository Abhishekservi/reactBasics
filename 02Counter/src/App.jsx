import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
    let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter>=20){
      counter=20
      console.log("Counter Value is maximum");
    }
    else{
      setCounter(counter+1)
      
    }
  }

  const removeValue = () => {
    if (counter<=0) {
      counter = 0
      console.log("Counter value cannot be negative");
    }
    else{
      setCounter(counter-1)
    }
    
  }

  return (
    <>
     <h1>PRESS THAT BUTTON  </h1>
     <p>Counter Value:{counter}</p>
     <button 
     onClick={addValue}>Add Value {counter}</button>
     <br />
     <button
     onClick={removeValue}>Remove Value {counter}</button>
     <p>Footer: {counter}</p>
    </>

  )
}

export default App
