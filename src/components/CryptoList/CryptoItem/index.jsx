/* eslint-disable consistent-return,  import/no-duplicates, no-useless-return, no-else-return, no-shadow, no-unused-vars, camelcase, no-plusplus */
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdOutlineFavorite, MdInfo } from 'react-icons/md';
import { updateFavorites as updateFavoritesAction } from '../../../redux/actions/favoriteCoinsActions';
import { getFavoriteCoins as getFavoriteCoinsAction } from '../../../redux/actions/favoriteCoinsActions';

const CryptoItem = ({
  coin,
  updateFavorites,
  userId,
  favs,
  getFavoriteCoins,
}) => {
  const green = document.querySelectorAll('.blue').length;
  const links = [
    'https://bitcoin.org/es/',
    'https://xrpl.org/',
    'https://dogecoin.com/',
    'https://ethereum.org/en/',
    'https://www.binance.com/es-LA',
    'https://polkadot.network/',
    'https://cardano.org/',
    'https://solana.com/es',
    'https://shibatoken.com/',
  ];
  const { name, price_usd } = coin;
  const showLink = (name) => {
    if (name === 'Bitcoin') {
      return links[0];
    } else if (name === 'Ripple') {
      return links[1];
    } else if (name === 'DogeCoin') {
      return links[2];
    } else if (name === 'Ethereum') {
      return links[3];
    } else if (name === 'Binance Coin') {
      return links[4];
    } else if (name === 'Polkadot') {
      return links[5];
    } else if (name === 'Cardano') {
      return links[6];
    } else if (name === 'SOL') {
      return links[7];
    } else if (name === 'Shiba Inu') {
      return links[8];
    } else {
      return 'None';
    }
  };
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{price_usd.toFixed(4)}</TableCell>
      <TableCell align="center">
        <MdOutlineFavorite
          size="50px"
          color="#95D64A"
          cursor="pointer"
          onClick={({ target }) => {
            if (target.style.color === 'red') {
              for (let i = 0; i < favs.length; i++) {
                const element = favs[i];
                if (element === name) {
                  favs.splice(i, 1);
                  updateFavorites({ favorites: favs, _id: userId, id: userId });
                  target.style.color = '#95D64A';
                  return;
                }
              }
            } else {
              const newFav = favs.concat(name);
              target.style.color = 'red';
              updateFavorites({ favorites: newFav, _id: userId, id: userId });
              return;
            }
          }}
        />
      </TableCell>
      <TableCell align="center">
        <a href={showLink(name)} target="_blanck">
          <MdInfo size="35px" color="blue" />
        </a>
      </TableCell>
    </TableRow>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateFavorites: updateFavoritesAction,
      getFavoriteCoins: getFavoriteCoinsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  favs: state.favorites.list.favorites,
  userId: state.auth._id,
  isLoading: state.favorites.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(CryptoItem);
