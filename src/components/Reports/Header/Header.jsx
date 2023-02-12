import React from 'react'
import './index.css';
import Select   from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { CryptoState } from '../CryptoContext';


const Header = () => {

  const { currency, setCurrency } = CryptoState();

  console.log(currency)
  return (
    <div className='cointaner'>
        Header
        <Select 
          variant='outlined'
          style={{
            width:100,
            height:40,
            marginLeft:15
          }}
          value={currency}
          // onChange={(e)=> setCurrency(e.target.value)}
         onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="ARS">ARS</MenuItem>
        </Select>
    </div>
  )
}

export default Header