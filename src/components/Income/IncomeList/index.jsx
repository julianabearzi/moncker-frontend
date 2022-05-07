import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IncomeItem from '../IncomeItem';

const IncomeList = ({ income, userId }) => {
  return (
    <div>
      <Paper
        style={{
          overflow: 'auto',
          height: '70vh',
          width: '70vw',
          textAlign: 'center',
          marginRight: '5rem',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {income
              .filter((item) => item.user === userId)
              .map((inc) => {
                return <IncomeItem key={inc._id} inc={inc} />;
              })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

IncomeList.propTypes = {
  income: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.auth._id,
});

export default connect(mapStateToProps, null)(IncomeList);
