// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let inputAmigo = document.querySelector('input');

function agregarAmigo() {
    nuevoAmigo = inputAmigo.value;
    console.log(nuevoAmigo);
    if ( nuevoAmigo == "" ) {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nuevoAmigo);
        inputAmigo.value = '';
    }
    actualizarLista();
}

let lista = document.querySelector('ul');

function actualizarLista (){
    lista.innerHTML = "";
    for ( let i = 0 ; i < amigos.length; i++ ){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(li);
    }
    ;
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random()*amigos.length);
        document.getElementById("resultado").innerHTML = "Tu amigo secreto es: "+amigos[indice];
    } else {
        alert("Ingresa al menos un amigo.");
    }
}