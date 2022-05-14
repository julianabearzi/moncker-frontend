import React from 'react';
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
}) => {
    const coins = [
        {
            id: 'USD',
            value: 'USD',
        },
        {
            id: 'ARS',
            value: 'ARS',
        },
        {
            id: 'BTC',
            value: 'BTC',
        },
    ];

    const onSubmitExpenses = (values) => {
        if (exp) {
            updateExpenses({ ...values, id: exp._id });
        } else {
            addExpenses(values);
        }
        closeModal();
        userProfile();
    };

    return (
        <div>
            <Form
                onSubmit={onSubmitExpenses}
                initialValues={{
                    description: exp ? exp.description : '',
                    amount: exp ? exp.amount : '',
                    type: exp ? exp.type : '',
                    user: userId,
                }}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} className="formContainer">
                        <p className="addText"> {exp ? 'Update Expenses' : 'Add Expenses'}</p>
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
                                options={coins}
                                label="Coin type:"
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
        },
        dispatch
    );
};

const mapStateToProps = (state) => ({
    userId: state.auth._id,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);