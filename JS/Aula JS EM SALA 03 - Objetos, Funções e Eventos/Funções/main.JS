//Estrutura de uma função
/*
function NomDaFuncao (valor1, valor2){
    
    return valor1 * valor2


}
*/

//Funcoes
function addnums(num1 = 2, num2 = 5){
    return num1 + num2
}

const somaAddnums = (num1 = 2, num2 = 5) => {
    return num1 + num2
}

console.log (somaAddnums())

// console.log(addnums());

let x = addnums(10,11);
console.log(x)
console.clear();

// A sintaxe de uma arrow function
const hello = (primeiro = 2, segundo= 2) => {

    return  primeiro * segundo
}

console.log(hello())

console.clear();{

}

//Evento Onload para mostrar mensagem enquanto estiver carregando 
const boasVindas = () =>{
    alert('Bem vindo a nossa Pagina OTARIO');
    console.log('Bem vindo a nossa Pagina OTARIO');
}

function eventClick() {
    console.log('Você clicou aqui Otario')
}