import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Link from "next/link";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  const hero_slider = [
    {
      id: 1,
      title: (
        <>
          Our Passion is to <br /> Give you Better <br /> Service
        </>
      ),
      des: (
        <>
          Your full service lab for clinical trials. Our mission is to ensure
          the <br /> generation of accurate and precise findings
        </>
      ),
      appointment: "Appointment",
      about: "About us",
      // img_1: "/assets/img/slider/manufacture.jpg",
      img_1: "/assets/img/slider/derma.png",


      img_2: "/assets/img/slider/bg-gold.png",
    },
    {
      id: 2,
      title: (
        <>
          Our Passion is to <br /> Give you Better <br /> Service
        </>
      ),
      des: (
        <>
          Your full service lab for clinical trials. Our mission is to ensure
          the <br /> generation of accurate and precise findings
        </>
      ),
      appointment: "Appointment",
      about: "About us",
      // img_1: "/assets/img/slider/custom.jpg",
      img_1: "/assets/img/slider/derma.png",

      img_2: "/assets/img/slider/formulation.jpg",
    },
  ];
  return (
    <>
      <section className="slider-area slider-tp-top  p-relative   ">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={
            {
              delay: 4000,
              disableOnInteraction: false,
            }
          }
          pagination={{
            clickable: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
          <div className="swiper-slide bg-white">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-12 order-2 order-lg-1">
                  <div className="slider-content pt-60">
                    <h2 className="slider-content__title mb-45">
                     Title Here
                    </h2>
                    <p>Description</p>
                    <div className="slider-content__btn mb-165">
                      <Link className="tp-btn" href="/">
                        Book App
                      </Link>
                      <Link className="tp-btn-second ml-25" href="/about">
                        Link
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2">
                  <div className="slider-content__bg">
                    <img src={hero_slider[0].img_1} alt="slider-img" />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
             <SwiperSlide>
            <div style={{paddingLeft: '20px'}} className="bg-dark  container-fluid">
              <div  className="row ">
                <div  className="banner_col col-lg-6 col-md-12 col-12 order-2 order-lg-1">
                  <div className="  hero-con h-100 ">
                  <h3 className=" second-hero-head">
                    Highly
                      <span className="text-primary"> Concentrated </span>{" "}
                      Formula{" "}
                    </h3>
                   <ul>
                    <li>
                    <h4 className="text-primary" >REPAIRS</h4>
                      <p className="text-white" >and Prevents hair damage</p>
                    </li>
                    <li>
                    <h4 className="text-primary" >RESTORE</h4>
                      <p className="text-white" >Visibly Stronger healthier hair</p>
                    </li>
                    <li>
                    <h4 className="text-primary" >TREATS</h4>
                      <p className="text-white" >all hair types on a molecular level where all hair is made of identical bond</p>
                    </li>
                    </ul>
                    <div className="slider-content__btn mb-165"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2 mobile_col ">
                  <img className="skin_banner_img" src="/assets/img/slider/hair_spray.png" alt="first slider skin" />
                  <img className="skin_banner_img_mobile" src="/assets/img/slider/spray2.png" alt="first slider skin" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{paddingLeft: '20px'}} className="bg-dark  container-fluid">
              <div  className="row ">
                <div  className="banner_col col-lg-6 col-md-12 col-12 order-2 order-lg-1">
                  <div className="  hero-con h-100 ">
                  <h3 className=" hero-head">
                      Unlock Radiant Skin with{" "}
                      <span className="text-primary"> N Healthcare 's </span>{" "}
                      Expert{" "}
                      <span className="text-primary">Derma Solutions</span>
                    </h3>
                    <p className="text-white">
                      Elevate Your Brand with Customized Formulations and
                      Seamless Production Partnering for Radiant Results -
                      Nurturing Skincare, Crafting Success Your Vision, Our
                      Expertise - Where Innovation Meets Immaculate Execution
                    </p>
                    <div className="slider-content__btn mb-165"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2 mobile_col ">
                  <img className="skin_banner_img" src="/assets/img/slider/first.png" alt="first slider skin" />
                  <img className="skin_banner_img_mobile" src="/assets/img/slider/derma2.png" alt="first slider skin" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="container">
              <div className="row ">
                <div className="col-lg-6 col-md-12 col-12 order-2 order-lg-1">
                  <div className="  hero-con h-100 ">
                    <h1 className=" hero-head">
                      Discover Nature's Ultimate{" "}
                      <span className="text-primary">Secret</span> for Glowing{" "}
                      <span className="text-primary">Skin </span>{" "}
                    </h1>
                    <p className="text-accent">
                      Unlock the secret to radiant skin with our skincare
                      solutions. Enriched with the goodness of natural enzymes,
                      our products gently exfoliate and reveal your skin's
                      inherent glow, just like nature's own rejuvenation.
                    </p>
                    <div className="slider-content__btn mb-165"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2 second_slider">
                  <div className="slider-content__bg ">
                    <img src={hero_slider[1].img_1} alt="slider-img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row ">
                <div className="col-lg-6 col-md-12 col-12 order-2 order-lg-1">
                  <div className="  hero-con h-100 ">
                    <h1 className="hero-head">
                      Uncover <span className="text-primary"> Limitless </span>
                      Healthy Skin{" "}
                      <span className="text-primary">Possibilities</span>
                    </h1>
                    <p className="text-accent">
                      Unveil the possibilities of healthy and radiant skin with
                      our contract manufacturing services. Our commitment to
                      innovation and quality ensures skincare products that
                      enhance and inspire confidence.
                    </p>
                    <div className="slider-content__btn mb-165"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2 second_slider">
                  <div className="slider-content__bg second_slider_img ">
                    <img src={hero_slider[1].img_2} alt="slider-img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
}
