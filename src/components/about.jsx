import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div className="tp-about-thumb mb-60 ">
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img 
                      src="/assets/img/about/about3.jpeg"
                      alt="about-thumb"
                    />
                    
                    {/* <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">

                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
                    </div> */}
                  </div>
                  <div className="tp-ab-shape ">
                  
                    <img 
                      className="ab-shape-two"
                      src="/assets/img/about/about1.jpeg"
                      alt=""
                    />
                  </div>

                </div>
                <div className="derma_img" >
                <img 
                      className="ab-shape-one"
                      src="/assets/img/about/about-bg.jpg"
                      alt="about-shape"
                    />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25 text-primary">
                    Our Commitment to Excellence:
                  </h3>

                  <p className=" mr-20 mb-40 text-dark">
                    N Healthcare is a leading Derma and General products Company
                    in Karachi, Pakistan that is committed to providing the best
                    possible skincare solutions to its customers. We are
                    dedicated to providing exceptional service to its clients
                    and partners. We take pride in crafting premium products
                    using sustainably sourced ingredients and cutting-edge
                    technology. Join hands with us to take your business to new
                    heights and offer your customers the best skincare solutions
                    available. <br /> <br />Touching lives through wellness at the core N
                    HealthCare Pakistan's leading Skin Care Cosmetics – Beauty and General Health Care
                    products, Manufacturer in Nigehban who has 26 + years
                    expertise in the field of branded and generic Skin Care,
                    Body Care, Cosmetics & General Healthcare Products,
                    manufactured using highest quality ingredients and
                    components with advance research,
                  </p>
                </div>
                <div className="tp-about__info-list ab-check-list mb-55">
                  <ul>
                    <li className="text-dark" >
                      <i className="fa-solid fa-check text-primary"></i>Highest
                      Quality Ingredients.
                    </li>
                    <li className="text-dark">
                      <i className="fa-solid fa-check text-primary"></i>
                      Manufacturers of Premium Products.
                    </li>
                    <li className="text-dark">
                      <i className="fa-solid fa-check text-primary"></i>Natural
                      and Organic Focus.
                    </li>
                    <li className="text-dark">
                      <i className="fa-solid fa-check text-primary"></i>
                      State-of-the-Art Facilities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
