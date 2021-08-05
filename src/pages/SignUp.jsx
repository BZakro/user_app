import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function SignUp(){
    const [loginCred, setLoginCred] = useState({
        userName: '',
        password: '',
        email : ''
    })

    const HandleChange=(ev)=>{
        const {name, value} = ev.target
        setLoginCred(cred=>({...cred, [name]: value}))
    }
    
    const onSignUp = async (ev)=>{
        ev.preventDefault()
        const {userName, password, email}= loginCred
    }

    return (
        <div className="sign-up">
            <form onSubmit={onSignUp}>


            </form>


        </div>
    )


}
