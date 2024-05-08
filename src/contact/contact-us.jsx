import React, { useState } from "react";
import { toast , ToastContainer } from "react-toastify";
import Swal from 'sweetalert2'


const ContactUs = () => {


  const [isLoading , setIsLoading] = useState(false)
  const [name , setName] = useState('')
  const [message , setMessage ] = useState('')
  const [email , setEmail] = useState('')
  const [number , setNumber] = useState('')
  const [subject , setSubject] = useState('')



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
                  "Inquiry Send Succesfully",
                  "Thank you for Your Inquiry , Our Team will get back to you soon",
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
              }
            } else {
              toast.error("Empty Inquiry Couldn't Submitted", {
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
            toast.error("Enter the Subject of Inquiry", {
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
      <div className="contactform__list mb-60">
        <form onSubmit={e => e.preventDefault()} id="contact-form" method="post">
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input disabled={isLoading ? true : false} value={name} onChange={(e)=>setName(e.target.value)} name="name" type="text" placeholder="Enter your Name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                  name="email"
                  type="email"
                  disabled={isLoading ? true : false}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="number"
                  type="number"
                  value={number}
                  disabled={isLoading ? true : false}

                  onChange={(e)=>setNumber(e.target.value)}
                  placeholder="Enter your number"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="number"
                  type="text"
                  disabled={isLoading ? true : false}
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                  placeholder="Enter your Inquiry Subject"
                />
              </div>
            </div>
            
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <textarea
                  name="message"
                  disabled={isLoading ? true : false}
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  placeholder="Type your Inquiry"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn">
                <button disabled={isLoading ? true : false} onClick={(e)=>handleSubmit(e)} className="contact-btn" type="button">
                 {isLoading ? (
              <>
                      Sending Inquiry
             <div class="spinner-border text-light" role="status">
                </div>
                  </>
                 ):(
                 <>
                 Send Inquiry
             
                 </>
                 )}

   
                </button>
              </div>
              {/* <p className="ajax-response"></p> */}
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
    </>
  );
};

export default ContactUs;
