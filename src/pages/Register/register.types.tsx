import { Dispatch, SetStateAction } from "react";

export type LayoutPropsType = {
    variables?: VariablesType
    handlers?: HandlersType
};

export type VariablesType = {
    email: string,
    password: string,
    nome: string,
};

export type HandlersType = {
    handleRegister: () => void,
    setEmail: Dispatch<SetStateAction<string>>,
    setPassword: Dispatch<SetStateAction<string>>
    setNome: Dispatch<SetStateAction<string>>
};

export type RegisterTextType = {
    nome: string,
    title: string,
    email: string,
    password: string,
    buttonText: string,
    linkText: string,
    linkTextStrong: string
};