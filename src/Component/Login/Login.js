import React from 'react'
import { Button } from 'react-bootstrap-v5'
import Header from '../Header/Header'
import useFirebase from '../hooks/useFirebase'


const Login = () => {
    const {signInUsingGoogle}=useFirebase();
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
               
                <Button variant='success' >Login</Button>
                <br />
                <Button variant='secondary'>LogOut</Button>
            </form>
            <br />
            <Button variant="success" onClick={signInUsingGoogle} >Google sign In </Button>
        </div>
    )
}

export default Login
