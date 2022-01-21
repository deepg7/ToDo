import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const signInWithGoogle = (auth: any, provider: any) => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log("token", token);
			console.log("user", user);
		})
		.catch((error) => {
			console.log(error.message);
		});
};
