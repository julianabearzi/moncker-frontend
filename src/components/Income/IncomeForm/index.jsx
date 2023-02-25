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
  addIncome as addIncomeAction,
  updateIncome as updateIncomeAction,
} from '../../../redux/actions/incomeActions';
import { getCoins as getCoinsAction } from '../../../redux/actions/coinsActions';
import { userProfile as userProfileAction } from '../../../redux/actions/profileActions';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import Button from '../../Shared/Button';
import Select from '../../Shared/Select';
import TextInput from '../../Shared/TextInput';
import './incomeForm.css';

const IncomeForm = ({
  inc,
  addIncome,
  updateIncome,
  closeModal,
  userId,
  userProfile,
  isIncAdded,
  isIncUpdated,
  getCoins,
  coins,
}) => {
  const fiat = [
    {
      id: 'USD',
      value: 'USD',
    },
    {
      id: 'ARS',
      value: 'ARS',
    },
    {
      id: 'EUR',
      value: 'EUR',
    },
  ];
  useEffect(() => {
    getCoins();
  }, []);
  const onSubmitIncome = (values) => {
    if (inc) {
      updateIncome({ ...values, id: inc._id });
    } else {
      addIncome(values);
    }
  };
  useEffect(() => {
    if (isIncAdded) {
      userProfile();
      closeModal();
    }
    if (isIncUpdated) {
      userProfile();
      closeModal();
    }
  }, [isIncAdded, isIncUpdated]);
  return (
    <div>
      <Form
        onSubmit={onSubmitIncome}
        initialValues={{
          description: inc ? inc.description : '',
          amount: inc ? inc.amount : '',
          type: inc ? inc.type : '',
          user: userId,
        }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit} className="formContainerIncome">
            <p className="addText"> {inc ? 'Update Income' : 'Add Income'}</p>
            <div className="textInput">
              <Field
                name="description"
                component={TextInput}
                placeholder="Add description"
                label="Description:"
                validate={composeValidators(required, trim, string)}
                variant="filled"
                size="small"
              />
            </div>
            <div className="textInput">
              <Field
                name="amount"
                component={TextInput}
                placeholder="Add amount"
                label="Amount:"
                validate={composeValidators(required, number, trim)}
                variant="filled"
                size="small"
              />
            </div>
            <div>
              <Field
                name="type"
                component={Select}
                options={coins
                  .sort((a, b) => {
                    return b.volume_1day_usd - a.volume_1day_usd;
                  })
                  .slice(0, 10)}
                options2={fiat}
                label="Coin type:"
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
      addIncome: addIncomeAction,
      updateIncome: updateIncomeAction,
      userProfile: userProfileAction,
      closeModal: closeModalAction,
      getCoins: getCoinsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth._id,
  isIncAdded: state.income.isIncAdded,
  isIncUpdated: state.income.isIncUpdated,
  coins: state.coins.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomeForm);
