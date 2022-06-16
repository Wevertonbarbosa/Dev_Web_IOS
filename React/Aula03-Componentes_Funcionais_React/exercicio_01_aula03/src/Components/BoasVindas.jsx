import PropTypes from 'prop-types';

const estilizar = {color: 'green', textAlign: 'center'};

const Welcome = (props) => {

    return (
        <section>
            <h1 style={{textAlign: 'center', borderBottom: 'solid 2px black'}}> Hello my Friend</h1>
            <p style={estilizar}>my name is Weverton Lima Barbosa da Silva, welcome to my first React.Js application !</p>
        </section>

    )
};

Welcome.defaultProps = {
    nome: 'Nome padrão',
};

Welcome.propTypes = {
    nome: PropTypes.string,
};

export default Welcome;