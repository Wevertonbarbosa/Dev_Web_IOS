let alunos = [

 { 
    nome: 'João',
    sobrenome: 'Silva',
    idade: '17',
    serie: '2',
    ensino: 'Médio',
    turma: 'A',
    notas: [8,7,10],
    endereco: ['Rua 2, Jardim B']
},

{
    nome: 'Daniel',
    sobrenome: 'Bolos',
    idade: '15',
    serie: '1',
    ensino: 'Médio',
    turma: 'D',
    notas: [5,6,9],
    endereco: ['Rua palmeiras, Jardim divineia']
},

{
    nome: 'Riquelme',
    sobrenome: 'Andares',
    idade: '14',
    serie: '1',
    ensino: 'Fundamental',
    turma: 'Q',
    notas: [9,10,7],
    endereco: ['Rua gato, Jardim Vista Alegre']
},
]

let media = [
    (alunos[0].notas[0] + alunos[0].notas[1] + alunos[0].notas[2]) / 3,
    (alunos[1].notas[0] + alunos[1].notas[1] + alunos[1].notas[2]) / 3,
    (alunos[2].notas[0] + alunos[2].notas[1] + alunos[2].notas[2]) / 3
] 
console.log(`Aluno(a) ${alunos[0].nome} com notas ${alunos[0].notas} mora na ${alunos[0].endereco} teve a média ${media[0].toFixed(2)} portando foi (Aprovado)` );
console.log(`Aluno(a) ${alunos[1].nome} com notas ${alunos[1].notas} mora na ${alunos[1].endereco} teve a média ${media[1].toFixed(2)} portando foi (Reprovado)` );
console.log(`Aluno(a) ${alunos[2].nome} com notas ${alunos[2].notas} mora na ${alunos[2].endereco} teve a média ${media[2].toFixed(2)} portando foi (Aprovado)` );


