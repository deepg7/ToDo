import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDROTAz63yPMHhR4iaQOhAUsSYvrdMIZys",
	authDomain: "yt-extension-68e80.firebaseapp.com",
	projectId: "yt-extension-68e80",
	storageBucket: "yt-extension-68e80.appspot.com",
	messagingSenderId: "728366436596",
	appId: "1:728366436596:web:3da5719a9c1332dd3f8ea1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;

// export const auth = firebase.auth();
