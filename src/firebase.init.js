import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8JqriiZfQjipPOcxErVxQfwzAv9cmbTA",
  authDomain: "ema-jhon-simple-d5d20.firebaseapp.com",
  projectId: "ema-jhon-simple-d5d20",
  storageBucket: "ema-jhon-simple-d5d20.appspot.com",
  messagingSenderId: "472410582247",
  appId: "1:472410582247:web:b5a04d98be9544938c8642"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;