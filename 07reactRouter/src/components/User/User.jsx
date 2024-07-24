import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams()

    console.log(userid)

    return (
      <div>
        <h1 className='bg-gray-700 p-4 text-white'>User ID: {userid}</h1>
      </div>
    )
}

export default User