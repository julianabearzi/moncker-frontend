import './style.css';
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../Layout/MenuBar/index';
import List from './List';
import { getCoins as getCoinsAction } from '../../redux/actions/coinsActions';
import { getFavoriteCoins as getFavoriteCoinsAction } from '../../redux/actions/favoriteCoinsActions';

const CryptoList = ({
  getCoins,
  coins,
  getFavoriteCoins,
  userId,
  favorites,
}) => {
  useEffect(() => {
    getFavoriteCoins(userId);
    getCoins();
    console.log(favorites);
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
      getFavoriteCoins: getFavoriteCoinsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  coins: state.coins.list,
  userId: state.auth._id,
  favorites: state.favorites.list.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList);
