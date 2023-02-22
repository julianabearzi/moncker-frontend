import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '../Shared/Button';
import { getSponsors as getSponsorsAction } from '../../redux/actions/sponsorsActions';
import { showModal as showModalAction } from '../../redux/actions/modalActions';
import modalTypes from '../../redux/types/modalTypes';
import SponsorsList from './SponsorsList';
import SponsorsForm from './SponsorsForm';
import SponsorConfirmationMessage from './SponsorConfirmationMessage';
import Modal from '../Shared/Modal';

const Sponsors = ({
  isLoading,
  showModal,
  modalType,
  getSponsors,
  sponsors,
  meta,
}) => {
  useEffect(() => {
    getSponsors();
  }, []);

  const showAddModal = () => {
    showModal(modalTypes.ADD_SPONSORS);
  };

  return (
    <div>
      {isLoading ? (
        <LinearProgress color="success" />
      ) : (
        <div className="sponsorsContainer">
          <Button btnLabel="Add Sponsor" onClick={() => showAddModal()}>
            Add Sponsor
          </Button>

          <Modal>
            {modalType === 'ADD_SPONSORS' && <SponsorsForm />}
            {modalType === 'DELETE_SPONSORS' && (
              <SponsorConfirmationMessage sponsorsId={meta.id} />
            )}
            {modalType === 'UPDATE_SPONSORS' && <SponsorsForm inc={meta.inc} />}
          </Modal>

          <SponsorsList sponsors={sponsors} />
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
      getSponsors: getSponsorsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  sponsors: state.sponsors,
  modalType: state.modal.modalType,
  meta: state.modal.meta,
  isLoading: state.sponsors.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sponsors);
