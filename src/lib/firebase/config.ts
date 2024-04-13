import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID,
  appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
// export const firebaseConfig = {
//   apiKey: "AIzaSyAEJPfsHaXuwDY4jGSOEE8LvpD_YbWhc0A",
//   authDomain: "auth-1ae84.firebaseapp.com",
//   databaseURL: "https://auth-1ae84-default-rtdb.firebaseio.com",
//   projectId: "auth-1ae84",
//   storageBucket: "auth-1ae84.appspot.com",
//   messagingSenderId: "642654411908",
//   appId: "1:642654411908:web:2bbf01488495ac05c076d1",
// };
// export const firebaseConfig = {
//   apiKey: "AIzaSyCspjWdEMJg7Ekjidj_MIzO2yy1j-LL-T0",
//   authDomain: "frontend2024-9ebcb.firebaseapp.com",
//   databaseURL: "https://frontend2024-9ebcb-default-rtdb.firebaseio.com",
//   projectId: "frontend2024-9ebcb",
//   storageBucket: "frontend2024-9ebcb.appspot.com",
//   messagingSenderId: "505821804638",
//   appId: "1:505821804638:web:d034a2bd47635fc4129ccf",
// };

// init FB
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
