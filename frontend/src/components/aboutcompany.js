import React from 'react';
import '../css/aboutcompany.css';

const Aboutcompany = () => {
  return (
    <div className='main-content-ac'>
      <div className='left'>
        <div className='sub-left'></div>
      </div>
      <div className='right'>
        <div className='sub-right-1'>
          <h4>[About Company]</h4>
          <h1>Best Interior Solutions</h1>
          <hr></hr>
        </div>
        <div className='sub-right-2'>
          <p>With an authentic and rich experience of more than a decade,
           we are one of the best QSR interior designers in Delhi. We did Interior for featured QSR,
           Casual Dining, and Fast-Casual Restaurants Brands, and we are experts in Residential, Commercial, and Retail outlets as well. Our expert panel of…
          </p>
          
        </div>
        <button className='read-more-btn'>Read more</button>
      </div>
    </div>
  );
};

export default Aboutcompany;
