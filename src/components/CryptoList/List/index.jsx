import './style.css';
import React from 'react';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BiCoinStack } from 'react-icons/bi';
import CryptoItem from '../CryptoItem';

const List = ({ coins }) => {
  return (
    <div>
      <div className="cryptoHeading">
        <h3 className="cryptoTitle">Crypto List</h3>
        <BiCoinStack className="biCoin" size="30px" color="green" />
      </div>
      <Paper
        className="cryptoList"
        style={{
          overflow: 'auto',
          height: '70vh',
          width: '70vw',
          textAlign: 'center',
          marginRight: '5rem',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Crypto Type</TableCell>
              <TableCell>Add to favorite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins
              .sort((a, b) => {
                return b.volume_1day_usd - a.volume_1day_usd;
              })
              .slice(0, 20)
              .map((coin) => {
                return <CryptoItem key={coin.asset_id} coin={coin} />;
              })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  coins: state.coins.list,
});

export default connect(mapStateToProps, null)(List);
