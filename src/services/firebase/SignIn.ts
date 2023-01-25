import { VariablesType } from './firebase.types';
import { auth } from "./firebase.config";

const loginWithEmailAndPassword = async ({ email, password }: VariablesType) => {
    let login = false
    await auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            login = true
            const user = userCredential.user;
            console.log("Logado com o email: ", user?.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    console.log(login);

    return login;
};

export default loginWithEmailAndPassword;