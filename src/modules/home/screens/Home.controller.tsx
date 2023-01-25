import React, { useState } from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Home from "./Home.layout";
import logoutEmailAndPassword from "../../../services/firebase/logOut";
import { auth } from "../../../services/firebase/firebase.config";

type Navigation = NavigationProp<Record<string, object | undefined>, string>;

const HomeController = () => {
    const navigation: Navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth.currentUser);

    async function handleLogout() {
        await logoutEmailAndPassword();
        navigation.navigate("SignIn")
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
        handleLogout,
        setEmail,
        setPassword,
    }

    return (
        <>
            <Home
                handlers={handlers}
                variables={variables}
            />
        </>
    )
}

export default HomeController

