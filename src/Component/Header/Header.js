import React from 'react'

const Header = () => {
    return (
        <div>
            <ul>
              <Link to="home"><li>Home</li></Link>  
               <Link to="service"><li>Service</li></Link> 
                <Link to="login"><li>Login</li></Link>
                <Link to="register"><li>Register</li></Link>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Header
