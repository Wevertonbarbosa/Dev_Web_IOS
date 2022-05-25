//trazendo todos as class e Id DO HTML
const todo_formulario = document.querySelector('.meuform');
const nome_form = document.querySelector('#name');
const email_form = document.querySelector('#email');
const user_email = document.querySelector('.resposta_email');
const nascimento = document.querySelector('#dataNasc');
const final = document.querySelector('#end_line');
const mensagens = document.querySelector('.mensagem');

// Método addEventListene Quando o usuário interagir
todo_formulario.addEventListene('submit', clicando);

function clicando(e) {
    e.preventDefault();

    if (nome_form.value === '' || email_form.value === '') {

        mensagens.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => mensagens.remove(), 3000);
    
} else {
    const li = document.createElement('li');
    li.appendChild(
    document.createTextNode(`${nome_form.value} : ${email_form.value} : ${nascimento.value}`)
    );
    userList.appendChild(li);
    // Limpando o formulário
    final.value = '';
    email_form.value = '';
    nascimento.getElementsByTagName('option')[0].selected = 'selected';
    nome_form.focus();
}
};
