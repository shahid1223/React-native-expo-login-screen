import React, { useContext } from 'react'
import { Button, Pressable } from 'native-base';
import context from '../Context/Contex';

const LoginButton = () => {
    const dataContext = useContext(context)
    const { email } = dataContext
    return (
        <>
            <Pressable>
                {({ isHovered, isFocused, isPressed }) => {
                    return (
                        <Button
                            bg={isPressed ? "orange.100" : isHovered ? "black" : "orange.600"}
                            mx="auto" px="20" py="4"
                            rounded="25"
                            mt="5"
                            onPress={() => console.log("My name is ", email)}
                        >Login</Button>
                    )
                }}
            </Pressable>
        </>
    )
}

export default LoginButton
