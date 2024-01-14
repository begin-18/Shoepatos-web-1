import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdHgjV9TdE_NS-1pYCyGA2fo7c8ojAYSc",
  authDomain: "web-shoepatos-db.firebaseapp.com",
  projectId: "web-shoepatos-db",
  storageBucket: "web-shoepatos-db.appspot.com",
  messagingSenderId: "1045164107976",
  appId: "1:1045164107976:web:b37b93b7a8702a04459dfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)