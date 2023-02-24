'use strict'

window.addEventListener(`load`,() => {

    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click',() =>{
            const options = document.querySelector('#options')
            options.classList.toggle('show')
        })
    }

//Formulario

        var formulario = document.querySelector("#contForm");

        formulario.addEventListener('submit', function(){
            console.log("evento submit capturado");

            var nombre = document.querySelector("#nombre").value;
            var email = document.querySelector("#email").value;
            var message = document.querySelector("#message").value;

            if(nombre.trim() == null || nombre.trim().length == 0 ){
                alert("Debes ingresar un nombre y un email");
                return false
            }

            if(email.trim() == null || email.trim().length == 0 ){
                alert("Debes ingresar un email");
                return false
            }

            if(message.trim() == null || message.trim().length == 0 ){
                alert("Debes ingresar un mensaje");
                return false
            }

        } );

});

