import React, { useEffect } from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Preloader from "./Preloader.layout"

type Navigation = NavigationProp<Record<string, object | undefined>, string>;

const PreloaderController = () => {
    const navigation: Navigation = useNavigation();

    useEffect(() => {
        const handleGoToSignIn = () => {
            setTimeout(function () {
                navigation.navigate("SignIn")
            }, 3000);
        }
        handleGoToSignIn();
    }, []);

    return (
        <Preloader />
    )
}

export default PreloaderController

