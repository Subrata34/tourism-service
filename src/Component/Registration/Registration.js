import React from 'react'
import { Button } from 'react-bootstrap-v5'

const Registration = () => {
    return (
        <div>
            <h1>Please Register </h1>
        <form action="" style={{}}>
                
                <label htmlFor="">Name :</label>
                <br />
                <input type="text"  />
                <br />
                <label htmlFor="">Email:</label>
                <br />
                <input type="email" />
                <br />
                <label htmlFor="">Password :</label>
                <br />
                <input type="password" />
                <br />
                <label htmlFor="">Retype password :</label>
                <br />
                <input type="password" />
                <br />
                <Button variant='secondary' >Submit</Button>
            </form>
        </div>
    )
}

export default Registration
