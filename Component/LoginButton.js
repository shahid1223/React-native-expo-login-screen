import React, { useContext } from 'react'
import { Button, Pressable } from 'native-base';
import ContexProvider from '../Context/ContexProvider';

const LoginButton = () => {
    const dataContext = useContext(ContexProvider)
    const { login } = dataContext

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
                            onPress={() => login()}
                        >Login</Button>
                    )
                }}
            </Pressable>
        </>
    )
}

export default LoginButton
