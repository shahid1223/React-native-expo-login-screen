import React, { useContext, useState } from 'react';
import { Box, Input, Pressable, Button, Text } from 'native-base';
import { useForm, Controller } from "react-hook-form";
import { Forgate } from './Component/Forgate';
import LoginButton from './Component/LoginButton';
import LoginHeading from './Component/LoginHeading';
import ContexProvider from './Context/ContexProvider';


const LoginIndex = () => {
    const [isemail, setIsEmail] = useState("")
    const [isPassword, setIsPassword] = useState("")
    const dataContext = useContext(ContexProvider)
    const { email, setEmail, password, setPassword, login } = dataContext
    const onSubmit = () => {
        if (email == "" && password == "") {
            setIsEmail("Enter Email")
            setIsPassword("Enter Password")
        } else {
            login()
            setIsEmail("")
            setIsPassword("")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <>
            <Box flex={1} bg="#27272a" alignItems="center">
                <LoginHeading title="Hey App" />



                <Input
                    mx="3"
                    placeholder="Email"
                    size="45px"
                    variant="rounded"
                    mt="5"
                    bg="darkText"
                    w={{
                        base: "75%",
                        md: "25%",
                    }}
                    color="white"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text color="white">{isemail}</Text>



                <Input
                    mx="3"
                    placeholder="PassWord"
                    size="45px"
                    variant="rounded"
                    mt="5"
                    bg="darkText"
                    w={{
                        base: "75%",
                        md: "25%",
                    }}
                    color="white"
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style={{ textAlign: "left" }} color="white">{isPassword}</Text>

                <Forgate />
                <Pressable>
                    {({ isHovered, isPressed }) => {
                        return (
                            <Button
                                bg={isPressed ? "orange.100" : isHovered ? "black" : "orange.600"}
                                mx="auto" px="20" py="4"
                                rounded="25"
                                mt="5"
                                // onPress={() => login()}
                                onPress={onSubmit}
                            >Login</Button>
                        )
                    }}
                </Pressable>
            </Box>
        </>
    )
}

export default LoginIndex
