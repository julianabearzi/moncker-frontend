import React from 'react';
import './register.css';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@material-ui/core';

const Register = () => {
  return( 
    <div className="container">
          <div className="registerBox">
            <h1>Register</h1>
            <FormControl sx={{ width: '50ch' }}>
            <TextField 
              id="outlined-basic" 
              label="Email" 
              variant="outlined"
              color="warning"
              margin="dense"
            />
             <TextField 
              id="outlined-basic" 
              label="Repeat Email" 
              variant="outlined"
              margin="dense" 
            />
             <TextField 
              id="outlined-basic" 
              label="Password" 
              variant="outlined"
              margin="dense" 
            />
            </FormControl>
          </div>
    </div>
    )
};

export default Register;
