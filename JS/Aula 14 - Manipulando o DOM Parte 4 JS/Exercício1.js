//trazendo todos as class e Id DO HTML
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userDate = document.getElementById('dataNasc');
let selecionar = document.getElementById('item');
let conteudo = document.getElementById('formulario');
let botaoExc = document.getElementById('btn2');
let divMsg_name = document.getElementById('msg_invalido');
let divMsg_email = document.getElementById('msg_erro');
let divMsg_data = document.getElementById('msg_data')
let my_form = document.getElementById('formulario');
let dados = document.getElementById('informacao');
let adicao = document.getElementById('btn1');

//Vinculos em cada fução das mensagens.
let verifIdade = false;
let verifEmail = false;



// Método addEventListene Quando o usuário interagir
adicao.addEventListener('submit', adicionar);
botaoExc.addEventListener('click', desfazer);

//calculo da idade
let dataAtual = new Date



//Criando a função

function adicionar(e) {
    e.preventDefault();
    validadeEmail();
    validadeIdade();

    if (userName.value === '' || userEmail === '') {
        divMsg_name.innerHTML = 'Insira o nome'

        setTimeout(() => divMsg_name.remove(), 3000);
        
    } else if (verifEmail === true && verifIdade === true) {
        
        let letras = document.createElement('li');
        letras.appendChild(document.createTextNode(` Candidato: ${userName.value}, E-mail: ${userEmail.value}, Nascimento: ${userDate.value}`));
        dados.appendChild(letras);
        userName.value = '';
        userEmail.value = '';
        //Dando Foco no nome do Usuário
        userName.focus();
    }
};

// Validação da Idade 

function validadeIdade() {
    let idadeAtual = new Date(userDate);
    let calculo = dataAtual.getFullYear() - idadeAtual.getFullYear();
    if (dataAtual.getMonth() < idadeAtual.getMonth) calculo--; 
    else if (dataAtual.getMonth() == idadeAtual.getMonth() && dataAtual.getDate() < idadeAtual.getDate()) calculo--; 
        if (calculo < 18) {

            alert('Precisa ter +18');
            
        }else {
            verifIdade = true;
        }
    
}




//    validar email com RegExp
function validadeEmail() {
    
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(userEmail.value)) {
    divMsg_email.innerHTML = 'Por favor, insira um e-mail válido.';
    divMsg_email.style.color = 'red';
    divMsg_email.style.fontSize = '17px';
    my_form.appendChild(divMsg_email);
    setTimeout(() => divMsg_email.remove(), 3000);
    }
    };

    //Função Desfazer botão de Excluir

    function desfazer() {

        let exc = prompt ('Insira a posição do candidato que deseja remover');
        let todos = dados.getElementsByTagName('li');
        dados.removeChild(todos[exc - 1])  
    }