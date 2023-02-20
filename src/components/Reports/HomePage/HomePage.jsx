import React from 'react'
import Banner from '../Banner/Banner';
// import Carousel from '../Banner/Carousel';
import CoinsTable from '../CoinsTable/CoinsTable';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='homepageReport'>
      <Banner />
      {/* <Carousel /> */}
      <CoinsTable />
    </div>
  )
}

export default HomePage