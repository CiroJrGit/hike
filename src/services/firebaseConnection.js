import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';  

const firebaseConfig = {
   apiKey: "AIzaSyDu7AJ34FA7UkF1Mn-UpVvk-GVQz6pE-Mw",
   authDomain: "hike-1ff89.firebaseapp.com",
   projectId: "hike-1ff89",
   storageBucket: "hike-1ff89.appspot.com",
   messagingSenderId: "686181260333",
   appId: "1:686181260333:web:e77b01c44e3113f1a0aca4",
   measurementId: "G-KNW69Y6WPY"
};

  
// Inicializando Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

export default firebase;