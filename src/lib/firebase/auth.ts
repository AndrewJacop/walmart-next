import {
  sendSignInLinkToEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";

export async function signMeIn(email: string, password: string) {
  try {
    const userCreds = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCreds.user.getIdToken();

    const response = await fetch("http://localhost:3000/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });
    const resBody = await response.json();
    if (response.ok && resBody.success) {
      localStorage.setItem("userId", idToken);
      return true;
    } else {
      console.error("Sign-in failed:", resBody.error);
      return false;
    }
  } catch (error) {
    console.error("Error signing in with Firebase:", error);
    return false;
  }
}

export async function signMeUp(email: string, password: string) {
  try {
    const userCreds = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCreds.user.getIdToken();
    const uid = await userCreds.user.uid;

    const response = await fetch("http://localhost:3000/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await userCreds.user.getIdToken()}`,
      },
      body: JSON.stringify({ idToken }),
    });
    const resBody = await response.json();
    if (response.ok && resBody.success) {
      return uid;
    } else return "";
  } catch (error) {
    console.error("Error signing up with these credentials", error);
    return "";
  }
}

export async function signMeOut() {
  try {
    await auth.signOut();
    const response = await fetch("http://localhost:3000/api/auth/sign-out", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resBody = await response.json();
    if (response.ok && resBody.success) {
      localStorage.setItem('favorites',JSON.stringify([]));
      localStorage.setItem('cart',JSON.stringify([]));
      console.log("logging out is done");
   

      return true;
    } else {
      localStorage.setItem('favorites',JSON.stringify([]));
      localStorage.setItem('cart',JSON.stringify([]));
      console.log("logging problem");
      return false;
    }
  } catch (error) {
    console.error("Error signing out with Google", error);
    return false;
  }
}
