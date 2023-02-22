/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { IoFastFoodOutline, IoCarSportOutline } from 'react-icons/io5';
import { MdOutlineHealthAndSafety, MdPersonOutline } from 'react-icons/md';
import { BsHouseDoor } from 'react-icons/bs';
import { CgGames } from 'react-icons/cg';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { userProfile as userProfileAction } from '../../redux/actions/profileActions';
import './expensesDashboard.css';

const Percents = ({ isLoading, expenses }) => {
  const [foodP, setFood] = useState(0);
  const [housingP, setHousing] = useState(0);
  const [personalP, setPersonal] = useState(0);
  const [enterP, setEnter] = useState(0);
  const [healthP, setHealth] = useState(0);
  const [othersP, setOthers] = useState(0);
  const [transportP, setTransport] = useState(0);
  const [billsP, setBills] = useState(0);

  useEffect(() => {
    // userProfile();
    let food = expenses.filter((cat) => cat.category === 'Food');
    let entertainment = expenses.filter(
      (cat) => cat.category === 'Entertainment'
    );
    let housing = expenses.filter((cat) => cat.category === 'Housing');
    let personal = expenses.filter(
      (cat) => cat.category === 'Personal Spending'
    );
    let others = expenses.filter((cat) => cat.category === 'Others');
    let health = expenses.filter(
      (cat) => cat.category === 'Health & personal care'
    );
    let transport = expenses.filter((cat) => cat.category === 'Transportation');
    let bills = expenses.filter((cat) => cat.category === 'Bills & utilities');

    let elementF = 0;
    let elementE = 0;
    let elementH = 0;
    let elementP = 0;
    let elementHC = 0;
    let elementT = 0;
    let elementO = 0;
    let elementB = 0;
    let elements = 0;
    for (let i = 0; i < expenses.length; i++) {
      elements += expenses[i].amount;
    }
    for (let i = 0; i < food.length; i++) {
      elementF += food[i].amount;
    }
    for (let i = 0; i < entertainment.length; i++) {
      elementE += entertainment[i].amount;
    }
    for (let i = 0; i < housing.length; i++) {
      elementH += housing[i].amount;
    }
    for (let i = 0; i < personal.length; i++) {
      elementP += personal[i].amount;
    }
    for (let i = 0; i < health.length; i++) {
      elementHC += health[i].amount;
    }
    for (let i = 0; i < transport.length; i++) {
      elementT += transport[i].amount;
    }
    for (let i = 0; i < others.length; i++) {
      elementO += others[i].amount;
    }
    for (let i = 0; i < bills.length; i++) {
      elementB += bills[i].amount;
    }
    const transportPercent = Math.round((elementT / elements) * 100);
    const healthPercent = Math.round((elementHC / elements) * 100);
    const housingPercent = Math.round((elementH / elements) * 100);
    const othersPercent = Math.round((elementO / elements) * 100);
    const foodPercent = Math.round((elementF / elements) * 100);
    const billsPercent = Math.round((elementB / elements) * 100);
    const enterPercent = Math.round((elementE / elements) * 100);
    const personalPercent = Math.round((elementP / elements) * 100);
    setFood(foodPercent);
    setHousing(housingPercent);
    setTransport(transportPercent);
    setHealth(healthPercent);
    setOthers(othersPercent);
    setPersonal(personalPercent);
    setEnter(enterPercent);
    setBills(billsPercent);
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="wrapper">
      {isLoading ? (
        <LinearProgress color="success" />
      ) : (
        <div className="percentContainer">
          <h2 className="textPercent">Your spending percent</h2>
          <Box
            sx={{
              width: '100%',
              marginRight: '1rem',
              // backgroundColor: '#D8BFD8',
              marginBottom: '1rem',
              borderRadius: '1rem',
            }}
          >
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            >
              <Grid style={{ padding: '1rem', paddingTop: '0rem' }} item xs={3}>
                <Item class="itemCatT">
                  <div className="itemTitle">
                    Entertainment
                    <CgGames style={{ width: '2rem', height: '2rem' }} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
                    {enterP} %
                  </div>
                </Item>
              </Grid>
              <Grid style={{ padding: '1rem', paddingTop: '0rem' }} item xs={3}>
                <Item class="itemCat">
                  <div className="itemTitle">
                    Housing
                    <BsHouseDoor style={{ width: '2rem', height: '2rem' }} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
                    {housingP} %
                  </div>
                </Item>
              </Grid>
              <Grid style={{ padding: '1rem', paddingTop: '0rem' }} item xs={3}>
                <Item class="itemCatT">
                  <div className="itemTitle">
                    Personal Spending
                    <MdPersonOutline
                      style={{ width: '2rem', height: '2rem' }}
                    />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
                    {personalP} %
                  </div>
                </Item>
              </Grid>
              <Grid style={{ padding: '1rem', paddingTop: '0rem' }} item xs={3}>
                <Item class="itemCat">
                  <div className="itemTitle">
                    Bills & utilities
                    <FaRegMoneyBillAlt
                      style={{ width: '2rem', height: '2rem' }}
                    />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
                    {billsP} %
                  </div>
                </Item>
              </Grid>
              <Grid style={{ padding: '1rem', paddingTop: '0rem' }} item xs={3}>
                <Item class="itemCatT">
                  <div className="itemTitle">
                    Transportation
                    <IoCarSportOutline
                      style={{ width: '2rem', height: '2rem' }}
                    />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
                    {transportP} %
                  </div>
                </Item>
              </Grid>
              <Grid style={{ padding: '1rem', paddingTop: '0rem' }} item xs={3}>
                <Item class="itemCat">
                  <div className="itemTitle">
                    Food
                    <IoFastFoodOutline
                      style={{ width: '2rem', height: '2rem' }}
                    />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
                    {foodP} %
                  </div>
                </Item>
              </Grid>
              <Grid style={{ padding: '1rem', paddingTop: '0rem' }} item xs={3}>
                <Item class="itemCatT">
                  <div className="itemTitle">
                    Health
                    <MdOutlineHealthAndSafety
                      style={{ width: '2rem', height: '2rem' }}
                    />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
                    {healthP} %
                  </div>
                </Item>
              </Grid>
              <Grid style={{ padding: '1rem', paddingTop: '0rem' }} item xs={3}>
                <Item class="itemCat padding">
                  <div className="itemTitle">Others</div>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
                    {othersP} %
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      userProfile: userProfileAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  expenses: state.profile.expenses,
  isLoading: state.profile.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Percents);
