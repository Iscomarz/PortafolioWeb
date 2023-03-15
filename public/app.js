'use strict'
import { initializeApp } from 'firebase/app';
import "firebase/messaging";


window.addEventListener(`load`, () => {
    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
        //...
    };

    const app = initializeApp(firebaseConfig);
    const messaging = firebase.messaging();

    //Formulario

    var formulario = document.querySelector("#contForm");

    formulario.addEventListener('submit', function () {
        console.log("evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var email = document.querySelector("#email").value;
        var message = document.querySelector("#message").value;

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("Debes ingresar un nombre y un email");
            return false
        }

        if (email.trim() == null || email.trim().length == 0) {
            alert("Debes ingresar un email");
            return false
        }

        if (message.trim() == null || message.trim().length == 0) {
            alert("Debes ingresar un mensaje");
            return false
        }

    });

});

