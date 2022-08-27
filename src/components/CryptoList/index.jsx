import './style.css';
import React from 'react'
import Menu from '../Layout/MenuBar/index';
import List from './List';

const CryptoList = () => {
  return (
    <div className='listContainer'>
        <Menu />
        <List />
    </div>
  )
}

export default CryptoList;
