/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import TextField from '@mui/material/TextField';
import './textinput.css';

const TextInput = ({ input, label, placeholder, meta, size, type, id }) => {
  return (
    <div className="inputContainer">
      <label className="inputLabel">{label}</label>
      <TextField
        type={type}
        id={id}
        {...input}
        size={size}
        variant="standard"
        placeholder={placeholder}
        className="inputField"
      />
      {meta.error && meta.touched && (
        <div className="inputError">{meta.error}</div>
      )}
    </div>
  );
};

export default TextInput;
