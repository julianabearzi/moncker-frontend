import React, { useEffect } from 'react';
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
}) => {
  useEffect(() => {
    userProfile();
  }, []);

  const showAddModal = () => {
    showModal(modalTypes.ADD_INCOME);
  };

  return (
    <div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Income);
