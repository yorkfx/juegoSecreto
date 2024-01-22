let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let maximosIntentos = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(`Número secreto: ${numeroSecreto}`);

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    // console.log(numeroUsuario);
    // console.log(numeroUsuario === numeroSecreto);
    // console.log(`Intentos:  ${intentos}`)
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en: ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `)
        document.querySelector("#reiniciar").removeAttribute('disabled');
    }
    else{
        // EL usuario no aserto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor")
        }
        else{
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generaNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*maximosIntentos+1);
    // Si el numero generado esta en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == maximosIntentos){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Adivina el número del 1 al ${maximosIntentos}`); 
    document.querySelector("#valorUsuario").value = "";
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;   
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled', true);
}

condicionesIniciales();

