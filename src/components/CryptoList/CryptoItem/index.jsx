/* eslint-disable consistent-return, no-useless-return, no-else-return, no-shadow, no-unused-vars, camelcase, no-plusplus */
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFavorite, MdInfo } from 'react-icons/md';

const CryptoItem = ({ coin }) => {
  const green = document.querySelectorAll('.blue').length;
  // let favorites = 0;
  // const favoritesCount = (favorites) => {
  //   if (favorites >= 3) {
  //     return alert('No podes agregar mas favoritos, pq no sos premium.');
  //   }
  //   return;
  // };
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
  console.log(name);
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
              target.style.color = '#95D64A';
              //   favorites -= 1;
              //   console.log('Favoritos: ', favorites);
              return;
            } else {
              target.style.color = 'red';
              // favorites++;
              //  favoritesCount(favorites);
              // console.log('Favoritos: ', favorites);
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

export default CryptoItem;
