import React from 'react';
import './register.css';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';

const Register = () => {
  return( 
    <div className="container">
          <div className="registerBox">
            <h1>Register</h1>
            <FormControl>
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
            <br/>
            <Button variant="contained" margin="dense" >Register</Button>
            <br/>
            <Button variant="outlined" color="error">Cancel</Button>
            </FormControl>
          </div>
    </div>
    )
};

export default Register;
