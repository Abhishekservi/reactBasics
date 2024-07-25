import React from 'react'

function Todo() {
    const [arr, setTodos] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')

    const handleAddTodo = () => {
        if(inputValue !== '') {
            setTodos([...arr, inputValue])
            setInputValue('')
        }
        else {
            alert('Please enter a value')
        }

    }

    React.useEffect(() => {
        console.log("Todos updated: ",[arr]);    
    },[arr])


    const handleKeypress = (e) => {
        if(e.key === 'Enter') {
            handleAddTodo()
    }
    }

    const handleAllClear = () => {
        setTodos([])
    }
  return (
    <div>
    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Input Here...."
    value={inputValue}
    onChange={(e) => {setInputValue(e.target.value)}} 
    onKeyPress = {handleKeypress} /> 
    
    <br/> 
    <ul>
        {arr.map((todo, index) => (
            <li key={index} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {arr[index]}
            </li>
        ))}
    </ul>  
    <div className='flex flex-wrap justify-self-center'>
    <button className='border border-gray-600 rounded-lg p-2'
    onClick={handleAddTodo}
    >Add</button>

    <button className='border border-gray-600 rounded-lg p-2'
    onClick={handleAllClear}>Clear All </button>
    </div>
    </div>
  )
}

export default Todo