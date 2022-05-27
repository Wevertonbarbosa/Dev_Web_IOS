class Pessoa {
    constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    }

    
}

let pessoas = new Array(10)
pessoas[0] = new Pessoa ('Weverton');
pessoas[1] = new Pessoa ('Luiz');
pessoas[2] = new Pessoa ('Pablo');
pessoas[3] = new Pessoa ('Ronaldo');
pessoas[4] = new Pessoa ('Bruno');
pessoas[5] = new Pessoa ( 'Mario');
pessoas[6] = new Pessoa ('Rivelino');
pessoas[7] = new Pessoa ('Silviano');
pessoas[8] = new Pessoa ('Daniel');
pessoas[9] = new Pessoa ('Billy');

let datas = new Array (10)
datas[0] = new Pessoa('2000 06 04');
datas[1] = new Pessoa('2002 07 30');
datas[2] = new Pessoa('1999 05 18');
datas[3] = new Pessoa('2005 03 20');
datas[4] = new Pessoa('2000 08 15');
datas[5] = new Pessoa('2005 07 25');
datas[6] = new Pessoa('1998 05 01');
datas[7] = new Pessoa('2007 08 27');
datas[8] = new Pessoa('1995 10 05');
datas[9] = new Pessoa('2001 11 29');






// let calculo = pessoas[0].dataNascimento
// let separador = calculo.split(' ')




let data = new Date();
let idade = data.getFullYear();

let receber = datas.filter((i)=>{
    i.match('20')
});

console.log(receber);


