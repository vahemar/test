import React from "react";
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { useCreateUserByNameMutation } from "../../services/userApi";
import { useNavigate } from "react-router-dom";

function Login() {
    const { register, formState: { errors }, reset, handleSubmit } = useForm()
    const [createUserByName] = useCreateUserByNameMutation()
    const navigate = useNavigate()

    const submit = async (data) => {
        try {
            await createUserByName(data).unwrap()
                .then((res) => {
                    if (res) {
                        navigate('/')
                    }
                })
        }catch (error) {
            if(error) {
                navigate('/404')
            }
        }
    }

    return (
        <Flex w={'full'} justify={'center'} mt={14}>
            <form onSubmit={handleSubmit(submit)}>
                <Flex direction={'column'} gap={4} w={'full'} maxW={'700px'} justify={'center'} align={'center'}>
                    <Text>Name:</Text>
                    <Input w={'500px'} {...register('name', { required: true })} />
                    {errors.name && <Text color={'red'}>the name is empty</Text>}
                    <Text>Email:</Text>
                    <Input w={'500px'} {...register('email', { required: true })} />
                    {errors.email && <Text color={'red'}>The email is empty</Text>}
                    <Button type="submit">submit</Button>
                </Flex>
            </form>
        </Flex>
    )
}


export default Login