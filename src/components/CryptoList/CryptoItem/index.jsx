import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { connect } from 'react-redux';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const CryptoItem = ({ coin }) => {
  const { name } = coin;
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>
        <MdOutlineFavoriteBorder
          size="25px"
          color="black"
          cursor="pointer"
          onClick={({ target }) => (target.style.color = 'red')}
        />
      </TableCell>
    </TableRow>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.list,
  userId: state.auth._id,
});

export default connect(mapStateToProps, null)(CryptoItem);
