//trazendo todos as class e Id DO HTML
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userDate = document.getElementById('dataNasc');
let selecionar = document.getElementById('Turma');
let botaoExc = document.getElementById('btn2');
let divMsg_name = document.getElementById('msg_invalido');
let divMsg_email = document.getElementById('msg_erro');
let divMsg_data = document.getElementById('msg_data');
let my_form = document.getElementById('formulario');
let dados = document.getElementById('informacao');
let adicao = document.getElementById('btn1');
let divMsg_materia = document.getElementById('listMateria');


// Método addEventListene Quando o usuário interagir
adicao.addEventListener('click', adicionar);
// botaoExc.addEventListener('click', desfazer);

//Função para vincular todas as outras funções
function adicionar(e) {
    e.preventDefault();

    nome(); 
    // idadeCerta();
    emailVerif();
  
};

//Função nome
function nome() {

//calculo para saber se é de menor!
let anoAtual = new Date();
let dataAtual = new Date(userDate.value);
let resultado = anoAtual.getFullYear() - dataAtual.getFullYear();

    if (userName.value == '') {

        divMsg_name.innerHTML = 'Por Favor, colocar o nome.';
        divMsg_name.style.fontSize = '16px';
        divMsg_name.style.color = 'red';
        divMsg_name.style.width = 'bold';
        setTimeout(() => divMsg_name.remove(), 4000);

    } else if (resultado < 18) {

        alert ('So aceitamos candidatos +18.');
        userName.value = '';
        userEmail.value = '';
        userDate.value = '';
        selecionar.value = '';
        

    } else if (userDate.value == '') {
       
        divMsg_data.innerHTML = 'Por Favor, coloque sua data de nascimento.';
        divMsg_data.style.fontSize = '16px';
        divMsg_data.style.color = 'red';
        divMsg_data.style.width = 'bold';
        setTimeout(() => divMsg_data.remove(), 4000);

    } else if (selecionar.value == vamos) {

        divMsg_materia.innerHTML = 'Por favor, selecionar a matéria.'
        divMsg_materia.style.fontSize = '16px';
        divMsg_materia.style.color = 'red';
        divMsg_materia.style.width = 'bold';
        setTimeout(() => divMsg_materia.remove(), 4000);


    }
    
};


// let texto = document.createElement('li');
// texto.appendChild(document.createTextNode(`Nome: ${userName.value} - Email: ${userEmail.value} - Nascimento: ${userDate.value} - Matéria ${selecionar.value}`));
// dados.appendChild(texto);


 

// Função para email
function  emailVerif() {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(userEmail.value)) {
    divMsg_email.innerHTML = 'Por favor, insira um e-mail válido.';
    divMsg_email.style.fontSize = '16px';
    divMsg_email.style.color = 'red';
    divMsg_email.style.width = 'bold';
    setTimeout(() => divMsg_email.remove(), 3000);
    };
};