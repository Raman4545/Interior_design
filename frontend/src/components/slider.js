import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    indicators:true,
    speed: 1000, // Slide transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 3500, // Delay between slides in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const slides = [
    {
      title: 'Designs that make Impressions',
      content: 'Creative Flair with Commercial Sense',
      backgroundImage: 'url(' + require('../Images/bg1.webp') + ')',
    },
    {
      title: 'Best Interior Designs',
      content: 'We have best interior designs',
      backgroundImage: 'url(' + require('../Images/bg4.jpg') + ')',
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3500);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className='main-content'>
      <Navbar />
      <div className='slider-container'>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className='slide'
                style={{
                  backgroundImage: slide.backgroundImage,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '95vh',
                  border:'1px solid black',
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:"center"
                }}
              >
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)',width:"60%",height:"300px",display:"flex",flexDirection:"column",
                
                alignItems:"center"}}>
                <h2 style={{width:'95%',height:'150px',color:"white",fontSize:"3.5em",marginBottom:"10px",
                fontFamily:"Titillium Web, sans-serif",textTransform:"capitalize"
                }}>{slide.title}</h2>
                <p style={{width:'90%',height:'40px',color:"white",position:"relative",bottom:"10px",fontSize:"1.5em",fontFamily:"Titillium Web, sans-serif",textTransform:"capitalize"}}>{slide.content}</p></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
