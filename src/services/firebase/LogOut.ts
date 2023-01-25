import { auth } from "./firebase.config";

const logoutEmailAndPassword = async () => {
    auth.signOut().then(() => {
        console.log("Logout successful");
    }).catch((error) => {
        console.log(error);
    });
};

export default logoutEmailAndPassword;


