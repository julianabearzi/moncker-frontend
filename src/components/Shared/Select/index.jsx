/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import './select.css';

const Select = ({ input, meta, label, options, options2 }) => {
  return (
    <div className="selectContainer">
      <label className="lbl">{label}</label>
      <NativeSelect className="sel" {...input}>
        {options2.map((option) => (
          <option key={option.id} value={option.value}>
            {option.id}
          </option>
        ))}
        {options &&
          options.map((option) => (
            <option key={option.asset_id} value={option.name}>
              {option.name}
            </option>
          ))}
      </NativeSelect>
      {meta.error && meta.touched && (
        <div className="selectError">{meta.error}</div>
      )}
    </div>
  );
};

export default Select;
