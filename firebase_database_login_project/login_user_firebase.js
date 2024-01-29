import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, set, ref, child,get } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
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
const database_ref = ref(database);

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let main = document.querySelector("#main");

let SignIN = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            get(child(database_ref, 'UserAuthList/' + userCredential.user.uid)).then((snapshot) => {
                console.log(snapshot.val());
                if (snapshot.exists){
                    sessionStorage.setItem("user_info",JSON.stringify({
                        username: snapshot.val().username,
                        email: snapshot.val().email,
                    }));
                    sessionStorage.setItem("user_creds" , JSON.stringify(userCredential.user));
                    window.location.href = "home.html";
                }
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

}

main.addEventListener("submit", SignIN);