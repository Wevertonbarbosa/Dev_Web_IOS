class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }

    getIdade() {


        if (this.dataNascimento.getDate() != dias && mes > this.dataNascimento.getMonth())  {
            
            return anoCompletoAtual - this.dataNascimento.getFullYear();
    
        
        } else if (this.dataNascimento.getDate() == dias && mes ==this.dataNascimento.getMonth()) {
            
            return anoCompletoAtual - this.dataNascimento.getFullYear();

        } else if (this.dataNascimento.getDate() < dias && mes == this.dataNascimento.getMonth()){
            
            return anoCompletoAtual - this.dataNascimento.getFullYear();
        
        } else {
            
            return anoCompletoAtual - this.dataNascimento.getFullYear() - 1;
        }
        
    }


}


let ano = new Date();
let anoCompletoAtual = ano.getFullYear();

let pessoas = new Array(10);
pessoas[0] = new Pessoa('Weverton', '2000 06 04');
pessoas[1] = new Pessoa('Vitor', '2007 02 13');
pessoas[2] = new Pessoa('Rivelino', '2002 08 24');
pessoas[3] = new Pessoa('Thomas', '2001 03 14');
pessoas[4] = new Pessoa('Sireneu', '2003 02 20');
pessoas[5] = new Pessoa('Jatobá', '1999 07 16');
pessoas[6] = new Pessoa('Neuza', '2005 04 05');
pessoas[7] = new Pessoa('Marcinho', '2000 10 22');
pessoas[8] = new Pessoa('Kelly', '2001 05 17');
pessoas[9] = new Pessoa('Nilto', '2002 05 12');

let dias = ano.getDate();
let mes = ano.getMonth();




Pessoa.prototype.getNiver = function () {
    let retorno;

    if (this.dataNascimento.getDate() != dias && mes > this.dataNascimento.getMonth())  {
        retorno ='Já fez aniversário';
    
    } else if (this.dataNascimento.getDate()  == dias && mes == this.dataNascimento.getMonth()) {
        retorno ='Já fez aniversário';
    
    } else if (this.dataNascimento.getDate()  < dias && mes == this.dataNascimento.getMonth()){
        retorno ='Já fez aniversário';
    } else {
        retorno = 'Ainda não fez Aniversário';
    }
    return retorno;
};

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} tem ${pessoas[i].getIdade()} ${pessoas[i].getNiver()}`);
}






























// for (let i = 0; i < pessoas.length; i++) {
//     console.log(`${pessoas[i].nome} tem ${pessoas[i].getIdade()} e ${pessoas[i].getNiver()} fez aniversário esse ano`);;
// }



