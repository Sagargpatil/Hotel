import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { BsInfoCircle, BsInfoSquare, BsInfoSquareFill } from "react-icons/bs"
import { NavLink, useNavigate } from 'react-router-dom';

const Footer=()=> {
const navigate = useNavigate();

const declaration =()=>{
  navigate('/declaration');
}

  return (
    <div className="footer">
    <div >
    <div className="social-icons">
      <a href="https://wa.me/+918888870540" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/your_instagram_username/" class="card-title font-weight-bold" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    {/* <a href="/declaration" style={{size:"6x"}} class="card-title font-weight-bold" target="_blank" rel="noopener noreferrer">
    
    </a> */}
    <NavLink to={'/declaration'} style={{fontSize:"10px",}}>
    <BsInfoSquareFill  />
    </NavLink>
    
    </div>
    <p>&copy; 2024 Hotal Kasturaj Garden All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer;
