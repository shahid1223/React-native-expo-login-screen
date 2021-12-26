import React from 'react'
import { Input } from 'native-base';

const LoginInput = ({ title }) => {
    return (
        <>
            <Input
                mx="3"
                placeholder={title}
                size="45px"
                variant="rounded"
                mt="5"
                bg="darkText"
                w={{
                    base: "75%",
                    md: "25%",
                }}
                color="white"
            />
        </>
    )
}

export default LoginInput
