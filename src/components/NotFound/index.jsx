import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';
import img from '../../assets/9.png';
import Button from '../Shared/Button';

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <div className="notFoundTextContainer">
        <h3 className="firstText">404 Not Found</h3>
        <div className="textContainer">
          <h1 className="secondText">It&#39;s Empty Here</h1>
          <h3 className="thirdText">
            Sorry, the page you are looking for doesn&#39;t exist.
          </h3>
          <Link to="/">
            <Button btnLabel="Go Back" type="button">
              Go Back
            </Button>
          </Link>
        </div>
      </div>

      <img src={img} alt="not found" className="notFoundImg" />
    </div>
  );
};

export default NotFound;
