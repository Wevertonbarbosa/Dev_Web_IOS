//trazendo todos as class e Id DO HTML
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userDate = document.getElementById('dataNasc');
let divMsg_name = document.getElementById('msg_invalido');
let divMsg_email = document.getElementById('msg_erro');
let divMsg_data = document.getElementById('msg_data');
let my_form = document.getElementById('formulario');
let dados = document.getElementById('informacao');
let adicao = document.getElementById('btn1');

// Método addEventListene Quando o usuário interagir no botão
adicao.addEventListener('click', adicionar);


//Função para vincular 
function adicionar(e) {
    e.preventDefault();

    validacoes();
   
}

//Função de validação do nome, email, idade maior de 18.
function validacoes() {

    //calculo para saber se é de menor!
    let anoAtual = new Date();
    let userNasc = new Date(userDate.value);
    let resultado = anoAtual.getFullYear() - userNasc.getFullYear();
    //variavel com o RegExp
    let padrao = new RegExp(/.*@.*\..*/i);

    // condição nome do usuário e email
    if (userName.value == '' && userEmail.value =='') {
        //estilização da mensagem no campo nome
        divMsg_name.innerHTML = 'Por Favor, colocar o nome.';
        divMsg_name.style.fontSize = '16px';
        divMsg_name.style.color = 'red';
        divMsg_name.style.width = 'bold';
        setTimeout(() => divMsg_name.remove(), 4000);
        //estilização do campo email
        divMsg_email.innerHTML = 'Por favor, insira um e-mail.';
        divMsg_email.style.fontSize = '16px';
        divMsg_email.style.color = 'red';
        divMsg_email.style.width = 'bold';
        setTimeout(() => divMsg_email.remove(), 4000);

        //condição da idade do usuário
    } else if (resultado < 18) {
        alert('So aceitamos candidatos +18.');
        //limpa do formulario mediante a condição sendo verdadeira
        userName.value = '';
        userEmail.value = '';
        userDate.value = '';

        //condição da data de nascimento
    } else if (userDate.value == '') {
        divMsg_data.innerHTML = 'Por Favor, coloque sua data de nascimento.';
        divMsg_data.style.fontSize = '16px';
        divMsg_data.style.color = 'red';
        divMsg_data.style.width = 'bold';
        setTimeout(() => divMsg_data.remove(), 4000);

        //Condição para o email 
    } else if(!padrao.test(userEmail.value)) {

        divMsg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        divMsg_email.style.fontSize = '16px';
        divMsg_email.style.color = 'red';
        divMsg_email.style.width = 'bold';
        setTimeout(() => divMsg_email.remove(), 4000);
        
        //Texto da UL com as informções do candidato
    } else {
        let botaoExc = document.createElement('button');
        botaoExc.style.width = '6vw';
        botaoExc.style.height = '4vh';
        botaoExc.style.background = 'red';
        botaoExc.style.margin = '8px';
        botaoExc.innerText = 'Excluir';
        botaoExc.style.cursor = 'no-drop';
        let texto = document.createElement('li');
        texto.appendChild(document.createTextNode(`Nome: ${userName.value} - Email: ${userEmail.value} - Nascimento: ${userDate.value}`));
        dados.appendChild(texto);
        texto.appendChild(botaoExc);


        //evento de Excluir o usuário da lista 
        botaoExc.addEventListener('click', desfazer);

        function desfazer() {

            texto.remove();
            // botaoExc.remove();
            
        }
        //Limpando o formulário
        userName.value = '';
        userEmail.value = '';
        userDate.value = '';

    }
}










