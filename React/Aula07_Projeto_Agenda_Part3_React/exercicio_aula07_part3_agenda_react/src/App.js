import { useState } from 'react';
import './App.css';
import Cabecalho from './Components/NewTasks';
import List from './Components/TasksOpen';

function App() {
    // funções para adicionar as tarefas e pegar seus respectivos valores
    const [tasks, getTask] = useState([]);

    const adicionarTask = (valorTexto) => {
        getTask([...tasks, valorTexto]);
    };

    // Função Splice para excluir as tarefas pela suas localizações dentro do array e passando um novo array para get Task
    const deletarTexto = (id) => {
        let tarefaNow = [...tasks];
        tarefaNow.splice(id, 1);

        getTask(terefaNow);
    };

    return (
        <div className="App">
            <Cabecalho save={adicionarTask} />
            <List apagando={deletarTexto} />
        </div>
    );
}

export default App;
