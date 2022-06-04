//trazendo todos as class e Id DO HTML
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userDate = document.getElementById('dataNasc');
let selecionar = document.getElementById('list');
let botaoAdd = document.getElementById('btn1');
let botaoExc = document.getElementById('btn2');

// Método addEventListene Quando o usuário interagir
botaoAdd.addEventListener('click', adicionar());

function adicionar(e) {
    e.preventDefault();
}
