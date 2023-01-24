import Head from 'next/head'
import logoImg from '../../../public/images/logo.svg'
import Image from 'next/image'
import { Button, Center, Flex, Input, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { LayoutPropsType } from './login.types'
import langLogin from '../register/register.language'

const Login = ({ variables, handlers }: LayoutPropsType) => {

    return (
        <>
            <Head>
                <title>{langLogin.title}</title>
            </Head>
            <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center">
                <Flex width={640} direction={'column'} p={14} rounded={8}>
                    <Center p={4}>
                        <Image
                            src={logoImg}
                            quality={100}
                            objectFit="fill"
                            width={240}
                            alt='Logo Barber PRO'
                        />
                    </Center>

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder={langLogin.email}
                        type="email"
                        mb={3}
                        color="white"
                        _hover={{ bg: "gray.900" }}
                        value={variables?.email}
                        onChange={(event) => handlers?.setEmail(event.target.value)}
                    />

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder={langLogin.password}
                        type="password"
                        mb={6}
                        color="white"
                        value={variables?.password}
                        _hover={{ bg: "gray.900" }}
                        onChange={(event) => handlers?.setPassword(event.target.value)}
                    />

                    <Button
                        background="button.cta"
                        mb={6}
                        color="gray.900"
                        size="lg"
                        _hover={{ bg: "orange.700" }}
                        onClick={handlers?.handleLogin}
                    >
                        {langLogin.buttonText}
                    </Button>

                    <Center mt={2}>
                        <Link href="/register">
                            <Text
                                color="white"
                                cursor="pointer"
                            >
                                {langLogin.linkText}<strong>{langLogin.linkTextStrong}</strong></Text>
                        </Link>
                    </Center>

                </Flex>
            </Flex>
        </>
    )
}

export default Login;