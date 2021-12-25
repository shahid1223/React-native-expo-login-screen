import React from 'react';
import { Box } from 'native-base';
import { Forgate } from './Component/Forgate';
import LoginButton from './Component/LoginButton';
import LoginHeading from './Component/LoginHeading';
import LoginInput from './Component/LoginInput';


const LoginIndex = () => {
    return (
        <>
            <Box flex={1} bg="#27272a" alignItems="center">
                <LoginHeading title="Hey App" />
                <LoginInput title="Email" />
                <LoginInput title="PassWord" />
                <Forgate />
                <LoginButton />
            </Box>
        </>
    )
}

export default LoginIndex
