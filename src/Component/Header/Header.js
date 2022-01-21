import React from 'react'
import { Button } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'
import './Header.css'

const Header = () => {
    const {logout,user}=useFirebase();
    return (
        <div className='menu'>
            <ul>
              <Link to="/home"><li className='items'>Home</li></Link>  
               <Link to="/service"><li className='items'>Service</li></Link> 
               <Link to="/register"><li className='items'>Register</li></Link>
                <Link to="/login"><li className='items'>Login</li></Link>
                <p style={{color:"white"}}>{user.displayName}</p>
                <img style={{width:"40px",margin:"2px"}} src={user.photoURL} alt="" />
                {user?.email&&<Button variant="primary" onClick={logout}>Logout</Button>}
                
            </ul>
        </div>
    )
}

export default Header
