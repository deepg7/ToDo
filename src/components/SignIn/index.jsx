import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../services/firebase.config";
import { signInWithGoogle } from "../../services/signin";
const SignIn = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	return (
		<div>
			<button onClick={() => signInWithGoogle(auth, provider)}>Sign In.</button>
		</div>
	);
};

export default SignIn;
