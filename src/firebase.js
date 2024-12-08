import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMZGwMa56UI_5yq_0kzqOwHNX9LUqgLGg",
    authDomain: "bharath-netflix.firebaseapp.com",
    projectId: "bharath-netflix",
    storageBucket: "bharath-netflix.firebasestorage.app",
    messagingSenderId: "833631853666",
    appId: "1:833631853666:web:07c89acbebb7fc46cbc53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), { // Ensure the collection name is "users"
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error.message);
        toast.error(error.code);
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully");
    } catch (error) {
        console.log(error.message);
        toast.error(error.code);
    }
};

const logout = async () => {
    try {
        debugger;
        await signOut(auth);
        console.log("User signed out successfully");
    } catch (error) {
        console.log(error.message);
        toast.error(error);
    }
};

export { auth, db, login, signup, logout };
