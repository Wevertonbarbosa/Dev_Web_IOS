const Todos = () => {
    return (

    <div className="corpo">
        <table>
            <tr>
                <th className="titulo" colSpan={2} rowSpan={9}>Boletim</th>
            </tr>

            <tr >
                <th className="subtitulo" >Bº</th>
                <th className="subtitulo">Notas</th>
            </tr>

            <tr>
                <td className="conteudo">Fisica</td>
                <td className="notas">7</td>
            </tr>

            <tr>
                <td className="conteudo">Biologia</td>
                <td className="notas">8</td>
            </tr>

            <tr>
                <td className="conteudo">Ingles</td>
                <td className="notas">5</td>
            </tr>

            <tr>
                <td className="conteudo">Matemática</td>
                <td className="notas">10</td>
            </tr>

            <tr>
                <th className="titulo" colSpan={2}>Média Final:</th>
            </tr>

            <tr >
                <th className="final" colSpan={2}>{(7 + 8 + 5 + 10) / 4}</th>
                
            </tr>

        </table>
    </div>
    )
};

export default Todos;
