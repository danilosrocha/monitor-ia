import React, { useState } from "react"
import SignIn from "./SignIn.layout"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import loginWithEmailAndPassword from "../../../services/firebase/signIn";
import { auth } from "../../../services/firebase/firebase.config";

type Navigation = NavigationProp<Record<string, object | undefined>, string>;

const SignInController = () => {
    const navigation: Navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignIn() {
        const result = await loginWithEmailAndPassword({ email, password })
        if (result) {
            setEmail("")
            setPassword("")
            if (auth.currentUser?.emailVerified) {
                navigation.navigate("Home")
            } else {
                alert("Verifique seu email para logar")
            }
        }
    }

    async function handleForgetPassword() {
        alert(" ----> handleForgetPassword ")

    }

    function handleSignUp() {
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
        <SignIn
            handlers={handlers}
            variables={variables}
        />
    )
}

export default SignInController

