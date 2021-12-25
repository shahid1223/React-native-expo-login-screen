import React from 'react'
import { Heading } from 'native-base';

const LoginHeading = ({ title }) => {
    return (
        <>
            <Heading
                color="orange.600"
                fontSize="50"
                mt="40"
            >
                {title}
            </Heading>
        </>
    )
}

export default LoginHeading
