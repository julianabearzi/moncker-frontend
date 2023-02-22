import ReactDOM from 'react-dom';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
import { userProfile as userProfileAction } from '../../../redux/actions/profileActions';
import { getFavoriteCoins as getFavoriteCoinsAction } from '../../../redux/actions/favoriteCoinsActions';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


const Paypal = ({
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



  const createOrder = (data, actions)  => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "9.99",
          },
        },
      ],
    });
  }

  
  const updateUserPremiumStatus = () => {
    const miToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjY4NTU1N2FiZTc0NGNkMDcxMGY1ZTEiLCJlbWFpbCI6Imp1bGlldGFkMjk5QGdtYWlsLmNvbSIsImlhdCI6MTY3NjQxNjY3NiwiZXhwIjoxNjc3NzEyNjc2fQ.FWxnIMugBrj36Uo1ShosVN0IF9UUSPEOeLODS11daRc';

    const config = {
      headers: { Authorization: `${miToken}` }
    };

      const apiUrl = `http://localhost:5000/api/users/${id}`;
      const data = {isPremium:'true'};
      setTimeout(() => {
        axios.put(apiUrl, data,config)
        .then(response => {
          console.log('User premium status updated successfully:', response.data);
          console.log(apiUrl)
        })
        .catch(error => {
          console.error('Error updating user premium status:', error);
          console.log(apiUrl)
        });
      }, 2000);
  }

  const onApprove = (data, actions) => {
    swal({
        title: "Good job!",
        text: "Your suscription in Moncker App is renewed!",
        icon: "success",
        button: "Ok!",
      });
      updateUserPremiumStatus()
      setTimeout(() => {
        handleClickInc()
      }, 2500);
    return actions.order.capture();
  }

return (
    <PayPalButton
    createOrder={(data, actions) => createOrder(data, actions)}
    onApprove={(data, actions) => onApprove(data, actions)}
  />)
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Paypal);
