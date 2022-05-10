import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import {wait} from "@testing-library/user-event/dist/utils";

const SignIn = () => {
    const logGoogleUse = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <button onClick={logGoogleUse}>
                Sign In With Google
            </button>
        </div>
    );
};

export default SignIn;