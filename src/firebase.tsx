import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv7AEf8seIYT5En3IIqPBs60eRzF9LllQ",
  authDomain: "quickwatchv1.firebaseapp.com",
  projectId: "quickwatchv1",
  storageBucket: "quickwatchv1.appspot.com",
  messagingSenderId: "814174858890",
  appId: "1:814174858890:web:bafffafc1da79553210773",
  measurementId: "G-M9YFDLVWXH"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

