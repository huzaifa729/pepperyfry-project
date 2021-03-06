import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCcTZYI-wTjmwLwC7bFK0sGWXPnpb9Kpq4",
    authDomain: "pepperyfry-clone.firebaseapp.com",
    projectId: "pepperyfry-clone",
    storageBucket: "pepperyfry-clone.appspot.com",
    messagingSenderId: "578413688079",
    appId: "1:578413688079:web:8c38905964cc6f443c7a7a"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}