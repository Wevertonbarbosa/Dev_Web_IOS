// JavaScript e DOM
// objeto document Visualizar no Console
console.log(document);

// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o título (document.title) ALTERA O TITULO DO ABA DO NAVEGADOR
document.title = 123;
// Criar um elemento <h1> (createElemen) cria um elemento de HTML
let heading = document.createElement('H1');
//Faz aparecer na tela WEB  
heading.innerHTML = 'Olá alunos!';
// localização da onde meu H1 deve aparecer (appendChild) = inclui um filho dentro de um elemento pai
document.body.appendChild(heading);
//estilização do meu H1 
heading.style.borderBottom = 'solid 3px #000';
