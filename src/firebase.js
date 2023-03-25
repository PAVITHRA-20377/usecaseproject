
import firebase from "firebase/app"
import "firebase/auth" 



const firebaseConfig = {
    apiKey: "AIzaSyC-rmO4wgvbXYjVBX48208H-A8RIKDUZ18",
    authDomain: "usecaseproject-25f24.firebaseapp.com",
    projectId: "usecaseproject-25f24",
    storageBucket: "usecaseproject-25f24.appspot.com",
    messagingSenderId: "773376233535",
    appId: "1:773376233535:web:01f48aeb223e78aaa6688a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;