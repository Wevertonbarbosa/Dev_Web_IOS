let colaboradores = [
{

   nome: 'Rivelino',
   salario: 2.500,
   vinculo: 'CLT'

},

{

    nome: 'Mario',
    salario: 1.500,
    vinculo: 'CLT'

},

{

    nome: 'José',
    salario: 3.200,
    vinculo: 'CLT'


},
{

    nome: 'Daniel',
    salario: 2.150,
    vinculo: 'PJ'

},

{

    nome: 'Robinho',
    salario: 1.100,
    vinculo: 'PJ'


}
]

//Filtro do Vínculo através do IF e Else
if (colaboradores[0].vinculo == 'CLT', colaboradores[0].salario <= 1.220){

    console.log(`É CLT, seu nome: ${colaboradores[0].nome} e seu salário é ${colaboradores[0].salario}`);
}
else {
    console.log(`É PJ, seu nome: ${colaboradores[0].nome}`)
} 

if (colaboradores[1].vinculo == 'CLT'){
    console.log(`É CLT, seu nome: ${colaboradores[1].nome}`);
}
else {
    console.log(`É PJ, seu nome: ${colaboradores[1].nome}`)
} 

if (colaboradores[2].vinculo == 'CLT'){
    console.log(`É CLT, seu nome: ${colaboradores[2].nome}`);
}
else {
    console.log(`É PJ, seu nome: ${colaboradores[2].nome}`)
} 

if (colaboradores[3].vinculo == 'CLT'){
    console.log(`É CLT, seu nome: ${colaboradores[3].nome}`);
}
else {
    console.log(`É PJ, seu nome: ${colaboradores[3].nome}`)
} 

if (colaboradores[4].vinculo == 'CLT'){
    console.log(`É CLT, seu nome: ${colaboradores[4].nome}`);
}
else {
    console.log(`É PJ, seu nome: ${colaboradores[4].nome}`)
} 



if (colaboradores[0].salario <= 1.212){
    console.log(`Este é o Desconto ${colaboradores[0].salario * (7.5 / 100)}`)
}
else {
    console.log('')
}

if (colaboradores[0].salario >= 1.212){
    console.log(`Este é o Desconto ${colaboradores[0].salario * (9.0 / 100)}`)
}
else {
    console.log()
}

if (colaboradores[0].salario >= 2.427){
    console.log(`Este é o Desconto ${colaboradores[0].salario * (9.0 / 100)}`)
}
else {
    console.log()
}   




// else if (colaboradores[0].salario >= 2.427){
//     console.log(`Este é o Desconto ${colaboradores[0].salario * (12.0 / 100)}`)
// }
// else if(colaboradores[0].salario >= 3.641){
//     console.log(`Este é o Desconto ${colaboradores[0].salario * (14.0 / 100)}`)
// }












// let contratos = [
//     colaboradores[0].vinculo == 'CLT' ? console.log (`É CLT - ${colaboradores[0].nome}`) : console.log ('É PJ'),
//     colaboradores[1].vinculo == 'CLT' ? console.log ('É CLT') : console.log ('É PJ'), 
//     colaboradores[2].vinculo == 'CLT' ? console.log ('É CLT') : console.log ('É PJ'),
//     colaboradores[3].vinculo == 'CLT' ? console.log ('É CLT') : console.log ('É PJ'),
//     colaboradores[4].vinculo == 'CLT' ? console.log ('É CLT') : console.log ('É PJ')
// ]