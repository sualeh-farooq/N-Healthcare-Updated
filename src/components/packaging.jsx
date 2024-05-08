import {Row , Col } from 'reactstrap'
import Image from 'next/image'
import tube from '../../public/assets/img/slider/packaging.png'
const Packaging = () =>{
    return (
        <>
                <div id='about' className='container my-4 '  >
        <Row>
            <Col className='packing_responsive' sm="12" md="6" lg="6" >
                 <div className=' d-flex flex-column h-100 justify-content-start pt-50 align-items-center  gap-4 wow fadeInLeft col-md-12 col-12 order-2 order-lg-1' data-wow-delay="0.7s"  >
                 <h2 style={{color: '#000'}} >
                 Immaculate Packaging for Your Brand

                    </h2>
                    <p  className='text-accent' >
                    Our vast array of stock packing options is unmatched. With stock packaging options that range from simple to extravagant, BPA-free plastics to glass or aluminum, sample size to backbar – we have everything you need to define your brand’s look and feel
                    </p>
                 </div>
            </Col>
            <Col className='' sm="12" md="6" lg="6" >
            <div className="slider-content__bg second_slider_img  wow fadeInRight" data-wow-delay="0.3s">

                    <Image src={tube} width={350} />
                    </div>
            </Col>
        </Row>
                </div>
        </>
    )
}

export default Packaging