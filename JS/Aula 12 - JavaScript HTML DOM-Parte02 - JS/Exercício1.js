
//Estilização H1
let myh1 = document.getElementById('inicial');
myh1.style.textAlign = 'center';
myh1.style.fontSize = '40 px';
myh1.style.borderBottom = 'solid 4px black';
myh1.style.color = '#c0c0c0';

//Trouxe meus botões
let mybtn = document.getElementsByClassName('B_12');
//criando um laço de repetição para percorrer todos os botões e inserir estilos neles 
for(i=0; i < mybtn.length; i++) {
    mybtn[i].style.border = 'solid 2px #D9BC66';
    mybtn[i].style.background  = '#BFBFBF';
    mybtn[i].style.margin = '.7rem';
    mybtn[i].style.padding = '.5rem';
}

const cor_img = () => {
    // inserir a imagem na body!
    let imgcolar = document.createElement('img');
    document.body.appendChild(imgcolar);
    // coloquei a imagem da Umbrella Academy estilizei
    imgcolar.src = "https://tm.ibxk.com.br/2022/03/14/14083357959018.jpg";
    imgcolar.style.borderRadius = '50px';
    //Mudando a cor da Body
    document.body.style.background =' #262525';

};

const informacao = () => {
    //criando o prompt
    let msg = prompt ('     Bem Vindo!\n Por favor Insira o seu nome.');
   
    //pegando o nome do usuário e inserindo na tela e estilizando
    let text = document.createElement ('h4');
    text.innerHTML = `Olá ${msg}, Bem-vindo a nossa academia!`;
    document.body.appendChild (text);
    text.style.textAlign = 'center';
    text.style.color = '#c0c0c0';
    text.style.fontSize = '20px';

};

const tabela = () => {
    //Criação do prompt
    let tab = Number(prompt ('Insera um número para a tabela.'));
   
    // Pegando a informação do Prompt e operando a tabela.
    let n = 0
    if (tab === Number) {
        while (n < 10) {
            let tudo = tab * n
            console.log(`${tab} X ${n} = ${tudo}`);
            n++
        }

    } else {
        console.log('Você não inseriu um número \n Por favor insira um número.');
    }
    
};

