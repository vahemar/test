import React from "react";
import { Box } from '@chakra-ui/react'
import Header from "../components/Header/Header";

function AuthLayout({children}){
    return(
    <Box>
        <Header />
        {children}
    </Box>
)
}

export default AuthLayout