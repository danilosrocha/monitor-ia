import Head from 'next/head'
import logoImg from '../../../public/images/logo.svg'
import Image from 'next/image'
import { Button, Center, Flex, Input, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { LayoutPropsType } from './register.types'
import textRegister from './register.language'

const Register = ({ variables, handlers }: LayoutPropsType) => {

    return (
        <>
            <Head>
                <title>{textRegister.title}</title>
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
                        placeholder={textRegister.nome}
                        type="text"
                        mb={3}
                        color="white"
                        _hover={{ bg: "gray.900" }}
                        value={variables?.nome}
                        onChange={(event) => handlers?.setNome(event.target.value)}
                    />

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder={textRegister.email}
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
                        placeholder={textRegister.password}
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
                        onClick={handlers?.handleRegister}
                    >
                        {textRegister.buttonText}
                    </Button>

                    <Center mt={2}>
                        <Link href="/login">
                            <Text
                                color="white"
                                cursor="pointer"
                            >
                                {textRegister.linkText}<strong>{textRegister.linkTextStrong}</strong></Text>
                        </Link>
                    </Center>

                </Flex>
            </Flex>
        </>
    )
}

export default Register;