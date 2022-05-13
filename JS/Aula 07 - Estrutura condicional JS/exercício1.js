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

//Filtro do Vínculo
//Operador ternário 

if (colaboradores[0].vinculo == 'CLT'){
    console.log(`É CLT, seu nome: ${colaboradores[0].nome}`);
}
else {
    console.log(`É PJ, seu nome: ${colaboradores[0].nome}`)
}











// let contratos = [
//     colaboradores[0].vinculo == 'CLT' ? console.log (`É CLT - ${colaboradores[0].nome}`) : console.log ('É PJ'),
//     colaboradores[1].vinculo == 'CLT' ? console.log ('É CLT') : console.log ('É PJ'), 
//     colaboradores[2].vinculo == 'CLT' ? console.log ('É CLT') : console.log ('É PJ'),
//     colaboradores[3].vinculo == 'CLT' ? console.log ('É CLT') : console.log ('É PJ'),
//     colaboradores[4].vinculo == 'CLT' ? console.log ('É CLT') : console.log ('É PJ')
// ]