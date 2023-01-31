import { VariablesTypeSignIn } from './firebase.types';
import { auth } from "./firebase.config";

const loginWithEmailAndPassword = async ({ email, password }: VariablesTypeSignIn) => {
    let login = false
    await auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            login = true
            const user = userCredential.user;
            console.log("Logado com o email: ", user?.email);
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });

    return login;
};

export default loginWithEmailAndPassword;