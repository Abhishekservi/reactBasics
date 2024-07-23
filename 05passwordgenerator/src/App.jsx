import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //UseRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str+="0123456789"
    if (charAllow) str+="!@#$%^&*-_[]+={}~`"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass +=str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllow, setPassword])
  
  const copyPassowordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
       <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
          ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3
          py-0.5 shrink-0'
          onClick={copyPassowordtoClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)} }
             />
             <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() => {
              setnumAllowed((prev) => !prev)
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllow}
            id='charInput'
            onChange={() => {
              setcharAllow((prev) => !prev)
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
