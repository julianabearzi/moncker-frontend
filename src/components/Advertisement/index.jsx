// import React from 'react';
// import { connect } from 'react-redux';
// // import { bindActionCreators } from 'redux';

// const Advertisement = ({ sponsors }) => {
//   setAleatorio = () => {
//     let aleatorio = sponsors[Math.floor(Math.random() * sponsors.length)];
//     return aleatorio;
//   };
//   //   const [aleatorio, setAleatorio] = useState('');
//   //   const sponImg = sponsors[Math.floor(Math.random() * sponsors.length)];
//   //   setAleatorio(sponImg.image);
//   //   console.log(aleatorio);
//   return (
//     <div style={{ border: '2px solid red', width: '100px', height: '300px' }}>
//       {isLoading ? 'loading' : setAleatorio() && <p>{}</p>}
//     </div>
//   );
// };

// // const mapDispatchToProps = (dispatch) => {
// //   return bindActionCreators(
// //     {
// //       getSponsors: getSponsorsAction,
// //     },
// //     dispatch
// //   );
// // };

// const mapStateToProps = (state) => ({
//   isLoading: state.sponsors.isLoading,
// });

// export default connect(mapStateToProps, null)(Advertisement);
