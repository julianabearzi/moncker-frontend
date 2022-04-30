import React from 'react';
import './menu.css';
import { BiHomeCircle,BiCompass,BiSearch,BiCalculator,BiMoney,BiLogOut } from "react-icons/bi";

const MenuBar = () => {
  return (
  <div className="menuContainer">
    <div className="navbar">
      <div className="icons">
        <BiHomeCircle
          size="40px"
          color="grey"
          animation="spin-hover"
         />
        <BiCompass
          size="40px"
          color="grey"
        />
        <BiSearch
          size="40px"
          color="grey"
        />
        <BiCalculator
          size="40px"
          color="grey"
        />
        <BiMoney
          size="40px"
          color="grey"
        />
        <BiLogOut
          size="40px"
          color="grey"
        />
      </div>
    </div>
  </div>
  )
};

export default MenuBar;
