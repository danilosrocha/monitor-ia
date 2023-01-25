import React from "react";
import { Box, Input, Center, Image, VStack, FormControl, Link, Button, HStack, Text } from "native-base";
import { LayoutPropsType } from "./Home.types";


const Home = ({ variables, handlers }: LayoutPropsType) => {

    return (
        <Center w="100%" h="100%"  >
            <Box safeArea p="4" py="8" w="90%" flex="1" alignItems="center" justifyContent="center">

                <Image source={require('../../../assets/logo.png')} alt="logo" width="150" height="150" />

                <Button
                    mt="5"
                    colorScheme="coolGray"
                    onPress={() => handlers.handleLogout()}
                >
                    Logout
                </Button>
            </Box>
        </Center >
    )
}

export default Home;