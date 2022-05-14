import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import { deleteExpenses as deleteExpensesAction } from '../../../redux/actions/expensesActions';
import { userProfile as userProfileAction } from '../../../redux/actions/profileActions';
import Button from '../../Shared/Button';
import './message.css';

const ConfirmationMessage = ({
    expensesId,
    closeModal,
    deleteExpenses,
    userProfile,
}) => {
    const onDeleteExpenses = () => {
        deleteExpenses(expensesId);
        closeModal();
        userProfile();
    };

    return (
        <div>
            <p style={{ color: 'white' }}>
                Are you sure you want to delete this expenses?
            </p>
            <div className="buttonMessageContainer">
                <Button type="button" btnLabel="Cancel" onClick={() => closeModal()}>
                    Confirm
                </Button>
                <Button
                    type="button"
                    btnLabel="Confirm"
                    onClick={() => onDeleteExpenses()}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            closeModal: closeModalAction,
            deleteExpenses: deleteExpensesAction,
            userProfile: userProfileAction,
        },
        dispatch
    );
};

export default connect(null, mapDispatchToProps)(ConfirmationMessage);
