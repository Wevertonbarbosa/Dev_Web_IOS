// Método querySelector O querySelector acessa sempre a primeira ocorrência da TAG ou Class Ou ID Desejada
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

// Buscando a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML ='Mudei o texto aqui');

// Buscando somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

// Função chamada pelo evento onclick toda vez que é utilizado uma Arrow Function o codigo se torna uma função
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';};

// Método querySelectorAll ele retorna uma lista da tag desejada,  com isso não precisa ir de uma a uma para estilizar ou etc..  
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '3px';
    }
    console.log(listaLi);

    
    
// Busca por id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui!'));


// Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));

// Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));
