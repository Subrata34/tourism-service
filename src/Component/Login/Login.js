import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>this is login button </h1>
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
