import React from 'react'
import { Button } from 'react-bootstrap-v5'
import Header from '../Header/Header'

const Login = () => {
    return (
        <div>
            <Header></Header>
            <h1>Please Login </h1>
            <form action="" style={{}}>
                
                
                <label htmlFor="">Email:</label>
                <br />
                <input type="email" />
                <br />
                <label htmlFor="">Password :</label>
                <br />
                <input type="password" />
                <br />
               
                <Button variant='secondary' >Login</Button>
            </form>
        </div>
    )
}

export default Login
