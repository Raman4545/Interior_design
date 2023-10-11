import React from 'react';
import '../css/contacts.css';

const Contacts = () => {
  return (
    <div className='main-container-contacts'>
    <div className='sub-container-contact'>
     <div className='cont'>
     <h4>we have a full range of products</h4>
     <div  className='cont-sub'>
     <a href=''><i class="fa-brands fa-instagram"></i></a>
     <a href=''><i class="fa-brands fa-facebook"></i></a>
     <a href=''><i class="fa-brands fa-linkedin"></i></a>
     <a href=''><i class="fa-brands fa-twitter"></i></a>
     </div>
     </div>
     <div className='cont second-c'>
     <h1>Contacts:</h1>
     <ul>
     <li><span>Head office:</span> WZ-95A1 Raja Garden, New Delhi</li>
     <li><span>Head office:</span>WZ-95A1 Raja Garden, New Delhi</li>
     <li><i class="fa-solid fa-envelope"></i>  info@mtdecor.in</li>
     <li><i class="fa-solid fa-phone"></i>  +91-9560521111</li>
     
     </ul>
     
     </div>
     <div className='cont third'>
     <h2>Latest Projects</h2>
     <ul>
     <li>Restraunt</li>
     <li>Bar</li>
     <li>Hotel</li>
     <li>Commercial</li>
     </ul>
     </div>
     <div className='cont fourth'>
     <h2>Latest Projects:</h2>
     <ul>
     <li>Restraunt interior</li>
     <li>Bar interior</li>
     <li>Cafe interior</li>
     <li>Outlet Interior</li>
     <li>Residential interior</li>
     </ul>
     </div>
    </div>
    <div className='sub-container-copyright'>
    <div className='le'>
    <p>Copyright © 2023, Developed By RamanPreet. All Rights Reserved.</p>
    </div>
    <div className='ri'>
    <p>Terms of use || Privacy policy</p></div>
    </div>
      
    </div>
  )
}

export default Contacts;
