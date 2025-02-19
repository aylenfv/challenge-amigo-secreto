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
    console.log(amigos);
}