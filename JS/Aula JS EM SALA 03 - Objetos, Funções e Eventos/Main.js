//Função simples com Alert
function alertCookie() {
    alert('Você quer um cookie');
    console.log('Você quer um cookie');
};

//Uma variavél com alert e Arrow Function
const  alertSucesso = () => {
    alert('Mensagem gerada com sucesso');
    console.log('Mensagem gerada com sucesso');

};

//Um objeto com 5 propriedades e seus valores
const notebook = [
    {
        marca: 'Dell',
        memoria: '8G',
        cor: 'Branco',
        dono: 'Weverton', 
        preco: 20.000
    }
];
console.log(notebook);

//Uma função simples com return convertendo anos para dias!!
function diasanos (anos = 1, dias = 365) {
    return dias * anos
    
};
console.log(diasanos());