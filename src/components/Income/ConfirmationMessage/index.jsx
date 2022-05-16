import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import { deleteIncome as deleteIncomeAction } from '../../../redux/actions/incomeActions';
import { userProfile as userProfileAction } from '../../../redux/actions/profileActions';
import Button from '../../Shared/Button';
import './message.css';

const ConfirmationMessage = ({
  incomeId,
  closeModal,
  deleteIncome,
  userProfile,
  isIncDeleted,
}) => {
  const onDeleteIncome = () => {
    deleteIncome(incomeId);
  };

  useEffect(() => {
    if (isIncDeleted) {
      closeModal();
      userProfile();
    }
  }, [isIncDeleted]);

  return (
    <div>
      <p style={{ color: 'white' }}>
        Are you sure you want to delete this income?
      </p>
      <div className="buttonMessageContainer">
        <Button type="button" btnLabel="Cancel" onClick={() => closeModal()}>
          Confirm
        </Button>
        <Button
          type="button"
          btnLabel="Confirm"
          onClick={() => onDeleteIncome()}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModalAction,
      deleteIncome: deleteIncomeAction,
      userProfile: userProfileAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth._id,
  isIncDeleted: state.income.isIncDeleted,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationMessage);
