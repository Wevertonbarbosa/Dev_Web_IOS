const Notas_todos = () => {
    <div>
        <table>
            <tr>
                <th colSpan={2}>Boletim</th>
            </tr>

            <tr>
                <th>B</th>
                <th>Notas</th>
            </tr>

            <tr>
                <td>Fisica</td>
                <td>7</td>
            </tr>

            <tr>
                <td>Biologia</td>
                <td>8</td>
            </tr>

            <tr>
                <td>Ingles</td>
                <td>5</td>
            </tr>

            <tr>
                <td>Matemática</td>
                <td>10</td>
            </tr>

            <tr>
                <th colSpan={2}>Média Final:</th>
            </tr>
            
            <tr><th colSpan={2}></th></tr>
        </table>
    </div>;
};

export default Notas_todos
