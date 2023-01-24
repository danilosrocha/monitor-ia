import { AuthContext } from "@/context/AuthContext/AuthContext";
import { useState, useContext } from "react";
import Login from "./login.layout";


const LoginController = () => {
    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        alert(" ----> Login ")
        await signIn({ email, password })
    }

    const variables = {
        email,
        password,
    }

    const handlers = {
        handleLogin,
        setEmail,
        setPassword,
    }

    return (
        <Login
            handlers={handlers}
            variables={variables}
        />
    )
}

export default LoginController

