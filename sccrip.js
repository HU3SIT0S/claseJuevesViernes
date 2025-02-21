const pantalla = document.querySelector(".pantalla"); /* Este nos ayuda a guardar los arreglos que hagamos en la pantalla (calculadora)*/
const botones = document.querySelectorAll(".boton"); /* este nos ayuda a que guarde todo lo que oprima el usuario en la calculadora */

/* En esta parte vamos a generar que pueda visualizar en consola cuando hacemos clic en la calculadora */
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent; /* en esta constante nos va a ayudar a que nos contenga lo que el usuario oplica en la calculadora y esta la siguiente linea */

        /* Esta parte indica que al momentro de digitar el boton limpiar (C),la pantalla de nuestra calculadora se pone en ccero */
        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return; /* este return nos ayuda a que el codigo no se ejecute en forma secuencial */
        }

        /* En esta parte nos va a borrar en uno a uno el numero dijitado en la pantalla de la calculadora */
        if (boton.id === "borrar") { 
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") { /* Esta parte nos indica que cuando valla a llegra al ultimo caracter borrado, siga la siguiente linea, para dejar el esapcio en blaco coloque un cero (0) */
            pantalla.textContent = "0";
            } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1); /* esta parte indiaca de que si hay mas numero siga paratiendo el numero digitado */
            }
            return; /* este return nos ayuda a que el codigo no se ejecute en forma secuencial */
        }

        /* En esta parte vamos a programar nuestro boton igual (=), con el metotodo eval de javaScrip, su funcion es hacer una evaluacion matematica de lo que allamas digitado  */
        if (boton.id === "igual") {
            try { /* Este try valida que lo que allamos digita en la calculadora realmente es una aperacion matematica de no ser asi sigue con la siguinte linea */
                pantalla.textContent = eval(pantalla.textContent);
            } catch { /*  Este catch se activa cuando el try valida de que realmente no es una operacion matematica y nos arroja el mensaje de error */
                pantalla.textContent = "¡Error!"
            }
                return; /* este return nos ayuda a que el codigo no se ejecute en forma secuencial */
        }

        /*solucion del error del signo dividir (/)*/
            /* En esta parte vamos a validar si estamos utilizando el signo dividir*/
        if (botonOn === "/") {
            /* En este if vamos va a comprobar, si lo ultimo digitado es el signo dividir (/) o al oprimir dos veces el signo dividir (/) */
            if (pantalla.textContent.endsWith("/")) {
            /* y si es asi muestre error en la pantalla */
            pantalla.textContent = "¡Error!";
            retur;  /* este return nos ayuda a que el codigo no se ejecute en forma secuencial */
            }
        }

        /* Esta parte nos indica que cundo la pantalla este en cero, reemplace por lo que el usuario este oprimiendo */ 
        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn;
        } else { /* Esta parte nos indica que si la pantalla no esta en cero valla conctenando lo que el usuario este digitando */
            pantalla.textContent += botonOn;
        }
        

    })
})