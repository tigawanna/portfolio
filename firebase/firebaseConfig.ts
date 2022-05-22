
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics, logEvent } from "firebase/analytics";
import { connectAuthEmulator } from "firebase/auth";
import {connectFirestoreEmulator} from "firebase/firestore"

const firebaseConfig = {
        apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
     
};

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');
}

export const db = getFirestore(app);


// connectFirestoreEmulator(db, '192.168.0.109', 8080);
// connectAuthEmulator(auth, "http://localhost:9099");


