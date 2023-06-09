import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../../components/header/header';
import SkeletonLoader from '../../components/skeleton/skeleton';
import ProductCard from '../../components/card/card';

import './landingPage.scss';

const LandingPage = () => {

  return (
    <>
      <Header/>
      <div className='content-main'>
        <ProductCard/>
      </div>
    </>
  )
};

export default LandingPage;
