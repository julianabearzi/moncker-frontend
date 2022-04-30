import React from 'react';
import './menu.css';
import { BiHomeCircle, BiLogOut } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md"; 
import { IoBagAddSharp } from "react-icons/io5";
import { GoGraph} from "react-icons/go";
import { FaRegMoneyBillAlt } from "react-icons/fa";

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
        <IoBagAddSharp
          size="40px"
          color="grey"
        />
        <FaRegMoneyBillAlt
          size="40px"
          color="grey"
        />
        <MdOutlineFavoriteBorder
          size="40px"
          color="grey"
        />
        <GoGraph
          size="40px"
          color="grey"
        />
        <BiLogOut
          size="40px"
          color="grey"
        />
      </div>
    </div>
    <div className="title">
      <h1>Moncker App</h1>
    </div>
  </div>
  )
};

export default MenuBar;
