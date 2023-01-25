import React, { useState } from "react"
import SignIn from "./SignIn.layout"
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Navigation = NavigationProp<Record<string, object | undefined>, string>;

const SignInController = () => {
    const navigation: Navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignIn() {
        alert(" ----> handleSignIn ")
    }

    async function handleForgetPassword() {
        alert(" ----> handleForgetPassword ")
    }

    async function handleSignUp() {
        alert(" ----> handleSignUp ")
        navigation.navigate("SignUp")
    }

    const variables = {
        email,
        password,
    }

    const handlers = {
        handleSignIn,
        handleForgetPassword,
        handleSignUp,
        setEmail,
        setPassword,
    }

    return (
        <>
            <SignIn
                handlers={handlers}
                variables={variables}
            />
        </>
    )
}

export default SignInController

