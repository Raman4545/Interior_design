// CompanyLogoSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/slickslider.css';

const CompanyLogoSlider = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    arrows: false,
    speed: 1500, // Slide transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 2500, // Delay between slides in milliseconds
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1,
  };

  const logoSlides = [
    {
      src: require('../Images/cafecoffee.png'),
      alt: 'Company Logo 1',
    },
    {
      src: require('../Images/chaisutta.png'),
      alt: 'Company Logo 2',
    },
    {
      src: require('../Images/starbucks.png'),
      alt: 'Company Logo 3',
    },
    {
      src: require('../Images/subway.jpg'),
      alt: 'Company Logo 4',
    },
    {
      src: require('../Images/cafecoffee.png'),
      alt: 'Company Logo 5',
    },
    {
      src: require('../Images/subway.jpg'),
      alt: 'Company Logo 6',
    },
    // Add more logo slides as needed
  ];

  return (
    <div className='company-logo-slider'>
      <Slider className='sli-com' {...settings}>
        {logoSlides.map((slide, index) => (
          <div key={index}
         
          className='logo-slide'>
            <div className='image-slide'
            style={{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",left:"40px",top:"10px"}}
            >
            <img className='image-slide-img' src={slide.src} alt={slide.alt} /></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyLogoSlider;

