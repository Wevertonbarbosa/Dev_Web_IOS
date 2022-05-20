const alunos = [
    {nome: 'Ana', idade: 17, nota: 8, ano: '2°B'},
    {nome:'Bruno', idade: 16, nota:6, ano:'2°C' },
    {nome:'Veronica', idade: 16, nota:9, ano :'2°C'},
    {nome:'Marta', idade: 15  , nota:5, ano :'3°C'},
    {nome:'Brenno', idade: 19, nota:6, ano :'3°C'},
    {nome:'Maria', idade: 14, nota:4, ano :'1°F'}
]
alunos.forEach((nomes) => {  
console.log(`${nomes.nome}`);
})

// Filtro de Idades com Map 
const anos = alunos.map((age)=>{
    return age.idade
})
console.log(anos);

//função match O que eu definir ele irá buscar de uma forma mais enxuta
//MATCH = retorna um array inde se a expressão regular usar o marcador global g ou não: Se o regexp usa o marcador g , o método match() retorna um array que armazena todos os resultados correspondentes. O resultado não contém os grupos de captura.
console.log();
let turma2 = alunos.filter((turma)=>{
return turma.ano.match('2°')
});

turma2.forEach((i)=> console.log(i.nome));
