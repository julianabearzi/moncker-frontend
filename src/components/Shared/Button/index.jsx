import React from 'react';
import './button.css';

const Button = ({ type, onClick, disabled, btnLabel }) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className="buttonShared"
      disabled={disabled}
      onClick={onClick}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
