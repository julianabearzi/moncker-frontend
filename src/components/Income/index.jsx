import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '../Shared/Button';
import { userProfile as userProfileAction } from '../../redux/actions/profileActions';
import { showModal as showModalAction } from '../../redux/actions/modalActions';
import modalTypes from '../../redux/types/modalTypes';
import IncomeList from './IncomeList';
import IncomeForm from './IncomeForm';
import ConfirmationMessage from './ConfirmationMessage';
import Modal from '../Shared/Modal';

const Income = ({
  isLoading,
  showModal,
  modalType,
  userProfile,
  income,
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
    showModal(modalTypes.ADD_INCOME);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {isLoading ? (
        <LinearProgress color="success" />
      ) : (
        <div className="incomeContainer">
          <Button btnLabel="Add Income" onClick={() => showAddModal()}>
            Add Income
          </Button>

          <Modal>
            {modalType === 'ADD_INCOME' && <IncomeForm />}
            {modalType === 'DELETE_INCOME' && (
              <ConfirmationMessage incomeId={meta.id} />
            )}
            {modalType === 'UPDATE_INCOME' && <IncomeForm inc={meta.inc} />}
          </Modal>

          <IncomeList income={income} />
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
  income: state.profile.income,
  modalType: state.modal.modalType,
  meta: state.modal.meta,
  isLoading: state.profile.isLoading,
  sponsors: state.sponsors.sponsorsList,
  isPremium: state.profile.isPremium,
  createdAt: state.profile.createdAt,
});

export default connect(mapStateToProps, mapDispatchToProps)(Income);
