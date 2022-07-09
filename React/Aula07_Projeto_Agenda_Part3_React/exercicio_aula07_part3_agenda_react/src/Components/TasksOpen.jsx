import { FaToggleOff } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function TarefaOpen({taskAbertas, getTarefasAbertas, todasFechadas, closeFechadas}) {

    const retorna = taskAbertas.map((tasks) => {

        const deleteTarefas = () => {
            getTarefasAbertas(taskAbertas.filter((id) => tasks.id !== id.id));
        }

        const toogleOffEvent = () => {
            
            tasks.btnEventToogle = true;

            if(tasks.btnEventToogle === true) {
                
                closeFechadas.push(tasks);
                todasFechadas(closeFechadas);
                deleteTarefas();
            }
        }

        return (
            <li key={tasks.id}>
                {tasks.texto}
                <span>
                    <FaToggleOff onClick={toogleOffEvent} />
                    <BsXLg onClick={deleteTarefas} />
                </span>
            </li>

        ) 
    }) 
      
    return(
        <div className="tasksOpen">
            <h2>Tarefas Abertas</h2>
            <ul>{retorna}</ul>
        </div>
    )
}

export default TarefaOpen;
