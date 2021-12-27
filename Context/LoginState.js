import React, { useState } from 'react'
import ContexProvider from './ContexProvider'

const LoginState = (props) => {
    // http://localhost:9000/auth/login
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const login = async () => {
        try {
            // e.preventDefault()
            const response = await fetch(" http://localhost:9000/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            });
            const json = await response.json()
            console.log(json);
            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken);

            }
            else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <ContexProvider.Provider value={{ setEmail, email, password, setPassword, login }} >
            {props.children}
        </ContexProvider.Provider >
    )
}

export default LoginState
