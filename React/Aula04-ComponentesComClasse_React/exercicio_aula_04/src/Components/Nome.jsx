import { useState } from 'react';

const Aluno = () => {

    const [nome1] = useState('Eric de Oliveira');

    return (
        <div id='aluno'>
            <h1 id='nomeAluno'>{nome1}</h1>
        </div>
    )
}

export default Aluno