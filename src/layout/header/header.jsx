import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavMenu from "./nav-menu";
import useSticky from "../../../hooks/use-sticky";
import Sidebar from "@/common/sidebar";
import Envelope from '../../../public/assets/img/icon/envelope.svg'
import Image from "next/image";
import { toast, ToastContainer } from 'react-toastify'
import { Modal } from "antd";
import Swal from "sweetalert2";
import { Badge } from "reactstrap";
import { FaShoppingCart } from "react-icons/fa";

import { Form, Row, Col, Input, Label, ModalBody, ModalHeader } from 'reactstrap'
const Header = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [subject, setSubject] = useState('')
 


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
                setIsModalOpen(!isModalOpen)
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



  return (
    <>
      <div
        id="header-mob-sticky"
        className={`tp-mobile-header-area pt-15 pb-15 d-xl-none bg-white ${sticky ? "header-sticky" : ""
          } `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-10">
              <div className="tp-mob-logo">
                <Link href="/">
                  <img src="/assets/img/logo/nlogo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-8 col-2">
              <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                {/* <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30">
                  <Link href="/cart" className=" contact-btn" >
                    <FaShoppingCart size={25} />

                    <Badge color="light" className="text-primary" >
                      {cartLength}
                    </Badge>
                  </Link>
                </div> */}
                <button
                  onClick={() => setIsActive(true)}
                  className="tp-menu-toggle"
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="d-none d-xl-block">
        <div
          className={`header__area tp-home-one bg-white ${sticky ? "header-sticky" : ""
            }`}
          id="header-sticky"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-lg-3">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/img/logo/nlogo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-lg-6">
                <div className="main-menu text-center">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              {/* <div className="col-xxl-3 col-lg-3 d-flex align-items-center justify-content-end">
                <Link href="/cart" className=" contact-btn" >
                  <FaShoppingCart size={25} />

                  <Badge color="light" className="text-primary" >
                    {cartLength}
                  </Badge>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </header>
      <Modal footer={[
        <div className="d-flex  justify-content-end "  >

          <button onClick={() => setIsModalOpen(!isModalOpen)} className="bg-white border border-gold rounded-5 mx-2 px-4" type="button">


            Cancel




          </button>
          <button disabled={isLoading ? true : false} onClick={(e) => handleSubmit(e)} className="contact-btn" type="button">
            {isLoading ? (
              <>
                Sumbitting
                <div class="spinner-border text-light" role="status">
                </div>
              </>
            ) : (
              <>
                Submit

              </>
            )}


          </button>
        </div>

      ]} width={1000} okButtonProps={{ style: { backgroundColor: '#caa23c' } }} okText="Send"
        open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ModalHeader className="border-bottom pb-10" >
          Get A Quote
        </ModalHeader>
        <ModalBody className="contactform" >
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
            <form onSubmit={e => e.preventDefault()} id="contact-form" method="post">
              <div className="row">
                <div className="col-6">
                  <div className="contactform__input mb-30">
                    <input disabled={isLoading ? true : false} value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="Enter your Name" />
                  </div>
                </div>
                <div className="col-6">
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
                <div className="col-6">
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

                <div className="col-6">
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

      {/* side bar start */}
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      {/* side bar end */}
    </>
  );
};

export default Header;
