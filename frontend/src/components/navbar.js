import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  const servicesRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Function to handle scroll event
   const handleScroll = () => {
    const hello='500px';
      if (window.scrollY > hello.toString()) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleServicesHover = () => {
    clearTimeout(hideTimeout);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 1500); // Adjust the delay in milliseconds as needed
    setHideTimeout(timeout);
  };

  const handleProjectsHover = () => {
    clearTimeout(hideTimeout);
    setIsProjectsOpen(true);
  };

  const handleProjectsLeave = () => {
    const timeout = setTimeout(() => {
      setIsProjectsOpen(false);
    }, 700); // Adjust the delay in milliseconds as needed
    setHideTimeout(timeout);
  };

  return (
    <div className={`main-nav-box${isScrolled ? ' scroll' : ''}`}>
      <div className='logo-nav'>
      <h1><span className='one'>D</span><span className="two">decor</span><span className="three">.</span></h1>
      </div>
      <div className='options-nav'>
        <div className='ul-container'>
          <ul>
            <li><Link className='link' to={'/'}>Home</Link></li>
            <li><Link className='link' to={'/aboutus'}>About us</Link></li>
            <li
              ref={servicesRef}
              onMouseEnter={handleServicesHover}
              onMouseLeave={handleServicesLeave}
              className={isServicesOpen ? 'dropdown active' : 'dropdown'}
            >
              Services
              <div className="dropdown-content">
                <Link to={'/services1'}>Services1</Link>
                <a href="#">Service 2</a>
                <a href="#">Service 3</a>
                <a href="#">Service 4</a>
                <a href="#">Service 5</a>
              </div>
            </li>
            <li
              ref={projectsRef}
              onMouseEnter={handleProjectsHover}
              onMouseLeave={handleProjectsLeave}
              className={isProjectsOpen ? 'dropdown active' : 'dropdown'}
            >
              Projects
              <div className="dropdown-content">
                <a href="#">Project 1</a>
                <a href="#">Project 2</a>
                <a href="#">Project 3</a>
              </div>
            </li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
