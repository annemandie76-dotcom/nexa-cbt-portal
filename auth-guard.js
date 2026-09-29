import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

export function requireCandidate(onReady) {
  return onAuthStateChanged(auth, (candidate) => {
    if (!candidate) {
      window.location.replace("login.html");
      return;
    }

    if (typeof onReady === "function") {
      onReady(candidate);
    }
  });
}

export async function logOutCandidate() {
  await signOut(auth);
  localStorage.removeItem("nexa_registration_number");
  window.location.replace("login.html");
}
