import { useState } from 'react';

const Cabecalho = (props) => {
    const { save } = props;

    const [texto, getTexto] = useState('');

    return (
        <header>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={texto || ''}
                    onChange={(e) => getTexto(e.currentTarget.value)}
                />
                <button
                    onClick={() => {
                        getTexto('');
                        save(texto);
                    }}
                >
                    Adicionar Tarefas
                </button>
            </form>
        </header>
    );
};

export default Cabecalho;
