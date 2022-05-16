import { TiTimesOutline, TiEdit } from 'react-icons/ti';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import useDateFormatter from '../../../hooks/useDateFormatter';
import modalTypes from '../../../redux/types/modalTypes';
import { showModal as showModalAction } from '../../../redux/actions/modalActions';

const ExpensesItem = ({ exp, showModal }) => {
    const { _id, description, type, category, amount, createdAt } = exp;

    const showDeleteModal = (expensesId) => {
        showModal(modalTypes.DELETE_EXPENSES, {
            id: expensesId,
        });
    };

    const showUpdateModal = () => {
        showModal(modalTypes.UPDATE_EXPENSES, {
            exp,
        });
    };

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {useDateFormatter(createdAt)}
            </TableCell>
            <TableCell>{description}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>
                <TiTimesOutline
                    style={{
                        cursor: 'pointer',
                        width: '30px',
                        height: '30px',
                        color: 'seagreen',
                    }}
                    onClick={() => showDeleteModal(_id)}
                />
                <TiEdit
                    style={{
                        cursor: 'pointer',
                        width: '30px',
                        height: '30px',
                        color: 'seagreen',
                        marginBottom: '0.1rem',
                    }}
                    onClick={() => showUpdateModal(exp)}
                />
            </TableCell>
        </TableRow>
    );
};

ExpensesItem.propTypes = {
    exp: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            showModal: showModalAction,
        },
        dispatch
    );
};

export default connect(null, mapDispatchToProps)(ExpensesItem);
