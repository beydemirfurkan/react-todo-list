import React from "react";
import PropTypes from 'prop-types';

const Button = ({ color, text, textColor, onClick }) => {

  return (
    <button onClick={onClick} className="btn" style={{ backgroundColor: color, color: textColor }}>
      {text}
    </button>
  );
};


Button.defaultProps = {
    text: 'Hello Btn',
    color: 'steelblue',
    textColor: 'white',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button;
