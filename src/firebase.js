// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAriFkThszCd4i0xZoC4Y38v9ucjb0nNeE",
  authDomain: "clone-f99ef.firebaseapp.com",
  projectId: "clone-f99ef",
  storageBucket: "clone-f99ef.appspot.com",
  messagingSenderId: "239359973333",
  appId: "1:239359973333:web:09a4b6c9063fb8ab118f5c",
  measurementId: "G-H0CSRWNT4M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db