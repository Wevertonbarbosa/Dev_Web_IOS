window.alert("Olá Professor");

document.title = 'Treino DOM';
let sessao = document.createElement('section');
sessao.innerHTML  
document.body.appendChild(sessao);

let titulo = document.createElement('H1');
titulo.innerHTML = 'DOM! java Script';
sessao.appendChild(titulo);
titulo.style.borderBottom = 'solid 4px #000';


let artigo = document.createElement('article');
sessao.innerHTML 
document.body.appendChild(artigo);

let titulo2 = document.createElement('h1');
titulo2.innerHTML = 'Muito bom estudar!'; 
artigo.appendChild(titulo2);
titulo2.style.fontSize = '20px';

let paragrafo = document.createElement('P');
paragrafo.innerHTML = 'Obrigado Professor Rafael';
artigo.appendChild(paragrafo);
titulo.style.borderBottom = 'solid 4px 	#000';
titulo.style.fontSize = '15px';



console.log(document);