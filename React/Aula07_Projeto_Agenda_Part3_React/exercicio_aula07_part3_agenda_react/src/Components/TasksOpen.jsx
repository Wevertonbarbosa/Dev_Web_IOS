import { FaTimes } from 'react-icons/fa';

function List(props) {
    const { tasks } = props;

    return (
        <div>
            {tasks.map((tarefa, index => {
                return (
                    <div key={index}>
                        <span>{tarefa}</span>
                        <FaTimes  style={{ color: 'red', cursor: 'pointer' }} 
                        onClick ={() => props.deletarTexto(index)} />
                    </div>
                );
            })}
        </div>
    )

}
export default List;
