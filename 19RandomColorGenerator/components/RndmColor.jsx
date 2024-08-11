import React from 'react'

function RndmColor() {

    const [typeOfColor, setTypeOfColor] = React.useState('hex')
    const [color, setColor] = React.useState('#000000')

    // const handleCreatRandomColor = () => {
    //     if (typeOfColor === 'hex') {
    //         const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    //         setColor(randomColor)
    //     } else {
    //         const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    //         setColor(randomColor)
    // }

    const handleCreatRandomColor = () => {
        if (typeOfColor === 'hex') {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
            setColor(randomColor)
        } else {
            const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
            setColor(randomColor)
    }
    }
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        background: color,
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={handleCreatRandomColor}>Generate Random Color</button>
        <h1>{typeOfColor} : {color}</h1>
    </div>
  )
}


export default RndmColor