import React, { useEffect } from 'react';

import { TiTimesOutline, TiEdit } from 'react-icons/ti';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
// import useDateFormatter from '../../../hooks/useDateFormatter';
import modalTypes from '../../../redux/types/modalTypes';
import { showModal as showModalAction } from '../../../redux/actions/modalActions';

const SponsorsItem = ({ spon, showModal }) => {
  useEffect(() => {
    console.log(spon);
  }, []);
  const { _id, name, phone, email, image } = spon;

  const showDeleteModal = (sponsorId) => {
    showModal(modalTypes.DELETE_SPONSORS, {
      id: sponsorId,
    });
  };

  const showUpdateModal = () => {
    showModal(modalTypes.UPDATE_SPONSORS, {
      spon,
    });
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <img alt="img" src={image} />
      </TableCell>
      <TableCell>
        <TiTimesOutline
          style={{
            cursor: 'pointer',
            width: '30px',
            height: '30px',
            color: 'seagreen',
          }}
          onClick={() => showDeleteModal(_id)}
        />
        <TiEdit
          style={{
            cursor: 'pointer',
            width: '30px',
            height: '30px',
            color: 'seagreen',
            marginBottom: '0.1rem',
          }}
          onClick={() => showUpdateModal(spon)}
        />
      </TableCell>
    </TableRow>
  );
};

SponsorsItem.propTypes = {
  spon: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SponsorsItem);
