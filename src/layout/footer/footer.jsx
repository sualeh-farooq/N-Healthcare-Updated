import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Useful Links  ",
      cls: "footer-col-2",
      links: [
        { name: "Contact us", link: "/contact" },
        { name: "Help & About us", link: "/about" },
        { name: "Products Catalog", link: "/products" },
        { name: "Why Choose Us", link: "/#choose" },
        { name: "Services", link: "/#choose" },
      ],
    },
    {
      id: 2,
      title: "Contact info",
      cls: "footer-col-3",
      links: [
        { name: "6/18, Block 4-A, Nazimabad No 4, Karachi" },
        { name: "+92-326-8037143" },
        { name: "info@nhealthcare.com.pk" },
        { name: "Support Hours: 9AM - 6PM" },
      ],
    },
  ],
  contact_info: [
    {
      id: 1,
      title: "Quick Links",
      support_info: [
        " 27 Division St, New York, NY 10002, USA",
        "(+880)52462545632",
        " support@example.com",
      ],
      office_time: "Office Hours: 9AM - 4PM",
      off_day: " Friday - Wekend Day",
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> N HealthCare</Link>.<i> All Rights Reserved Copyright</i>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor: '#000'}} >
        <div className="footer-area  pt-100 pb-50">
          <div className="container">
            <div className="row footer_row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title text-dark mb-30">
                    <a href="index">
                      <img src="/assets/img/logo/nwhite.png" alt="logo" />
                    </a>
                  </h4>
                  <p>
                    At N Healthcare , we are dedicated to redefining skin care & general care
                    through our expert quality manufacturing services. With a
                    focus on quality, innovation, and reliability.
                  </p>
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
                <div  className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className={`footer-widget footer-col-2 mb-50 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <h4 className="footer-widget__title mb-20">Useful Links</h4>
                    <div className="footer-widget__links">
                    
                      <ul>
                        <li>
                          <Link href="/contact" >Contact Us </Link>
                        </li>
                        <li>
                          <Link href="/products" >Products Catalog </Link>
                        </li>
                        <li>
                          <Link href="/about" >About Us </Link>
                        </li>
                        <li>
                          <Link href="/#choose" >Why Choose Us </Link>
                        </li>
                        <li>
                          <Link href="/#our_services" >Services </Link>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                </div>
                <div  className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className={`footer-widget footer-col-3 mb-50 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <h4 className="footer-widget__title mb-20">Contact Info</h4>
                    <div className="footer-widget__links">
                    
                      <ul>
                      
                        <li>
                          <Link href="#" >6/18, Block 4-A, Nazimabad No 4, Karachi </Link>
                        </li>
                        <li>
                          <Link href="tel:+923268037143" >+92-326-8037143 </Link>
                        </li>
                        <li>
                          <Link href="mailto:info@nhealthcare.com.pk" >info@nhealthcare.com.pk </Link>
                        </li>
                        <li>
                          <Link href="#" >Support Hours: 9:00AM - 5:00PM</Link>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="py-2 ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="footer-widget__copyright  text-center">
                  <p className="text-muted"  >{copy_right_text}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
