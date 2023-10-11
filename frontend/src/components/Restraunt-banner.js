import React from 'react';
import '../css/restraunt-banner.css';
import StarbucksImage from '../Images/ZONA-lighting.webp';
import Contentbox from './content-box';

const Restrauntbanner = () => {
  return (
    <div className='res-banner-container'>
      <div className='Image-div-banner'>
        <img src={StarbucksImage} alt='banner-image' />
        <h1>Restraunt</h1>
        <h2>Interiors</h2>
      </div>
      <Contentbox></Contentbox>
    </div>
  );
}

export default Restrauntbanner;
