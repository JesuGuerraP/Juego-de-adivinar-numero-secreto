let numeroSecreto= 0;
let intentos=0;
let listaNumeroGenerado = [];
let numeroMaximo=100;
let maximoINtentos=10;
//poner texto en el h1 y el p
function ponerTexto(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto; 

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    


    if (numeroDeUsuario == numeroSecreto){
        ponerTexto('p',`acertaste el numero en ${intentos} ${(intentos ===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
      //el usurario no acerto
        if(numeroDeUsuario > numeroSecreto){
            ponerTexto('p','El número secreto es menor');
        }else{
            ponerTexto('p','El número secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
        if (intentos > maximoINtentos){
            ponerTexto('p','Llegaste al numero maximo de ' + maximoINtentos + ' intentos');
            document.getElementById('reiniciar').removeAttribute('disabled');

           
        }
    }

}

//funcion para limpiar caja al no acertar el numero
function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value='';

}

function generarNumeroSecreto() { 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroGenerado);
    //si  ya sorteamos todos los numeros
    if( listaNumeroGenerado.length == numeroMaximo){
        ponerTexto('p','Ya se sortearon todos los numeros posibles')
    }else{
        //si el numeroGenerado esta incluido en la lista de numeroGenerado
        if(listaNumeroGenerado.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
        }
      }
    }

function condicionesInciales() {
    //indicar mensaje de intervalo de números
    ponerTexto('h1','Juego del número secreto');
    ponerTexto('p', 'indica un número entre 1 y ' + numeroMaximo);

    numeroSecreto =generarNumeroSecreto();
    intentos=1;
    
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();

    
   
    //generar el númerp aleatorio

    //incializar el numero de intentos
    condicionesInciales();
     //deshabilitar el botón de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}

condicionesInciales();
