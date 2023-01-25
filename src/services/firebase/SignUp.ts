import { VariablesTypeSignUp } from './firebase.types';
import { auth, db } from "./firebase.config";

const registerWithEmailAndPassword = async ({ name, email, password }: VariablesTypeSignUp) => {
  console.log(name);

  const result = await auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user?.sendEmailVerification();
      user?.updateProfile({
        displayName: name,
      })
      return true
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage)
      return false
    });
  console.log("--->", result);
  if (result) {
    const result = handleRegisterClick(name)
    return result
  }
  return result;
};

const handleRegisterClick = (name) => {

  const colect = db.collection("Users")
  const newDoc = colect.doc(auth.currentUser?.uid)

  const data = {
    "id": auth.currentUser?.uid,
    "name": name,
    "email": auth.currentUser?.email,
  }

  const result = newDoc.set(data)
    .then(() => {
      alert("Sua conta foi criada!")
      return true
    }).catch((error) => {
      alert(error.message)
      return false
    })
  return result;
}

export default registerWithEmailAndPassword;
