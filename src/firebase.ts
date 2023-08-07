import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDi-fENWywRD1eGBTEBYESF4BV4VCVszns",
    authDomain: "weather-forecast-8aac1.firebaseapp.com",
    projectId: "weather-forecast-8aac1",
    storageBucket: "weather-forecast-8aac1.appspot.com",
    messagingSenderId: "199697790281",
    appId: "1:199697790281:web:77ea8313aa8a39b19c5698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
