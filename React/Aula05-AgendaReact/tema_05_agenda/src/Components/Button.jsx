import PropTypes from 'prop-types';

const Button = ({ bgColor, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: bgColor }}
            className="btn">
            {text}
        </button>
    );
};

// Caso não haja nenhuma aplicação no BGcolor por padrão sera aplicado a cor steelblue 
Button.defaultProps = {
    bgColor: 'steelblue',
};
//Validação do botão.
Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
