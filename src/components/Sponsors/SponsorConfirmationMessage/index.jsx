import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import { deleteSponsors as deleteSponsorsAction } from '../../../redux/actions/sponsorsActions';
import { userProfile as userProfileAction } from '../../../redux/actions/profileActions';
import Button from '../../Shared/Button';
import './message.css';

const ConfirmationMessage = ({
  sponsorId,
  closeModal,
  deleteSponsors,
  userProfile,
  isIncDeleted,
}) => {
  const onDeleteSponsors = () => {
    deleteSponsors(sponsorId);
    closeModal();
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
        Are you sure you want to delete this Sponsor?
      </p>
      <div className="buttonMessageContainer">
        <Button type="button" btnLabel="Cancel" onClick={() => closeModal()}>
          Confirm
        </Button>
        <Button
          type="button"
          btnLabel="Confirm"
          onClick={() => onDeleteSponsors()}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModalAction,
      deleteSponsors: deleteSponsorsAction,
      userProfile: userProfileAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth._id,
  isIncDeleted: state.sponsors.isIncDeleted,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationMessage);
