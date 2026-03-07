import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCIoaozLmyz-ar_igQfFB_XGIfE1NOjRE0",
    authDomain: "unistay-c9f36.firebaseapp.com",
    projectId: "unistay-c9f36",
    storageBucket: "unistay-c9f36.firebasestorage.app",
    messagingSenderId: "241006141141",
    appId: "1:241006141141:web:15bdc1bef099a7b4dacc5c",
    measurementId: "G-844E0MP1WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();


const googleLogin = document.getElementById('google-login-btn');

googleLogin.addEventListener('click', function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            window.location.href = "../index.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });;
})