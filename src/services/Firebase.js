import firebase from 'firebase/app'
import "firebase/auth";
import { config } from '../config'

export function FirebaseService() {
  firebase.initializeApp(config.firebase);
  const auth = firebase.auth()

  const createUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  } 

  const logInUserWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logInUserWithGoogle = () => {
    return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  return {
    createUserWithEmailAndPassword,
    logInUserWithGoogle,
    logInUserWithEmailAndPassword
  }

}
