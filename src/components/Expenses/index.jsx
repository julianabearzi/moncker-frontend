/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearProgress from '@mui/material/LinearProgress';
import { userProfile as userProfileAction } from '../../redux/actions/profileActions';
import { showModal as showModalAction } from '../../redux/actions/modalActions';
import Button from '../Shared/Button';
import modalTypes from '../../redux/types/modalTypes';
import ExpensesList from './ExpensesList';
import ExpensesForm from './ExpensesForm';
import ConfirmationMessage from './ExpConfirmationMessage';
import Modal from '../Shared/Modal';
import './expensesDashboard.css';

const Expenses = ({
  isLoading,
  showModal,
  modalType,
  userProfile,
  expenses,
  meta,
  sponsors,
  isPremium,
  createdAt,
}) => {
  const [imgSponsor, setImgSponsor] = useState('');
  const [imgSponsorTwo, setImgSponsorTwo] = useState('');
  const [imgSponsorThree, setImgSponsorThree] = useState('');
  function calcularDiasPasados(fecha) {
    const fechaDada = new Date(fecha);
    const fechaActual = new Date();
    const diferenciaMilisegundos = fechaActual.getTime() - fechaDada.getTime();
    const diasPasados = Math.round(diferenciaMilisegundos / 86400000);
    return diasPasados;
  }

  useEffect(() => {
    userProfile();
    let aleatorio = sponsors[Math.floor(Math.random() * sponsors.length)];
    const { image } = aleatorio;
    const img = image;
    setImgSponsor(img);
  }, []);
  useEffect(() => {
    let aleatorioTwo = sponsors[Math.floor(Math.random() * sponsors.length)];
    const { image } = aleatorioTwo;
    const imgTwo = image;
    setImgSponsorTwo(imgTwo);
  }, []);
  useEffect(() => {
    let aleatorioThree = sponsors[Math.floor(Math.random() * sponsors.length)];
    const { image } = aleatorioThree;
    const imgThree = image;
    setImgSponsorThree(imgThree);
  }, []);

  const showAddModal = () => {
    showModal(modalTypes.ADD_EXPENSES);
  };

  return (
    <div className="wrapperExp">
      {isLoading ? (
        <LinearProgress color="success" />
      ) : (
        <div className="expensesContainer">
          <Modal>
            {modalType === 'ADD_EXPENSES' && <ExpensesForm />}
            {modalType === 'DELETE_EXPENSES' && (
              <ConfirmationMessage expensesId={meta.id} />
            )}
            {modalType === 'UPDATE_EXPENSES' && <ExpensesForm exp={meta.exp} />}
          </Modal>
          <ExpensesList expenses={expenses} />
          <Button
            class="btnExp"
            btnLabel="Add Expenses"
            onClick={() => showAddModal()}
          >
            Add Expenses
          </Button>
        </div>
      )}
      {isPremium === false && calcularDiasPasados(createdAt) > 7 && (
        <div
          style={{
            padding: '1rem',
            marginRight: '10rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p style={{ color: 'white' }}>Advertisements</p>
          <img
            alt="adv"
            src={imgSponsor}
            style={{ width: '120px', height: '100px', paddingTop: '1rem' }}
          />
          <img
            alt="adv"
            src={imgSponsorTwo}
            style={{ width: '120px', height: '100px', paddingTop: '4rem' }}
          />
          <img
            alt="adv"
            src={imgSponsorThree}
            style={{ width: '120px', height: '100px', paddingTop: '4rem' }}
          />
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
      userProfile: userProfileAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  expenses: state.profile.expenses,
  modalType: state.modal.modalType,
  meta: state.modal.meta,
  isLoading: state.profile.isLoading,
  sponsors: state.sponsors.sponsorsList,
  isPremium: state.profile.isPremium,
  createdAt: state.profile.createdAt,
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
