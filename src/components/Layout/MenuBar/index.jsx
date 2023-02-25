import React from 'react';
import './menu.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { BiHomeCircle, BiLogOut } from 'react-icons/bi';
import { IoBagAddSharp } from 'react-icons/io5';
import { FcAdvertising } from 'react-icons/fc';
import { GoGraph } from 'react-icons/go';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { startLogout as startLogoutAction } from '../../../redux/actions/authUsersActions';

const MenuBar = ({ startLogout, isAdmin }) => {
  const admin = JSON.parse(localStorage.getItem('admin'));
  const onLogout = (values) => {
    startLogout(values);
  };
  return (
    <div className="navbar">
      <div className="icons">
        <ul>
          {(isAdmin === true || admin === true) && (
            <li>
              <Link to="/sponsors">
                <Tooltip title="Sponsors">
                  <Button>
                    <FcAdvertising size="40px" />
                  </Button>
                </Tooltip>
              </Link>
            </li>
          )}
          <li>
            <Link to="/profile">
              <Tooltip title="Home">
                <Button>
                  <BiHomeCircle
                    size="40px"
                    color="grey"
                    onMouseOver={({ target }) =>
                      (target.style.color = '#B3F17F')
                    }
                    onMouseOut={({ target }) => (target.style.color = 'grey')}
                  />
                </Button>
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/income">
              <Tooltip title="Income">
                <Button>
                  <IoBagAddSharp
                    size="40px"
                    color="grey"
                    onMouseOver={({ target }) =>
                      (target.style.color = '#B3F17F')
                    }
                    onMouseOut={({ target }) => (target.style.color = 'grey')}
                  />{' '}
                </Button>
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/expenses">
              <Tooltip title="Expenses">
                <Button>
                  <FaRegMoneyBillAlt
                    size="40px"
                    color="grey"
                    onMouseOver={({ target }) =>
                      (target.style.color = '#B3F17F')
                    }
                    onMouseOut={({ target }) => (target.style.color = 'grey')}
                  />
                </Button>
              </Tooltip>
            </Link>
          </li>
          {/* <li>
            <Link to="/">
              <Tooltip title="Spending Percent">
                <Button>
                  <FaPercent
                    size="30px"
                    color="grey"
                    onClick={() => showViewModal()}
                    onMouseOver={({ target }) =>
                      (target.style.color = '#B3F17F')
                    }
                    onMouseOut={({ target }) => (target.style.color = 'grey')}
                  />
                </Button>
              </Tooltip>
            </Link>
            <Modal>{modalType === 'VIEW_PERCENTS' && <Percent />}</Modal>
          </li> */}
          <li>
            <Link to="/reports">
              <Tooltip title="Reports">
                <Button>
                  <GoGraph
                    size="40px"
                    color="grey"
                    onMouseOver={({ target }) =>
                      (target.style.color = '#B3F17F')
                    }
                    onMouseOut={({ target }) => (target.style.color = 'grey')}
                  />
                </Button>
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link onClick={() => onLogout()} to="/">
              <BiLogOut
                size="40px"
                color="grey"
                onMouseOver={({ target }) => (target.style.color = '#B3F17F')}
                onMouseOut={({ target }) => (target.style.color = 'grey')}
                onClick={() => onLogout()}
              />{' '}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      startLogout: startLogoutAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
