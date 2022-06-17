import { useState } from 'react';

const Aluno = () => {

    const [nome1] = useState('Eric de Oliveira');

    return (
        <div>
            <h1>{nome1}</h1>
        </div>
    )
}

export default Aluno