//Crie um array de objetos com quatros objetos e cada objeto tera 4 propriedades
//Retorne o Nome de Todos os Alunos
//retorne o nome de todos os alunos que tirou nota maior que 6
//retorne o primeiro aluno que tirou nota 5
//Utilize em todos os retornos com Arrow function

const escola = [
    {nome:'Roberto', idade: 20, curso: 'ADM', nota: 7 },
    {nome:'Luiz', idade: 22, curso: 'Ingles', nota: 10 },
    {nome:'Antonio', idade: 32, curso: 'Robótica', nota: 8 },
    {nome:'Antonieta', idade: 30, curso: 'Culinária', nota: 5 }
]

//Método forEach para trazer todos os nomes dos alunos
escola.forEach((TodosAlunos) => console.log(TodosAlunos.nome));


//Método Filter no Console Log
console.log(
    escola.filter((nome)=>{
    return nome.nota >= 6
    })
);
//Método Find no Console Log
console.log(
    escola.find((primeiro)=>{ 
    return primeiro.nota <= 5
    })
);