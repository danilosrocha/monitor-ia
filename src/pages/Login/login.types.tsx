import { Dispatch, SetStateAction } from "react";

export type LayoutPropsType = {
    variables?: VariablesType
    handlers?: HandlersType
};

export type VariablesType = {
    email: string,
    password: string,
};

export type HandlersType = {
    handleLogin: () => void,
    setEmail: Dispatch<SetStateAction<string>>,
    setPassword: Dispatch<SetStateAction<string>>
};

export type LoginTextType = {
    title: string,
    email: string,
    password: string,
    buttonText: string,
    linkText: string,
    linkTextStrong: string
};


