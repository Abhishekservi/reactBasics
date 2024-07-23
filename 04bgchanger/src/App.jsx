import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState("red")

  return (
    <div className='w-screen h-screen'
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Red"}}
            onClick={() => setColor("red")}>
              Red
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Green"}}
            onClick={() => setColor("Green")}>
              Green
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Olive"}}
            onClick={() => setColor("Olive")}>
              Olive
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Blue"}}
            onClick={() => setColor("Blue")}>
              Blue
            </button><button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"Lavender"}}
            onClick={() => setColor("Lavender")}>
              Lavender
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Orange"}}
            onClick={() => setColor("Orange")}>
              Orange
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Grey"}}
            onClick={() => setColor("Grey")}>
              Grey
            </button><button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"White"}}
            onClick={() => setColor("White")}>
              White
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Black"}}
            onClick={() => setColor("Black")}>
              Black
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Turquoise"}}
            onClick={() => setColor("turquoise")}>
              Turquoise
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Purple"}}
            onClick={() => setColor("Purple")}>
              
              Purple
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Voilet"}}
            onClick={() => setColor("Voilet")}>
              Voilet
            </button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"Pink"}}
            onClick={() => setColor("Pink")}>
              Pink
              </button>
          </div>
        </div>
    </div>
  )
}

export default App
