import { useState } from "react";
import Login from "./register.layout";

const RegisterController = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")

    function handleRegister() {
        alert(" ---> Cadastro ")
        console.log(email);
        console.log(password);
        console.log(nome);
    }

    const variables = {
        email,
        password,
        nome,
    }

    const handlers = {
        handleRegister,
        setEmail,
        setPassword,
        setNome,
    }

    return (
        <Login
            handlers={handlers}
            variables={variables}
        />
    )
}

export default RegisterController;

