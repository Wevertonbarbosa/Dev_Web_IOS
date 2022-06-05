//trazendo todos as class e Id DO HTML
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userDate = document.getElementById('dataNasc');
let selecionar = document.getElementById('item');
// let botaoAdd = document.getElementById('btn1');
let conteudo = document.getElementById('formulario');
let botaoExc = document.getElementById('btn2');
let divMsg_name = document.getElementById('msg_invalido');
let divMsg_email = document.getElementById('msg_erro');
let divMsg_data = document.getElementById('msg_data')
let dados = document.getElementById('informacao');

// Método addEventListene Quando o usuário interagir
conteudo.addEventListener('click', adicionar);




let dataAtual = new Date

//Preciso inserir todas as funções que vou criar dentro do meu addEventListener(adicionar), ou criar outras para vincular as ações dentro do HTML



//Criando a função
function adicionar(e) {
    e.preventDefault();

    let fullAno = new Date (userDate.value);
    let idadeAtual = fullAno.getFullYear() - dataAtual.getFullYear();

    if (userName.value === '' || userDate.value === '') {
        

        divMsg_name.innerHTML = 'Por favor, Insira seu nome completo.';
        divMsg_data.innerHTML = 'Por favor, insira sua data de nascimento.';
        divMsg_data.style.color = 'red';
        divMsg_data.style.fontSize = '17px';
        divMsg_name.style.color =' red';
        divMsg_name.style.fontSize = '17px';
        setTimeout(() => divMsg_name.remove(), 3000);
        setTimeout(() => divMsg_data.remove(), 3000);
        
      
    
    } else if (idadeAtual < 18){

        alert ('Precisa ter + 18 anos')
        
    } else {

        let info = document.createElement('li');
        info.appendChild(document.createTextNode(` Seu Nome: ${userName.value} - Nascimento:${userDate.value}`));
        dados.appendChild(info);


    }
};




//    validar email com RegExp
userEmail.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(userEmail.value)) {

    // alert('Por favor, insira um e-mail válido.');
    divMsg_email.innerHTML = 'Por favor, insira um e-mail válido.';
    divMsg_email.style.color = 'red';
    divMsg_email.style.fontSize = '17px';
    setTimeout(() => divMsg_email.remove(), 3000);
    }
    });