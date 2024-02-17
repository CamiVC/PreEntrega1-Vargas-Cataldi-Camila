
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGh9EMO6gtFgcJG5iEBr44VleLci--ZNs",
    authDomain: "proyecto-final-reactjs-camiv.firebaseapp.com",
    projectId: "proyecto-final-reactjs-camiv",
    storageBucket: "proyecto-final-reactjs-camiv.appspot.com",
    messagingSenderId: "239749758282",
    appId: "1:239749758282:web:fc2ec1029bbae8f8d755b3"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db 