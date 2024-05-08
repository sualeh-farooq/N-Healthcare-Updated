import ServiceDataHomeThree from "@/data/service-data-home-3";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <>
      <section
        className="services-area tp-common-area  grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section pt-0  pb-0 tp-section-center text-center">
              
                <h3 className="tp-section__title mb-75">Our Products Categories</h3>
              </div>
            </div>
         
          </div>
          <div className="row">
            {ServiceDataHomeThree.map((item) => (
              <div
                key={item.id}
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12"
              >
                <Link href={item.link} >
                <div
                  className={`services-thumb-box ${item.color} mb-30 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="services-thumb-box__thumb fix">
                    <img src={item.img} alt="services-thumb" />
                  </div>
                  <div className="services-thumb-box__text-area d-flex align-items-center px-0">
                    {/* <div className="services-thumb-box__icon mr-20">
                      <i className={item.icon}></i>
                    </div> */}
                    <div className="services-thumb-box__content">
                      <h5 className="services-thumb-box__title">
{item.name}
                      </h5>
                    
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Categories;
