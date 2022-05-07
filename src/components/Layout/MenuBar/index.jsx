import React from 'react';
import './menu.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { BiHomeCircle, BiLogOut } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { IoBagAddSharp } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { startLogout as startLogoutAction } from '../../../redux/actions/authUsersActions';

const MenuBar = ({ startLogout }) => {
  const onLogout = (values) => {
    startLogout(values);
  };
  return (
    <div className="navbar">
      <div className="icons">
        <ul>
          <li>
            <Link to="/profile">
              <BiHomeCircle
                size="40px"
                color="grey"
                onMouseOver={({ target }) => (target.style.color = '#B3F17F')}
                onMouseOut={({ target }) => (target.style.color = 'grey')}
              />
            </Link>
          </li>
          <li>
            <Link to="/income">
              <IoBagAddSharp
                size="40px"
                color="grey"
                onMouseOver={({ target }) => (target.style.color = '#B3F17F')}
                onMouseOut={({ target }) => (target.style.color = 'grey')}
              />{' '}
            </Link>
          </li>
          <li>
            <Link to="/expenses">
              <FaRegMoneyBillAlt
                size="40px"
                color="grey"
                onMouseOver={({ target }) => (target.style.color = '#B3F17F')}
                onMouseOut={({ target }) => (target.style.color = 'grey')}
              />
            </Link>
          </li>
          <li>
            <MdOutlineFavoriteBorder
              size="40px"
              color="grey"
              onMouseOver={({ target }) => (target.style.color = '#B3F17F')}
              onMouseOut={({ target }) => (target.style.color = 'grey')}
            />
          </li>
          <li>
            <GoGraph
              size="40px"
              color="grey"
              onMouseOver={({ target }) => (target.style.color = '#B3F17F')}
              onMouseOut={({ target }) => (target.style.color = 'grey')}
            />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
