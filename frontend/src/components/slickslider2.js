import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slickslider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    indicators: true,
    speed: 1500, // Set speed to 0 to remove slide in and slide out animations
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3, // Show 6 slides at once
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const slides = [
    {
      title: 'Restraunt',
      content: '1',
      backgroundImage: 'url(' + require('../Images/bg1.webp') + ')',
    },
    {
      title: 'Restraunt',
      content: '2',
      backgroundImage: 'url(' + require('../Images/bg4.jpg') + ')',
    },
    {
      title: 'Restraunt',
      content: '4',
      backgroundImage: 'url(' + require('../Images/bg2.webp') + ')',
    },
    {
      title: 'Restraunt',
      content: '5',
      backgroundImage: 'url(' + require('../Images/bg3.jpg') + ')',
    },
    {
      title: 'Restraunt',
      content: '6',
      backgroundImage: 'url(' + require('../Images/bg5.webp') + ')',
    },
    {
      title: 'Restraunt',
      content: '7',
      backgroundImage: 'url(' + require('../Images/bg3.jpg') + ')',
    },
    // Add more slides as needed
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
                  height: '200px', // Set the height to 200px
                  border: '1px solid black',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                className='content-section'
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    width: '100%',
                    height: '100%',
                    
                    
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor:"pointer",
                    display:"flex",
                    transition: 'background-color 0.3s ease', // Add transition
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Background color on hover
                    },
                  }}
                >
                  <h2 style={{  width: '55%', height: '70px', color: 'white',fontSize:"3rem" }}>
                    {slide.title}
                  </h2>
                  <p
                    style={{
                      
                      width: '25%',
                      height: '170px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      position: 'relative',
                      left:"20px",
                      textAlign:"center",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      fontSize:"10rem",
                      fontWeight:"990",
                      
                    }}
                  >
                    {slide.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slickslider2;
