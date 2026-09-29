import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const loginForm = document.querySelector(".login-form");
const errorMsg = document.getElementById("error-msg");
const loginButton = loginForm.querySelector('button[type="submit"]');

function registrationToEmail(registrationNumber) {
  const cleaned = registrationNumber
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  return `${cleaned}@nexa.test`;
}

onAuthStateChanged(auth, (candidate) => {
  if (
    candidate &&
    localStorage.getItem("nexa_registration_number")
  ) {
    window.location.replace("intr.html");
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const registrationNumber = document
    .getElementById("regnumber")
    .value
    .trim()
    .toUpperCase();

  const password = document.getElementById("password").value;

  errorMsg.textContent = "";
  loginButton.disabled = true;
  loginButton.textContent = "Logging In...";

  try {
    await signInWithEmailAndPassword(
      auth,
      registrationToEmail(registrationNumber),
      password
    );

    localStorage.setItem("nexa_registration_number", registrationNumber);
    window.location.replace("intr.html");
  } catch (error) {
    console.error("Firebase login failed:", error.code);
    errorMsg.textContent = "Wrong registration number or password.";
    errorMsg.style.display = "block";
  } finally {
    loginButton.disabled = false;
    loginButton.textContent = "Log In";
  }
});
