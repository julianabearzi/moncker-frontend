/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import './select.css';

const Select = ({ input, meta, label, options }) => {
  return (
    <div className="selectContainer">
      <label className="lbl">{label}</label>
      <NativeSelect className="sel" {...input}>
        {options.map((option) => (
          <option key={option.asset_id} value={option.asset_id}>
            {option.asset_id}
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
