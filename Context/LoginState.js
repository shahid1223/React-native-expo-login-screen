import React, { useState } from 'react'
import context from './Contex'

const LoginState = (props) => {
    const [email, setEmail] = useState()
    return (
        <context.Provider value={{ email, setEmail }}>
            {props.children}
        </context.Provider>
    )
}

export default LoginState
