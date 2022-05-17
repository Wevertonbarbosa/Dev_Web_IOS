

// Função do método forEach: percorre sobre o Array e extrai as informações como o Id e o Texto dos objetos dentro do Array

//Método forEach com Arrays
const frutas = [
    'Maca', 'pera', 'Melancia'
]
frutas.forEach(minhaFuncao);

function minhaFuncao (index, item ) {
    console.log(`Elemento: ${item}`);
    console.log(`Indice: ${index}`);
    
}

//Método forEach com Arrow Function
const frutas2 = [
    'Maca', 'pera', 'Melancia'
]
frutas2.forEach((Index, item)=>{
    console.log(`Elemento: ${item}`);
    console.log(`Indice: ${Index}`);
})

//Método forEach com array de objetos
//Forma mais enxuta de escrever funções

const tarefas = [
    {
    id: 1,
    texto: 'Aqui vai um texto'
},
{
    id: 2,
    texto: 'Aqui vai  2 texto'
},

{
    id: 3,
    texto: 'Aqui vai  3 texto'
}
]

tarefas.forEach((teste) => console.log(teste.texto));

//Método Map 

const numeros =[
    16, 4, 9, 25
]
//Objeto Math serve com a funcionalidade de fazer calculos e logo depois do . sqrt é um metodo no caso utilizado sqrt faz o calculo em Raiz quadrado
// const newArray = numeros.map(Math.sqrt);

// console.log('Array antigo');
// console.log(numeros);
// console.log('Novo Array');
// console.log(newArray);

//Outro Exemplo de Map
const mapText = tarefas.map((valor)=>{
    return valor.texto
})
console.log(mapText);

//Método filter()
//Esse método retorna todas as ocorrencias de acordo com o filtro da função
const idade = [32, 15, 8, 98, 70]

let filtroIdade = idade.filter((idades)=> {
    return idades>= 18;

})

console.log(filtroIdade)

// Método find()
//Este Método retorna a primeira ocorrencia que encontrar
const meuArray = [
    {Nome: 'Diego', Idade: 12, Altura: 120, Sexo: 'Masculino'},
    {Nome: 'Jissara', Idade: 15, Altura: 170, Sexo: 'Feminino'},
    {Nome: 'Jheniffer', Idade: 70, Altura: 180, Sexo: 'Feminino'}
]

console.log(
    meuArray.filter((genero)=>{
    return genero.Sexo ==='Feminino'
    })
);