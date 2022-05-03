import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: '8px 4px 4px black',
    padding: '0px 30px 0px ',
    outline: 0,
  },
}));

const BasicModal = ({ show, closeModal, children }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal open={show} onClose={closeModal}>
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.modal.show,
    modalType: state.modal.modalType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicModal);
