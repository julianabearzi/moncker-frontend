import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import {
  required,
  number,
  trim,
  string,
  composeValidators,
} from '../../../utils/validations';
import {
  addSponsors as addSponsorsAction,
  updateSponsors as updateSponsorsAction,
} from '../../../redux/actions/sponsorsActions';
import { userProfile as userProfileAction } from '../../../redux/actions/profileActions';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import Button from '../../Shared/Button';
import TextInput from '../../Shared/TextInput';
import './sponsorsForm.css';
// import { sponsorsDeleted } from '../../../redux/actions/sponsorsActions';

const SponsorsForm = ({
  spon,
  addSponsors,
  updateSponsors,
  closeModal,
  userId,
  userProfile,
  isIncAdded,
  isIncUpdated,
}) => {
  const onSubmitSponsors = (values) => {
    if (spon) {
      updateSponsors({ ...values, id: spon._id });
    } else {
      addSponsors(values);
    }
    closeModal();
  };
  useEffect(() => {
    if (isIncAdded) {
      userProfile();
    }
    if (isIncUpdated) {
      userProfile();
      closeModal();
    }
  }, [isIncAdded, isIncUpdated]);
  return (
    <div>
      <Form
        onSubmit={onSubmitSponsors}
        initialValues={{
          name: spon ? spon.name : '',
          phone: spon ? spon.phone : '',
          email: spon ? spon.email : '',
          image: spon ? spon.image : '',
          user: userId,
        }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit} className="formContainerSponsors">
            <p className="addText">
              {' '}
              {spon ? 'Update Sponsor' : 'Add Sponsor'}
            </p>
            <div className="textInput">
              <Field
                name="name"
                component={TextInput}
                placeholder="Add Name"
                label="Name:"
                validate={composeValidators(required, trim, string)}
                variant="filled"
                size="small"
              />
            </div>
            <div className="textInput">
              <Field
                name="phone"
                component={TextInput}
                placeholder="Add Phone"
                label="Phone:"
                validate={composeValidators(required, number, trim)}
                variant="filled"
                size="small"
              />
            </div>
            <div className="textInput">
              <Field
                name="email"
                component={TextInput}
                placeholder="Add Email"
                label="Email:"
                validate={composeValidators(required)}
                variant="filled"
                size="small"
              />
            </div>
            <div className="textInput">
              <Field
                name="image"
                component={TextInput}
                placeholder="Add Image"
                label="Image:"
                validate={composeValidators(required, trim)}
                variant="filled"
                size="small"
              />
            </div>
            <div className="btnIncomeContainer">
              <Button
                disabled={submitting || pristine}
                btnLabel="Submit"
                type="submit"
              />
              <Button
                disabled={submitting || pristine}
                btnLabel="Reset"
                type="button"
                onClick={form.reset}
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addSponsors: addSponsorsAction,
      updateSponsors: updateSponsorsAction,
      userProfile: userProfileAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth._id,
  isIncAdded: state.income.isIncAdded,
  isIncUpdated: state.income.isIncUpdated,
});

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsForm);
