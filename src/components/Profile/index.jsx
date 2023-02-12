import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FiUser } from 'react-icons/fi';
import { FaDollarSign } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import calTransaction from '../../utils/statistics';
import subtract from '../../utils/subtraction';
import DataGraph from './DataGraph';
import UserProfileStats from './UserProfileStats';
import { userProfile as userProfileAction } from '../../redux/actions/profileActions';
import { getFavoriteCoins as getFavoriteCoinsAction } from '../../redux/actions/favoriteCoinsActions';
import './profile.css';

const Profile = ({
  email,
  expenses,
  income,
  userProfile,
  profile,
  getFavoriteCoins,
  userId,
}) => {
  const [expResult, setExpResult] = useState([]);
  const [incResult, setIncResult] = useState([]);
  const [balanceResult, setBalanceResult] = useState([]);
  const [valorUsdBlue, setDolarBlue] = useState([]);
  const [valorBtc, setBtcValue] = useState([]);
  // const baseUrl = "https://api-dolar-argentina.herokuapp.com/api/dolarblue";
  const baseUrl = 'https://api.bluelytics.com.ar/v2/latest';
  const baseUrlBtc = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  useEffect(() => {
    getFavoriteCoins(userId);
    let isMounted = true;
    fetch(baseUrl)
      .then((res) => res.json())
      .then((blue) => {
        if (isMounted) {
          setDolarBlue([blue.blue.value_avg]);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    fetch(baseUrlBtc)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setBtcValue([data.bpi.USD.rate_float]);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    userProfile();
  }, []);

  useEffect(() => {
    if (profile?.expenses) {
      const expensesSum = calTransaction(profile?.expenses);
      setExpResult(expensesSum);
    }
    if (profile?.income) {
      const incomeSum = calTransaction(profile?.income);
      setIncResult(incomeSum);
    }
    if (profile?.income && profile?.expenses) {
      const expSum = calTransaction(profile?.expenses);
      const incSum = calTransaction(profile?.income);
      const calcBalance = subtract(incSum.sumTotal, expSum.sumTotal);
      setBalanceResult(calcBalance);
    }
  }, [profile?.income]);
  let navigate = useNavigate();
  function handleClickExp() {
    navigate('/expenses');
  }
  function handleClickInc() {
    navigate('/income');
  }
  return (
    <div>
      <div className="profileContainer">
        <div className="profileContainerUp">
          <div className="profileContainerUpLeft">
            <div className="dataUserContainer">
              <h5>Profile</h5>
              <Chip
                sx={{
                  color: 'white',
                }}
                label={email}
                avatar={
                  <Avatar
                    sx={{
                      textTransform: 'uppercase',
                    }}
                  >
                    <FiUser
                      style={{
                        height: '20px',
                        width: '20px',
                      }}
                    />
                  </Avatar>
                }
              />
            </div>
            <div className="balanceContainer">
              <h2>Balances</h2>
              <p className="profileTitle">
                Ars
                <FaDollarSign
                  style={{
                    height: '20px',
                    width: '20px',
                    color: 'greenyellow',
                  }}
                />{' '}
                {valorUsdBlue.length > 0 ? (
                  balanceResult?.subTotal
                ) : (
                  <CircularProgress />
                )}
              </p>
              <p className="profileTitle">
                usd
                <FaDollarSign
                  style={{
                    height: '20px',
                    width: '20px',
                    color: 'greenyellow',
                  }}
                />{' '}
                {valorUsdBlue.length > 0 ? (
                  (balanceResult.subTotal / valorUsdBlue).toFixed(2)
                ) : (
                  <CircularProgress />
                )}
              </p>
              <p className="profileTitle">
                btc
                <FaDollarSign
                  style={{
                    height: '20px',
                    width: '20px',
                    color: 'greenyellow',
                  }}
                />{' '}
                {valorUsdBlue.length > 0 ? (
                  (balanceResult.subTotal / valorUsdBlue / valorBtc).toFixed(5)
                ) : (
                  <CircularProgress />
                )}
              </p>
            </div>
          </div>
          <div className="transactionsContainer">
            <h2 className="profileTitle">Transactions</h2>
            <DataGraph
              income={incResult?.sumTotal}
              expenses={expResult?.sumTotal}
            />
          </div>
        </div>
        <UserProfileStats
          numOfTransExp={expenses?.length}
          numOfTransInc={income?.length}
        />
        <div className="btnContainerProfile">
          <button
            className="customBtn btn1"
            onClick={handleClickExp}
            type="button"
          >
            <span>Expenses History</span>
          </button>
          <button
            className="customBtn btn1"
            type="button"
            onClick={handleClickInc}
          >
            <span>Income History</span>
          </button>
          asd
          <div id='susc' className='suscription'>
          <p>Your subscription expired {daysSinceCreatedAt(date)-21} days ago</p>
          To renew click  <button onClick={suscriptionClick} >here</button>
          </div>
        </div>
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
  isLoading: state.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
