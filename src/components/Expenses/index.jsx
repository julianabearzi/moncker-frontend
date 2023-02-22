/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
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
}) => {
  useEffect(() => {
    userProfile();
  }, []);

  const showAddModal = () => {
    showModal(modalTypes.ADD_EXPENSES);
  };

  return (
    <div className="wrapper">
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
