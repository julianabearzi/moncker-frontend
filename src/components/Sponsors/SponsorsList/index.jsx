import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SponsorsItem from '../SponsorsItem';

const SponsorsList = ({ sponsors }) => {
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
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sponsors.sponsorsList.map((spon) => {
              return <SponsorsItem key={spon._id} spon={spon} />;
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

SponsorsList.propTypes = {
  sponsors: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.auth._id,
});

export default connect(mapStateToProps, null)(SponsorsList);
