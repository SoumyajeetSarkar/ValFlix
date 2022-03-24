import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import 'firebase/auth';
//import {seedDatabase} from "../seed";
const firebaseConfig = {
    apiKey: "AIzaSyDE8S3srOFqAPzwYNs5nmjjsLVW7UYAMGU",
    authDomain: "valflix-4edf8.firebaseapp.com",
    projectId: "valflix-4edf8",
    storageBucket: "valflix-4edf8.appspot.com",
    messagingSenderId: "365217960058",
    appId: "1:365217960058:web:a57770ccc03fa87f85ebc3"
  };

  const firebase = Firebase.initializeApp(firebaseConfig);

  //seedDatabase(firebase);

  export {firebase};