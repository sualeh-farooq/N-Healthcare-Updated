import Link from "next/link";
import React from "react";


// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-magnify",
    title: (
      <>
       Expertise in Derma & General Healthcare
      </>
    ),
    des: (
      <>
       Our team possesses a deep understanding of dermatological science and general skincare manufacturing. with many years of experience.
      </>
    ),
  },
  {
    id: 2,
    // color: "pink-icon",
    icon: "flaticon-report",
    title: (
      <>
       Quality Assurance and Compliance
      </>
    ),
    des: (
      <>
       Ensuring the safety and quality of our products is non-negotiable. Our state-of-the-art manufacturing facility adheres to rigorous quality control measures.
      </>
    ),
  },
  {
    id: 3,
    // color: "green-icon",
    icon: "flaticon-experiment",
    title: (
      <>
       Innovation Driving Results
      </>
    ),
    des: (
      <>
       Our commitment to innovation sets us apart. We constantly invest in research and development to stay at the forefront of skincare & general healthcare trends and technologies.
      </>
    ),
  },
  {
    id: 4,
    // color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <>
     Comprehensive Customer Support
      </>
    ),
    des: (
      <>
       Our responsive and knowledgeable support team is readily available to address your queries, provide guidance, and offer solutions at every stage.
      </>
    ),
  },
];


const Specialists = () => {
  return (
    <>
      <section id="choose" style={{backgroundColor: '#000'}} className="choose-area  pt-40  mb-4 " >
        <div className="container wow fadeInUp"  data-wow-delay=".8s">
          <div className="row">
            <div className="col-lg-12">
              <div className=" text-center">
                <h3 className="tp-section__title text-white mb-50">
                  Why Choose Us
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="choose_text tp-choose__item  mb-100 "
                 
                >
                  <div className={`tp-choose__icon choose_icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    <h5 className="tp-choose__title mb-20">{item.title}</h5>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Specialists;
