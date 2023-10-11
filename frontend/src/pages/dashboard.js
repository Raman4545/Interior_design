import React from 'react';
import Aboutcompany from '../components/aboutcompany';
import Banner1 from '../components/banner1';
import Banner2 from '../components/banner2';
import Contacts from '../components/contacts';
import Servicesbanner from '../components/services';
import CompanyLogoSlider from '../components/slickslider';
import Slickslider2 from '../components/slickslider2';
import Slider from '../components/slider';
const Dashboard = () => {
  return (
    <div>
    <Slider></Slider>
    <Aboutcompany></Aboutcompany>
    <CompanyLogoSlider></CompanyLogoSlider>
    <Slickslider2></Slickslider2>
    <Servicesbanner></Servicesbanner>
    <Banner2></Banner2>
    <Banner1></Banner1>
    <Contacts></Contacts>
    </div>
  )
}

export default Dashboard;
