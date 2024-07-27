import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div>Pls Login</div>

    return (
        <div>
            <h2>Welcome</h2>
            <h3>Username: {user.username}</h3>
            <h3>Password: {user.password}</h3>
        </div>
    )
}

export default Profile