import Link from "next/link";
import React from "react";
// import ContactUs from "../forms/contact-us";
import ContactUs from "./contact-us";

// contact_info
const contact_info = {
  address: (
    <>
  10/2, Block 4-D, Nazimabad No 4, Karachi
    </>
  ),
  phone_1: "info@nhealthcare.com.pk",
  phone_2: "+92-326-8037143",
  open: (
    <>
      Monday - Saturday <br />
      09:00 AM - 05:00 PM
    </>
  ),
};

const { address, phone_1, phone_2, open } = contact_info;
const ContactForm = () => {
  return (
    <>
      <section
        style={{ paddingTop: "9rem" }}
        className="contact-area mt-6  pb-20"
      >
        <section style={{ paddingTop: "2rem"  ,  marginBottom: '2rem' , marginTop: '-15px'  , backgroundColor: '#caa23c'}}  >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-7 col-12">
                <div className="text-center " >  
                  <h2 className="text-white " >Contact us</h2>
                  <p className="text-white" >Feel free to reach out to us for questions, feedback, or support. We value your input and look forward to hearing from you</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-30">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-12 "
            >
              <div
                className="tpcontact mr-60 mb-60 "
               
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-01.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15 text-primary">Address line</h4>
                    <span>
                      <Link className="text-dark" href="/contact">{address}</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 "
               
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-02.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15 text-primary">Phone & Email</h4>
                    <span>
                      <a href={`mailto:${phone_1}`} className="text-dark" >{phone_1}</a>
                    </span>
                    <span>
                      <a className="text-dark" href={`tel:${phone_2}`}>{phone_2}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 "
               
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-03.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15 text-primary">Operating Hours</h4>
                    <span className="text-dark">{open}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="contactform ">
                {/* <h4 className="contactform__title mb-35">
                  Send us Your Inquiry :
                </h4> */}
                <ContactUs />

                <div className="row wow fadeInUp" data-wow-delay=".8s">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14474.442165374057!2d67.0377437!3d24.9112628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff865087881%3A0xe235768ab75a3e7d!2sNigehban%20compounding%20pharmacy!5e0!3m2!1sen!2s!4v1694446919972!5m2!1sen!2s"                        width="600"
                        height="450"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
