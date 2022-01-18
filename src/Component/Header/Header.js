import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='menu'>
            <ul>
              <Link to="/home"><li className='items'>Home</li></Link>  
               <Link to="/service"><li className='items'>Service</li></Link> 
                <Link to="/login"><li className='items'>Login</li></Link>
                <Link to="/register"><li className='items'>Register</li></Link>
                
            </ul>
        </div>
    )
}

export default Header
