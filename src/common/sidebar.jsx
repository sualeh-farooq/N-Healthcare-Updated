import MobileMenus from '@/layout/header/mobile-menus';
import Link from 'next/link';
import React, { useState } from "react";
import SocialLinks from './social-links';


const images = [
  {
    img: "/assets/img/blog/blog-in-01.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-02.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-03.jpg",
  }
];


const Sidebar = ({ isActive, setIsActive }) => {

 
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  //  images
  const img = images.map((item) => item.img);

 
  return (
    <>
      <div
        className={`tpsideinfo tp-side-info-area ${
          isActive ? "tp-sidebar-opened" : ""
        }`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="tpsideinfo__close"
        >
          <i className="fal fa-times"></i>
        </button>
        <div className="tpsideinfo__logo mb-40">
          <Link href="/">
            <img src="/assets/img/logo/nwhite.png" alt="logo" />
          </Link>
        </div>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          <p className=" d-none d-xl-block">
          At N Healthcare , we are dedicated to redefining skin care
                    through our expert quality manufacturing services. With a
                    focus on quality, innovation, and reliability.
          </p>
          <span>Contact Us</span>
          <a  href="#">
            <i className="fa-solid fa-location-dot"></i>
            10/2, Block 4-D, Nazimabad No 4, Karachi
          </a>
          <a href="tel:+923268037143">
            <i className="fa-solid fa-phone"></i>+92-326-8037143
          </a>
          <a href="mailto:info@nhealthcare.com.pk">
            <i className="fa-solid fa-envelope"></i>info@nhealthcare.com.pk
          </a>
        </div>
       
        
        <div className="tpsideinfo__socialicon">

        <a href="https://www.facebook.com/profile.php?id=61550531365042">
            <i className="fa-brands fa-facebook-f"></i>
          </a>


          <a target='_blank' href="https://www.instagram.com/nhealthcare1/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a target='_blank' href="https://www.linkedin.com/company/nhealthcare/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a target='_blank' href="https://twitter.com/NHealthcare1">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a target='_blank' href="https://www.youtube.com/channel/UCeU1kfq1Oqffn1kJ1xL-Upw">
            <i className="fa-brands fa-youtube"></i>
          </a>
          
        
        </div>
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`body-overlay ${isActive ? "opened" : ""}`}
      ></div>

      
    </>
  );
};

export default Sidebar;