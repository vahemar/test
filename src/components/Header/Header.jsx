import React from "react";
import { Flex, Button } from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import {useNavigate, useLocation} from 'react-router-dom'

function Header(){

    const links = useSelector((state)=>state.link)
    const navigate = useNavigate()
    const {pathname} = useLocation()
    console.log(pathname)
    return(
        <Flex w={"full"} h={"60px"} bg={"gray.100"} justifyContent={"space-around"} alignItems={"center"}>
            {
                links.map(({id, title, path})=>(
                    <Button key={id} onClick={()=>navigate(path)} colorScheme={pathname === path ? "orange" : 'teal'} >{title}</Button>
                ))
            }
        </Flex>
    )
}

export default Header