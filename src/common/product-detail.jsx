import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import shop_data from "@/data/shop-data";
import Image from "next/image";
import Envelope from "../../public/assets/img/icon/envelope.svg";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import AddToCartButton from "@/components/addToCart";
import {
  Form,
  Row,
  Col,
  Input,
  Label,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Modal } from "antd";
// related product list
const related_product = [
  {
    id: 1,
    img: "/assets/img/shop/shop-09.jpg",
    name: "Sphygmomanometer",
    price: "66.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
  },
  {
    id: 2,
    img: "/assets/img/shop/shop-10.jpg",
    name: "Glucometer",
    price: "46.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
  },
  {
    id: 3,
    img: "/assets/img/shop/shop-11.jpg",
    name: "Oxygen Breathing Machine",
    price: "70.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
  },
  {
    id: 4,
    img: "/assets/img/shop/shop-12.jpg",
    name: "Oxygen Breathing Machine",
    price: "70.00",
    ratting: [
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
  },
];
// slider setting
const setting = {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  navigator: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// product_item_list data
const product_item_list = [
  {
    id: 1,
    title: "Product Details",
    active: "active",
    li_id: "home-tab-1",
    data_bs_target: "home-1",
    aria_controls: "home-1",
    aria_selected: true,
  },
  {
    id: 2,
    title: "Additional Info",
    active: "",
    li_id: "information-tab",
    data_bs_target: "additional-information",
    aria_controls: "additional-information",
    aria_selected: false,
  },
  {
    id: 3,
    title: "Review (08)",
    active: "",
    li_id: "reviews-tab",
    data_bs_target: "reviews",
    aria_controls: "reviews",
    aria_selected: false,
  },
  {
    id: 4,
    title: "Faq",
    active: "",
    li_id: "size-chart-tab",
    data_bs_target: "chart",
    aria_controls: "chart",
    aria_selected: false,
  },
];

const ProductDetailsArea = ({
  id , 
  img,
  descHead1,
  descHead2,
  descHead3,
  descDetail1,
  descDetail2,
  descDetail3,
  title,
  help,
  brand,
  packaging,
  ingredients,
  description,
  category ,
  tags,
  price
}) => {
  const [productCount, setProductCount] = useState(1);
  const addBtn = () => {
    setProductCount((prev) => prev + 1);
  };
  const minusBtn = () => {
    if (productCount >= 1) {
      setProductCount((prev) => prev - 1);
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState(`Request a Quote for ${title}`);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (name.trim() !== "") {
      if (emailReg.test(email) && email.trim() !== "") {
        if (number.length > 7 && number.trim() !== "") {
          if (subject.trim() !== "") {
            if (message.trim() !== "") {
              setIsLoading(true);
              e.preventDefault();
              const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message, subject, number }),
              });

              if (response.ok) {
                Swal.fire(
                  "Quote Submitted Succesfully",
                  "Thank you for Submit a Quote , Our Team will get back to you within 24 Hours.",
                  "success"
                );
                setName("");
                setEmail("");
                setMessage("");
                setNumber("");
                setSubject("");
                setIsLoading(false);
              } else {
                Swal.fire(
                  "Something went wrong",
                  "Error sending in email",
                  "error"
                );
                setName("");
                setEmail("");
                setMessage("");
                setNumber("");
                setSubject("");
                setIsLoading(false);
                setIsModalOpen(!isModalOpen);
              }
            } else {
              toast.error("Empty Quote Description Couldn't Submitted", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          } else {
            toast.error("Enter the Subject of Quote", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        } else {
          toast.error("Please Provide a Valid Contact Number", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } else {
        toast.error("Please Provide a Valid Email Address", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Please Enter your Name", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const relatedProducts = shop_data.filter(item => item.category === category);

  return (
    <>
      <section
        style={{ marginTop: "5rem" }}
        className="shop-area product_detail_area pt-120 pb-70"
      >
        <div className="container">
          <div className="shop-left-right ml-130 mr-130">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="productthumb   wow "
                  // data-wow-delay=".4s"
                >
                  <img
                    src={img}
                    alt="product-thumb"
                    style={{ width: "100%" }}
                    // className="border"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="product mb-40 ml-20 wow fadeInRighRight"
                  data-wow-delay=".4s"
                >
                  <div className="product__details-content mb-40">
                    <h5 className="product-dtitle mb-20">{title}</h5>
                    <p>
                     {description}
                    </p>
                    <div className="product-dinfo ">
                      <table class="table table-responsive">
                        <thead>
                          <tr>
                            <td scope="col">
                              <b>Brand</b>
                            </td>
                            <td scope="col">{brand}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Packaging Size</b>
                            </td>
                            <td>{packaging}</td>
                          </tr>
                          {/* <tr>
                            <td>
                              <b>Ingredients</b>
                            </td>
                            <td>{ingredients}</td>
                          </tr> */}
                          <tr>
                            <td>
                              <b>Tags</b>
                            </td>
                            <td>
                              {tags.map((val, index) => {
                                return (
                                  <>
                                    <small
                                      key={index}
                                      className="bg-primary text-white p-2 badge  rounded-3 mx-1"
                                    >
                                      {val}
                                    </small>
                                  </>
                                );
                              })}
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="d-flex gap-3 product_actions ">
                      <div className="mt-3 w-100 d-flex flex-column gap-3">
                        <h3 className="p-0" >Rs. {price}</h3>
                        <h5 style={{fontWeight: 200}}  className="text-muted p-0" ><span style={{textDecoration: 'line-through'}} >Rs. 1200 </span> </h5>
                        <AddToCartButton id={id} name={title} price={price} />
                        {/* <Link target="_blank" href="https://wa.link/03c36j">
                          <button className="bg-success py-2 px-3 rounded-3 text-white d-flex align-items-center gap-2 justify-center">
                            <i
                              style={{ fontSize: "large" }}
                              className="fab fa-whatsapp"
                            ></i>
                            <span>Request More Info</span>
                          </button>
                        </Link>
                      </div>
                      <div className="mt-3">
                        <button
                          style={{ fontWeight: "normal" }}
                          onClick={showModal}
                          className="rounded-3 px-3 py-2 contact-btn "
                        >
                          <Image src={Envelope} width={20} />
                          Request a Quote
                        </button> */}
                      </div>

                      <div>
<
artButton id={id} name={title} price={10}  />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="productdetails pt-35 pb-75">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-additional-tab">
                    <div id="myTabContent-2">
                      <div
                        id="home-1"
                        role="tabpanel"
                        aria-labelledby="home-tab-1"
                      >
                        <h5>{descHead1}</h5>

                        <p className="mb-30">{descDetail1}</p>

                        <h5>{descHead2}</h5>

                        <p>{descDetail2}</p>
                        <h5>{descHead3}</h5>

                        <p>{descDetail3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tpproductitem">
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="product-dtitle mb-50">Related Product</h5>
                </div>
              </div>
            </div>
            {/* <Swiper
              {...setting}
              modules={[Navigation]}
              className="swiper-container shop-slider-active"
            >
              {relatedProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="tpshopitem mb-50">
                      <div className="tpshopitem__thumb p-relative fix mb-35">
                        <Link href={item.link}>
                          <img src={item.img} alt="shop-thumb" />
                        </Link>
                      </div>
                      <div className="tpshopitem__content text-center">
                        <span className="tpshopitem__title mb-5">
                          <Link  href={item.link}>{item.title}</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
            <div className="row">
            {relatedProducts.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-4">
                <div
                  className="tpshopitem mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                    <Link href={item.link}>
                      <img src={item.img} alt="shop-thumb" />
                    </Link>

                  </div>
                  <div className="tpshopitem__content text-center">
                    <span className="tpshopitem__title mb-5">
                      <Link href="/products/nas">{item.title}</Link>

                     
                    </span>
                    {item.product_news && (
                      <small className="bg-primary py-1 px-4 text-white rounded-2">
                        {item.product_news}
                      </small>
                    )}
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <Modal
        footer={[
          <div className="d-flex  justify-content-end ">
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="bg-white border border-gold rounded-5 mx-2 px-4"
              type="button"
            >
              Cancel
            </button>
            <button
              disabled={isLoading ? true : false}
              onClick={(e) => handleSubmit(e)}
              className="contact-btn"
              type="button"
            >
              {isLoading ? (
                <>
                  Sumbitting
                  <div class="spinner-border text-light" role="status"></div>
                </>
              ) : (
                <>Submit</>
              )}
            </button>
          </div>,
        ]}
        width={1000}
        okButtonProps={{ style: { backgroundColor: "#caa23c" } }}
        okText="Send"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalHeader className="border-bottom pb-10">Get A Quote</ModalHeader>
        <ModalBody className="contactform">
          {/* <Form>
            <Row>
              <Col sm="12" md="12" lg="6">
                <div className="mt-2">
                  <Label>Name</Label>
                  <Input
                    required
                    type="text"
                    className="form-control"
                  />
                </div>
              </Col>
              
              <Col sm="12" md="12" lg="6">
                <div className="mt-2">
                  <Label>Phone Number</Label>
                  <Input
                    required
                    type="text"
                    className="form-control"
                  />
                </div>
              </Col>
              <Col sm="12" md="12" lg="12">
                <div className="mt-2">
                  <Label>Email</Label>
                  <Input
                    required
                    type="text"
                    className="form-control"
                  />
                </div>
              </Col>
              <Col sm="12" md="12" lg="12">
                <div className="mt-2">
                  <Label>Your Inquiry Description</Label>
                  <textarea
                    required
                    type="text"
                    className="form-control"
                    rows={6}
                  />
                </div>
              </Col>
            </Row></Form> */}
          <div className="contactform__list mb-20 mt-20">
            <form
              onSubmit={(e) => e.preventDefault()}
              id="contact-form"
              method="post"
            >
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="contactform__input mb-30">
                    <input
                      disabled={isLoading ? true : false}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="contactform__input mb-30">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      disabled={isLoading ? true : false}
                      className="contactform__input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="contactform__input mb-30">
                    <input
                      name="number"
                      type="number"
                      value={number}
                      disabled={isLoading ? true : false}
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder="Enter your number"
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="contactform__input mb-30">
                    <input
                      name="number"
                      type="text"
                      disabled={isLoading ? true : false}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Enter the Subject of Quote"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="contactform__input ">
                    <textarea
                      name="message"
                      disabled={isLoading ? true : false}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
            <ToastContainer
              position="top-center"
              autoClose={1500}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable
              theme="colored"
            />
          </div>
        </ModalBody>

        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="colored"
        />
      </Modal>
    </>
  );
};

export default ProductDetailsArea;
