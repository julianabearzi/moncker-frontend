import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpensesItem from '../ExpensesItem';

const ExpensesList = ({ expenses, userId }) => {
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
                            <TableCell>Category</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {expenses
                            .filter((item) => item.user === userId)
                            .map((exp) => {
                                return <ExpensesItem key={exp._id} exp={exp} />;
                            })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

ExpensesList.propTypes = {
    expenses: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
    userId: state.auth._id,
});

export default connect(mapStateToProps, null)(ExpensesList);
