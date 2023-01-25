import { Text, Box } from "native-base";
import React from "react";
import textPreloader from "./Preloader.language";

const Preloader = () => {

    return (
        <Box alignItems="center" justifyContent="center" flex="1" background="#444">
            <Text>{textPreloader.title}</Text>
        </Box>
    )
}

export default Preloader;