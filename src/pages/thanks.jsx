import React from 'react';

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useEffect, useState } from "react";
import Invoice from '../components/PDF/pdf';
import { useSelector } from 'react-redux';
import { selectFormData, selectCart, selectTotal } from '../redux/DataFeature/checkoutSlice';

export default function ThankYouPage  ({ orderNumber, orderStatus })  {

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
      const viewportWidth = document.documentElement.clientWidth;
      const pdfWidth = viewportWidth * 0.8; // Adjust this factor as needed
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [pdfWidth , pdfHeight]
      });
      // const width = pdf.internal.pageSize.getWidth()
   
      // const height = (canvas.height * width) / canvas.width
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save('invoice.pdf')
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
             
              <div className='d-flex flex-column justify-content-center' >
                <div className='d-flex justify-content-between align-items-center border-bottom pb-3 flex-wrap'>
                  <h6>Thank your for your Purchase !</h6>
                  <button className='contact-btn px-3 py-1' onClick={() => handleGeneratePDF()} >Download Invoice</button>
                </div>
                <p className='text-center'>Your order will be Deliver within 1-2 Working Days - Thank you for shopping with us!</p>
              </div>
              <div ref={licenseCertificate} >
                <Invoice orderNo={orderNumber} customer={formData} products={cart} total={total} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
