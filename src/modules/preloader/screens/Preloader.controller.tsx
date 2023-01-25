import React, { useEffect } from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Preloader from "./Preloader.layout"

type Navigation = NavigationProp<Record<string, object | undefined>, string>;

const PreloaderController = () => {
    const navigation: Navigation = useNavigation();

    useEffect(() => {
        const handleGoToSignIn = () => {
            navigation.navigate("SignIn")
        }
        setInterval(handleGoToSignIn, 2000);
    }, []);

    return (
        <Preloader />
    )
}

export default PreloaderController

