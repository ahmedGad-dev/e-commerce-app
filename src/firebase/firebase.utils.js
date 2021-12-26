import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDEeT4_qE2Bcb9jYhUmn844wg5kxbNtui0",
    authDomain: "crwn-db-95f6e.firebaseapp.com", 
    projectId: "crwn-db-95f6e", 
    storageBucket: "crwn-db-95f6e.appspot.com", 
    messagingSenderId: "737923043909",
    appId: "1:737923043909:web:b4202a2df0192ce428492c",
    measurementId: "G-5NXGGDJEWS"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  export const auth = getAuth();
  export const firestore = getFirestore();

  export const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default app;
