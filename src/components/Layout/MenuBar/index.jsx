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
        <ul>
          <li>
          <BiHomeCircle
              size="40px"
              color="grey"
              onMouseOver={({target})=>target.style.color="#B3F17F"}
              onMouseOut={({target})=>target.style.color="grey"}
            /> 
          </li>
          <li>
            <IoBagAddSharp
              size="40px"
              color="grey"
              onMouseOver={({target})=>target.style.color="#B3F17F"}
              onMouseOut={({target})=>target.style.color="grey"}
            />  
          </li>
          <li>
            <FaRegMoneyBillAlt
              size="40px"
              color="grey"
              onMouseOver={({target})=>target.style.color="#B3F17F"}
              onMouseOut={({target})=>target.style.color="grey"}
            />
          </li>
          <li>
            <MdOutlineFavoriteBorder
              size="40px"
              color="grey"
              onMouseOver={({target})=>target.style.color="#B3F17F"}
              onMouseOut={({target})=>target.style.color="grey"}
            />
          </li>
          <li>
            <GoGraph
              size="40px"
              color="grey"
              onMouseOver={({target})=>target.style.color="#B3F17F"}
              onMouseOut={({target})=>target.style.color="grey"}
            />
          </li>
          <li>
            <BiLogOut
              size="40px"
              color="grey"
              onMouseOver={({target})=>target.style.color="#B3F17F"}
              onMouseOut={({target})=>target.style.color="grey"}
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="title">
      <h1>Moncker App</h1>
    </div>
  </div>
  )
};

export default MenuBar;

        
        
        
        
       