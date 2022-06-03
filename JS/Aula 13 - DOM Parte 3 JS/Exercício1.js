
//Estilização H1 de inicio
let myh1 = document.querySelector('#inicial');
myh1.style.textAlign = 'center';
myh1.style.fontSize = '40 px';
myh1.style.borderBottom = 'solid 4px #c0c0c0';
myh1.style.color = '#c0c0c0';

//Trouxe meus botões
let mybtn = document.querySelectorAll('.B_12');
let apagando = document.querySelector('#B_04');

//criando um laço de repetição para percorrer todos os botões e inserir estilos neles 
for(i=0; i < mybtn.length; i++) {
    mybtn[i].style.border = 'solid 2px #D9BC66';
    mybtn[i].style.background  = '#BFBFBF';
    mybtn[i].style.margin = '.7rem';
    mybtn[i].style.padding = '.5rem';
}

// inserir a imagem na body!
let imgcolar = document.createElement('img');
//Criando uma função no evento onclick cor_img (o que vai acontecer logo depois de clicar no botão)
const cor_img = () => {
    
    document.body.appendChild(imgcolar);
    // coloquei a imagem da Umbrella Academy estilizei
    imgcolar.src = "https://tm.ibxk.com.br/2022/03/14/14083357959018.jpg";
    imgcolar.style.borderRadius = '50px';
    //Mudando a cor da Body
    document.body.style.background =' #262525';

};


let text = document.createElement ('h4');
let divTabela = document.createElement ('div');
document.body.appendChild (divTabela);

//Criando uma função no evento onclick informacao (o que vai acontecer logo depois de clicar no botão)
const informacao = () => {
    //criando o prompt
    let msg = prompt ('     Bem Vindo!\n Por favor Insira o seu nome.');
    //pegando o nome do usuário e inserindo na tela e estilizando
    text.innerHTML = `Olá ${msg}, Bem-vindo a nossa academia!`;
    document.body.appendChild (text);
    text.style.textAlign = 'center';
    text.style.color = '#c0c0c0';
    text.style.fontSize = '20px';

};


let letras = document.createElement ('h1');

//Criando uma função no evento onclick tabela (o que vai acontecer logo depois de clicar no botão)
const tabela = () => {
    //Criação do prompt
    let tab = prompt('Insira um número para a tabuada.');

    // Pegando a informação do Prompt e operando a tabela.
    let n = 0

    //A função isNaN() determina se o valor é NaN ou não
    if (isNaN(tab)) {
   
    } else {

        //H1 da tabuada 
        
            letras.innerHTML = `Tabuada do ${tab}`;
            document.body.appendChild (letras);
            letras.style.display = 'flex';
            letras.style.fontSize = '30px';
            letras.style.borderBottom = 'solid 3px #c0c0c0';
            letras.style.margin = '10px 39vw';
            letras.style.color = '#c0c0c0';
            letras.style.width = '20vw';
            letras.style.justifyContent = 'center';

            //Campo da Tabuada com h4
        while (n <= 10) {
            let tudo = tab * n;
            let tabuada = document.createElement('h4');
            tabuada.innerHTML = `${tab} x ${n} = ${tudo}`;
            tabuada.style.textAlign = 'center';
            tabuada.style.fontSize = '25px';
            tabuada.style.color = '#c0c0c0';
            tabuada.style.margin = '14px';
            document.body.appendChild (tabuada);
            n++
    }
}
};

//Função para resetar a pagina Utilizando Remove 
const reset = () => {
    imgcolar.remove();
    text.remove();
    letras.remove();
    document.body.style.background = 'white';
    divTabela.remove();
    
};

apagando.addEventListener('click', reset);