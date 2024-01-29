import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, set, ref, child } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCPrpNzvipHXzlnA67GZC92IFU9WpCBuY4",
    authDomain: "create-database-with-fb.firebaseapp.com",
    projectId: "create-database-with-fb",
    storageBucket: "create-database-with-fb.appspot.com",
    messagingSenderId: "833348009395",
    appId: "1:833348009395:web:af12dd2feece096e175fc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
let Sign_Up = document.querySelector("#sign_up");
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let main = document.querySelector("#main");

let register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value, username.value)
        .then((userCredential) => {
            console.log(userCredential);
            set(ref(database, 'UserAuthList/' + userCredential.user.uid), {
                username: username.value,
                email: email.value,
                password: password.value,
                register_date: new Date().toLocaleString()
            });
            email.value = '';
            password.value = '';
            username.value = '';
            alert("User Created Successfully");
        

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

}

main.addEventListener("submit", register);