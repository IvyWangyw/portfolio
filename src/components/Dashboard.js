import Login from "./Login"
import Account from "./Account"
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const Dashboard = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth()

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
    })

    return (
        <div>

            {
                user ? <Account/> : <Login/> // if user exists/true, show Account component, othersie show Login component
            }
        </div>
    )
}

export default Dashboard