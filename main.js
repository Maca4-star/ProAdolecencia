import { app } from "./firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const auth = getAuth(app);

window.registrar = function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Usuario registrado");
      window.location.href = "index.html";
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
};

window.login = function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Sesión iniciada");
      window.location.href = "index.html";
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
};