import { VariablesType } from './firebase.types';
import { auth } from "./firebase.config";

const registerWithEmailAndPassword = async ({ name, email, password }: VariablesType) => {
  let register = false

  await auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user) {
        user.updateProfile({
          displayName: name,
        })
        user.sendEmailVerification();
      }

      alert("Usuário cadastrado!")
      register = true
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage)
    });
  console.log(register);

  return register;
};

export default registerWithEmailAndPassword;
