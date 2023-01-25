import React, { useState } from "react"
import SignUp from "./SignUp.layout"
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Navigation = NavigationProp<Record<string, object | undefined>, string>;

const SignUpController = () => {
    const navigation: Navigation = useNavigation();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleRegister() {
        alert(" ----> handleSignIn ")
    }


    async function handleGoBack() {
        alert(" ----> handleSignUp ")
        navigation.navigate("SignUp")
    }

    const variables = {
        email,
        password,
    }

    const handlers = {
        handleRegister,
        handleGoBack,
        setEmail,
        setPassword,
    }

    return (
        <SignUp
            handlers={handlers}
            variables={variables}
        />
    )
}

export default SignUpController

