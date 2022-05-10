//Trabalhando Com Strings
//Concatenar

let exemplo1 = 10;
let exemplo2 = 2;
let string1 ='Aqui vai um texto';

console.log('O resultado da soma:'  + (exemplo1 + exemplo2));
console.log("O resultado da soma:"  + (exemplo1 + exemplo2));
console.log(`O resultado da soma:${exemplo1 + exemplo2}`);

//Método chatAt acessar um caracter da String
let string2 ='Aqui vai um texto';
console.log(string2.charAt(0)); 

//Tamanho de String
let string3 ='Aqui vai um texto';
console.log(string3.length);

//tranforma o texto em Maiúsculo "toUpperCase"
let string4 ='Aqui vai um texto';
console.log(string4.toUpperCase());

//transforma o texto em Minúsculo "toLowerCase"
let string5 ='Aqui vai um texto';
console.log(string5.toLowerCase());

//Método Substrings e Split
let string6 ='Mozilla';
console.log(string6.substring(0,2));

//Método Split
let string7 ='A Raposa é um animal esperto';
let string8 = string7.split(' ');
console.log(string8);

//Método replace substitui um pedaço específico da string por outra coisa que você desejar.
let string9 = 'Aqui vai um texto';
let string10 =  string9.replace('Aqui', 'Kauan');
console.log(string10);


//O método trim remove os espaços em branco do início de o final de uma string
let string11 = '    Aqui vai um texto';
console.log(string11);
console.log(string11.trim());

//métodos usados para buscar algo dentro da string

//String.indexOf(): esse método retorna o índice (posição) da primeira vez que um texto especificado entre os parênteses foi encontrado na string
let string12 = 'Aqui vai um texto';
console.log(string12.indexOf('Aqui'))

//String.lastIndexOf(): esse método retorna o índice da última ocorrência de um texto especificado entre os parênteses foi encontrado na string
let string13 = 'Aqui vai um texto Aqui';
console.log(string13.lastIndexOf('Aqui'));

//String.search(): esse método busca um valor específico e retorna a posição inicial desse valor na primeira vez que ele é encontrado. Semelhante ao indexOf()
console.log(string13.search('Aqui'));

//String.startsWith(): esse método verifica se a string inicia com um valor específico
console.log(string13.startsWith('A'));

//String.endsWith(): esse método verifica se a string termina com um valor específico 
console.log(string13.endsWith('i'));
console.log(string13.endsWith('.'));
console.log(string13.endsWith('I'));
