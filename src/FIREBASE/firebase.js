import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useEffect } from "react";
//import 'firebase/auth';
//import {seedDatabase} from "../seed";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "valflix-4edf8.firebaseapp.com",
    projectId: "valflix-4edf8",
    storageBucket: "valflix-4edf8.appspot.com",
    messagingSenderId: "365217960058",
    appId: "1:365217960058:web:a57770ccc03fa87f85ebc3"
  };

  const firebase = Firebase.initializeApp(firebaseConfig);

  //seedDatabase(firebase);
  //  async function update(){
  //   const Ref = firebase.firestore().collection('films');
  //   const snapshot = await Ref.get();
  //   snapshot.forEach((doc)=> doc.ref.update({imgsrc: "https://prtimes.jp/i/24470/331/ogp/d24470-331-1f7fdc5ac6c6cb4fd30e-5.jpg"}));
  // }
  export {firebase};