import React from "react";
import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

function Home(){

    const numbers = useSelector((state)=>state.product)
    console.log(numbers)
    return(
        <Flex>
            
        </Flex>
    )
}


export default Home