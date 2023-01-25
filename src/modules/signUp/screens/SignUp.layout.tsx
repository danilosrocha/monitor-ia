import React from "react";
import { Box, Input, Center, Image, VStack, FormControl, Link, Button, HStack, Text } from "native-base";
import { LayoutPropsType } from "./SignUp.types";


const SignUp = ({ variables, handlers }: LayoutPropsType) => {

    return (
        <Center w="100%" h="100%"  >
            <Box safeArea p="4" py="8" w="90%" flex="1" alignItems="center" justifyContent="center">

                <Image source={require('../../../assets/logo.png')} alt="logo" width="200" height="200" />

                {/* <VStack space={3} mt="5" w="100%" >

                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            value={variables.email}
                            onChangeText={(text) => handlers.setEmail(text)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Senha</FormControl.Label>

                        <Input
                            value={variables.password}
                            onChangeText={(text) => handlers.setPassword(text)}
                            type="password"
                        />

                        <Link
                            _text={{
                                fontSize: "xs",
                                fontWeight: "500",
                                color: "#1b1a1a",
                            }}
                            alignSelf="flex-end" mt="1"
                        // onPress={() => handlers.handleSignIn()}
                        >
                            Forget Password?
                        </Link>

                    </FormControl>

                    <Button
                        mt="2"
                        colorScheme="coolGray"
                    // onPress={() => handlers.handleSignIn()}
                    >
                        Sign in
                    </Button>

                    <HStack mt="6" justifyContent="center" >

                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            Já possui uma conta?{" "}
                        </Text>

                        <Link
                            _text={{
                                color: "#1b1a1a",
                                fontWeight: "bold",
                                fontSize: "sm"
                            }}
                        // onPress={() => handlers.handleSignUp()}
                        >
                            Faça login
                        </Link>

                    </HStack>
                </VStack> */}

            </Box>
        </Center >
    )
}

export default SignUp;