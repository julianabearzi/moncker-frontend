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
  addExpenses as addExpensesAction,
  updateExpenses as updateExpensesAction,
} from '../../../redux/actions/expensesActions';
import { getCoins as getCoinsAction } from '../../../redux/actions/coinsActions';
import { userProfile as userProfileAction } from '../../../redux/actions/profileActions';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import Button from '../../Shared/Button';
import Select from '../../Shared/Select';
import TextInput from '../../Shared/TextInput';
import './expenses.css';

const ExpensesForm = ({
  exp,
  addExpenses,
  updateExpenses,
  closeModal,
  userId,
  userProfile,
  isExpUpdated,
  isExpAdded,
  coins,
  getCoins,
}) => {
  useEffect(() => {
    getCoins();
  }, []);
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
  const category = [
    {
      id: 'Food',
      value: 'Food',
    },
    {
      id: 'Bills & utilities',
      value: 'Bills & utilities',
    },
    {
      id: 'Entertainment',
      value: 'Entertainment',
    },
    {
      id: 'Transportation',
      value: 'Transportation',
    },
    {
      id: 'Health & personal care',
      value: 'Health & personal care',
    },
    {
      id: 'Personal Spending',
      value: 'Personal Spending',
    },
    {
      id: 'Housing',
      value: 'Housing',
    },
    {
      id: 'Others',
      value: 'Others',
    },
  ];

  const onSubmitExpenses = (values) => {
    if (exp) {
      updateExpenses({ ...values, id: exp._id });
    } else {
      addExpenses(values);
    }
  };

  useEffect(() => {
    if (isExpAdded) {
      userProfile();
      closeModal();
    }
    if (isExpUpdated) {
      userProfile();
      closeModal();
    }
  }, [isExpAdded, isExpUpdated]);

  return (
    <div>
      <Form
        onSubmit={onSubmitExpenses}
        initialValues={{
          description: exp ? exp.description : '',
          amount: exp ? exp.amount : '',
          type: exp ? exp.type : 'USD',
          category: exp ? exp.category : 'Food',
          user: userId,
        }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit} className="formContainerExpenses">
            <p className="addText">
              {' '}
              {exp ? 'Update Expenses' : 'Add Expenses'}
            </p>
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
            <div>
              <Field
                name="category"
                component={Select}
                options2={category}
                label="Category:"
              />
            </div>
            <div className="btnExpensesContainer">
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
      addExpenses: addExpensesAction,
      updateExpenses: updateExpensesAction,
      userProfile: userProfileAction,
      closeModal: closeModalAction,
      getCoins: getCoinsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth._id,
  isExpAdded: state.expenses.isExpAdded,
  isExpUpdated: state.expenses.isExpUpdated,
  coins: state.coins.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
