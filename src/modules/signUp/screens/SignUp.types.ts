import { Dispatch, SetStateAction } from "react";

export type LayoutPropsType = {
    variables: VariablesType
    handlers: HandlersType
};

export type VariablesType = {
    email: string,
    password: string,
};

export type HandlersType = {
    handleRegister: () => void,
    handleGoBack: () => void,
    setEmail: Dispatch<SetStateAction<string>>,
    setPassword: Dispatch<SetStateAction<string>>
};

export type SignInTextType = {
    title: string,
    email: string,
    password: string,
    buttonText: string,
    linkText: string,
    linkTextStrong: string
};


