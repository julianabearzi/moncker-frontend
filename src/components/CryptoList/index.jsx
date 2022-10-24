import './style.css';
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../Layout/MenuBar/index';
import List from './List';
import { getCoins as getCoinsAction } from '../../redux/actions/coinsActions';


const CryptoList = ({ getCoins, coins }) => {
  useEffect(() => {
    getCoins();
  }, []);
  return (
    <div className="listContainer">
      <Menu />
      <List coins={coins} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCoins: getCoinsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  coins: state.coins.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList);
