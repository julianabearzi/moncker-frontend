import React, { useEffect } from 'react';

import './suscription.css';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userProfile as userProfileAction } from '../../redux/actions/profileActions';
import { getFavoriteCoins as getFavoriteCoinsAction } from '../../redux/actions/favoriteCoinsActions';
import Paypal from './Paypal/Paypal';
import Button from '../Shared/Button';

const Suscription = ({
  userProfile,
  id
}) => {
  useEffect(() => {
    userProfile();
  }, []);



  let navigate = useNavigate();
  function handleClickInc() {
    navigate('/profile');
  }

  return (
    <div className='suscContainer'>
       <div className='susForm'>
            <p>Moncker Suscription</p><br/>
            <p><Paypal id={id}/></p>
            <p>Advantages of being a premium user:</p>
            <ul>
                <li>Avoid advertising and spam.</li>
                <li>Exclusivity to new app releases.</li>
                <li>Weekly webmail with all the summarized information of the week.</li>
                <li>Access to all application functions.</li>
            </ul>
            <Button btnLabel="Back to Profile" onClick={() => handleClickInc()}>
              Back to Profile
            </Button>
       </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      userProfile: userProfileAction,
      getFavoriteCoins: getFavoriteCoinsAction,
    },
    dispatch
  );
};


const mapStateToProps = (state) => ({
  email: state.auth.email,
  createdAt: state.profile.createdAt,
  expenses: state.profile.expenses,
  income: state.profile.income,
  profile: state.profile,
  isLoading: state.isLoading,
  isPremium: state.profile.isPremium,
  id: state.profile.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(Suscription);
