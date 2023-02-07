// import './style.css';
// /* eslint-disable consistent-return, no-useless-return,prefer-arrow-callback,no-else-return, no-shadow, no-unused-vars, camelcase, no-plusplus */
// import React from 'react';
// import { connect } from 'react-redux';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { BiCoinStack } from 'react-icons/bi';
// import Button from '../../Shared/Button';
// import CryptoItem from '../CryptoItem';

// const List = ({ coins }) => {
//   return (
//     <div>
//       <div className="cryptoHeading">
//         <h3 className="cryptoTitle">Crypto List</h3>
//         <BiCoinStack className="biCoin" size="30px" color="green" />
//       </div>
//       <Button btnLabel="All Cryptos">All Cryptos</Button>
//       <Button btnLabel="Favorites">Favorites</Button>
//       <Paper
//         className="cryptoList"
//         style={{
//           overflow: 'auto',
//           height: '70vh',
//           width: '70vw',
//           textAlign: 'center',
//           marginRight: '5rem',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Crypto Type</TableCell>
//               <TableCell>Price(usd)</TableCell>
//               <TableCell align="center">Add to favorite</TableCell>
//               <TableCell align="center">More info</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {coins
//               .filter(
//                 (coin) =>
//                   coin.asset_id === 'BTC' ||
//                   coin.asset_id === 'ETH' ||
//                   coin.asset_id === 'BNB' ||
//                   coin.asset_id === 'ADA' ||
//                   coin.asset_id === 'XRP' ||
//                   coin.asset_id === 'SOL' ||
//                   coin.asset_id === 'DOGE' ||
//                   coin.asset_id === 'DOT' ||
//                   coin.asset_id === 'SHIB'
//               )
//               // .slice(1, 11)
//               .map((coin) => {
//                 return (
//                   <CryptoItem
//                     key={coin.asset_id}
//                     assetId={coin.asset_id}
//                     coin={coin}
//                   />
//                 );
//               })}
//             {/* {coins
//               .sort((a, b) => {
//                 return b.volume_1day_usd - a.volume_1day_usd;
//               })
//               .slice(0, 20)
//               .map((coin) => {
//                 return <CryptoItem key={coin.asset_id} coin={coin} />;
//               })} */}
//             {/* {
//                 cryptoFilter.map((crypto)=>{
//                   return console.log(crypto.asset_id)
//                 })
//               } */}
//           </TableBody>
//         </Table>
//       </Paper>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   coins: state.coins.list,
// });

// export default connect(mapStateToProps, null)(List);
