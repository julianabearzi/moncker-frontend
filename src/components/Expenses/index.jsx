import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '../Shared/Button';
import { userProfile as userProfileAction } from '../../redux/actions/profileActions';
import { showModal as showModalAction } from '../../redux/actions/modalActions';
import modalTypes from '../../redux/types/modalTypes';
import ExpensesList from './ExpensesList';
import ExpensesForm from './ExpensesForm';
import ConfirmationMessage from './ExpConfirmationMessage';
import Modal from '../Shared/Modal';

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
    <div>
      {isLoading ? (
        <LinearProgress color="success" />
      ) : (
        <div className="expensesContainer">
          <Button btnLabel="Add Expenses" onClick={() => showAddModal()}>
            Add Expenses
          </Button>

          <Modal>
            {modalType === 'ADD_EXPENSES' && <ExpensesForm />}
            {modalType === 'DELETE_EXPENSES' && (
              <ConfirmationMessage expensesId={meta.id} />
            )}
            {modalType === 'UPDATE_EXPENSES' && <ExpensesForm inc={meta.exp} />}
          </Modal>

          <ExpensesList expenses={expenses} />
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