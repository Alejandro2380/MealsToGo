import * as firebase from "firebase/app";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(app);

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
