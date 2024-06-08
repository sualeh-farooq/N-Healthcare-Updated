import React from 'react';

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useEffect, useState } from "react";
import Invoice from '../components/PDF/pdf';
import { useSelector } from 'react-redux';
import { selectFormData, selectCart, selectTotal } from './redux/DataFeature/checkoutSlice';

const ThankYouPage = ({ orderNumber, orderStatus }) => {

  const formData = useSelector(selectFormData);
  const cart = useSelector(selectCart);
  const total = useSelector(selectTotal);

  console.log(formData)
  console.log(cart)
  console.log(total)
  const [download, setDownload] = useState()
  const [genCertificate, setGenCertificate] = useState()
  const licenseCertificate = useRef(null)
  const handleGeneratePDF = async () => {
    const inputData = licenseCertificate.current
    try {
      const canvas = await html2canvas(inputData)
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });
      const width = pdf.internal.pageSize.getWidth()
      const height = (canvas.height * width) / canvas.width
      pdf.addImage(imgData, "PNG", 0, 0, width, height)
      pdf.save('check.pdf')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {/* <h5 className="card-title text-center">Thank You for Your Purchase!</h5>
              <p className="card-text text-center">
                Your order has been placed successfully.
              </p>
              <hr /> */}
              {/* <p className="card-text">
                <strong>Order Number:</strong> {orderNumber}
              </p>
              <p className="card-text">
                <strong>Order Status:</strong> {orderStatus}
              </p> */}
              {/* <p className="card-text text-center">
               Your order will be Deliver within 1-2 Working Days - An invoice of your order has been sent to your email. Thank you for shopping with us!
              </p> */}
              <div ref={licenseCertificate} >
                <Invoice orderNo={orderNumber}  customer={formData} products={cart} total={total}  />
              </div>
              <button style={{ zIndex: '9' }} onClick={() => handleGeneratePDF()} >Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
