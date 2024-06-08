import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef , useEffect, useState } from "react";
import Invoice from "../components/PDF/pdf";

export default function PDF(){
    const [download , setDownload] = useState()
    const [genCertificate , setGenCertificate] = useState()
    const licenseCertificate = useRef(null)

    const handleGeneratePDF  = async () => {
        const inputData = licenseCertificate.current
            try {
                const canvas = await html2canvas(inputData)
                const imgData = canvas.toDataURL("image/png")
                const pdf  = new jsPDF({
                    orientation: 'portrait', 
                    unit: 'px' ,
                    format: 'a4'
                });
                const width = pdf.internal.pageSize.getWidth()
                const height = (canvas.height * width) / canvas.width
                pdf.addImage(imgData , "PNG",0,0, width , height)
                pdf.save('check.pdf')
            } catch (error) {
                console.log(error)
            }
    }
    return (
        <>
        <div style={{visibility: 'visible' , position: 'fixed' , left: '100px'}} ref={licenseCertificate} >
            <Invoice  />
        </div>
        <button style={{zIndex: '9'}} onClick={()=>handleGeneratePDF()} >Download PDF</button>
        </>
    )
}

