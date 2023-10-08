import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrBjId_0wClRGpN81wf3iW5YxwPffanU8",
  authDomain: "fir-c18d6.firebaseapp.com",
  projectId: "fir-c18d6",
  storageBucket: "fir-c18d6.appspot.com",
  messagingSenderId: "831781613574",
  appId: "1:831781613574:web:495ae9c9480ba3d0685387",
  measurementId: "G-NKBMXEBZ7Z"
};

  export default firebase.initializeApp(firebaseConfig)