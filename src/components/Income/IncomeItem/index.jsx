import { TiTimesOutline, TiEdit } from 'react-icons/ti';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import useDateFormatter from '../../../hooks/useDateFormatter';
import modalTypes from '../../../redux/types/modalTypes';
import { showModal as showModalAction } from '../../../redux/actions/modalActions';

const IncomeItem = ({ inc, showModal }) => {
  const { _id, description, type, amount, createdAt } = inc;

  const showDeleteModal = (incomeId) => {
    showModal(modalTypes.DELETE_INCOME, {
      id: incomeId,
    });
  };

  const showUpdateModal = () => {
    showModal(modalTypes.UPDATE_INCOME, {
      inc,
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
          onClick={() => showUpdateModal(inc)}
        />
      </TableCell>
    </TableRow>
  );
};

IncomeItem.propTypes = {
  inc: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(IncomeItem);
