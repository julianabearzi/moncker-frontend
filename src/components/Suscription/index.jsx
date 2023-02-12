import React from 'react';
import './suscription.css';
import { useNavigate } from 'react-router-dom';
import Paypal from './Paypal/Paypal';
import Button from '../Shared/Button';

const Suscription = () => {
  let navigate = useNavigate();
  function handleClickInc() {
    navigate('/profile');
  }

  return (
    <div className='suscContainer'>
       <div className='susForm'>
            <p>Moncker Suscription</p><br/>
            <p><Paypal/></p>
            <p>Advantages of being a premium user:</p>
            <ul>
                <li>Avoid advertising and spam.</li>
                <li>Exclusivity to new app releases.</li>
                <li>Weekly webmail with all the summarized information of the week.</li>
                <li>Access to all application functions.</li>
            </ul>
            <Button btnLabel="Back to Profile" onClick={() => handleClickInc()}>
            asd
            </Button>
       </div>
    </div>
  );
};

export default Suscription;
