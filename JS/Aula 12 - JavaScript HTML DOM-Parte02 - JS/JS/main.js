// Métedo  get  Element   By  Id
//         Pega Elemento pelo Id  

let titulo = document.getElementById('titulo');
//InnerHTML (Inserir algo dentro do HTML)
titulo.innerHTML = 'Vai perder o PC Galera do AWS!';

//Configurar o Style do Texto 
titulo.style.textAlign = 'center';
titulo.style.background = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

//Método  get   Elements   By  Class Name
//       pegar  Elementos pela Clase Nome

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Eric e Jheniffer trombadinhas de PC';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
// items[1].style.padding = '.5rem';

//Utilizando o FOR para percorrer a lista e estilizando atraves de um Loop
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#CCCCC9';
    items[i].style.fontWeight = 'bold';
}

// Método get    Elements   By    Tag Name
//        pegar  elementos pela   TAG Name

let li = document.getElementsByTagName('li');
console.log(li);

//Utilizando O incremento (+=2) isto pega todos os numéros pares mediante a lógica pois está aplicando a estilização de 2 em 2
for (let i = 0; i < li.length; i+=2) {
    li[i].style.backgroundColor = 'pink'
}

//Método get  Elements   By  Name
//       pega Elementos pelo name

let nome = document.getElementsByName('fitem')
console.clear();
console.log(nome);
nome[0].textContent = 'Pose de quebrada';
nome[0].style.backgroundColor = '#BAC1f8';
nome[1].style.textContent = 'RECEBAA';
nome[1].style.backgroundColor = 'yellow';


// Remover Contéudo
let item2 = document.getElementById('item2');
item2.remove();

//Inserir um Valor
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);


//Alterar Estilo da Lista
let ul = document.getElementById('items');
ul.style.listStyle = 'none';
ul.style.listStyle = 'decimal inside'

//acessando apenas um elemento pai mediante uma situação que tenho 2 ou mais PAI
let teste = document.getElementById('items');
let teste1 = teste.getElementsByTagName('li');
console.log(teste1);