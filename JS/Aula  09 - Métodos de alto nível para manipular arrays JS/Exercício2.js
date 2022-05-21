const alunos = [
    {nome: 'Ana', idade: 17, nota: 8, ano: '2°B'},
    {nome:'Bruno', idade: 16, nota:6, ano:'2°C' },
    {nome:'Veronica', idade: 16, nota:9, ano :'2°C'},
    {nome:'Marta', idade: 15  , nota:5, ano :'3°C'},
    {nome:'Brenno', idade: 19, nota:6, ano :'3°C'},
    {nome:'Maria', idade: 14, nota:4, ano :'1°F'}
];

console.log('Retorne somente o nome e o ano dos alunos:');
alunos.forEach((nomes) => {  
console.log(`Nome: ${nomes.nome}, Ano: ${nomes.ano}`);
})

//função match O que eu definir ele irá buscar de uma forma mais enxuta
//MATCH = retorna um array inde se a expressão regular usar o marcador global g ou não: Se o regexp usa o marcador g , o método match() retorna um array que armazena todos os resultados correspondentes. O resultado não contém os grupos de captura.
let turma2 = alunos.filter((turma)=>{
return turma.ano.match('2°')
});
console.log('Retorne apenas os alunos do segundo ano:');
turma2.forEach((i)=> console.log(i.nome));

//Método Reduce para calcular a média  
// O número 0 no final serve para iniciar a soma do 0 com o primeiro número que esteja dentro do meu objeto
let media = alunos.reduce ((recebe, atual)=> recebe + atual.nota / 6, 0);
console.log('Média dos Alunos:');
console.log(media.toPrecision(3));
console.log('Os alunos não atingiram a meta requerida!');