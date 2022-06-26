
const Cabecalho = () => {
   
    const [inputValue, setInputValue] = useState();


    const valueInput = (e) => {
        getInputValue(e.target.value);
    }


    return (
        <header>
            <h1>Lista de Tarefas</h1>

            <input type="text" onChange={valueInput}/>
            <button >Adicionar Tarefas</button>
        </header>
    );
};


export default Cabecalho