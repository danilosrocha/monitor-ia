import React, { useState } from "react"
import SignUp from "./SignUp.layout"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import registerWithEmailAndPassword from "../../../services/firebase/signUp";

type Navigation = NavigationProp<Record<string, object | undefined>, string>;

const SignUpController = () => {
    const navigation: Navigation = useNavigation();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleRegister() {
        const result = await registerWithEmailAndPassword({ name, email, password })


        if (result) {
            setName("")
            setEmail("")
            setPassword("")
            navigation.navigate("Home")
        }
    }


    function handleGoBack() {
        navigation.goBack()
    }

    const variables = {
        name,
        email,
        password,
    }

    const handlers = {
        handleRegister,
        handleGoBack,
        setName,
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

