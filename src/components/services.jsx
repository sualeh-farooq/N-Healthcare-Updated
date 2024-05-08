import Image from "next/image";
import Contract from "../../public/assets/img/banner/contract.png";
import Custom from "../../public/assets/img/banner/custom.jpg";
// import Label from "../../public/assets/img/banner/label.jpg";
import Label from "../../public/assets/img/banner/label.jpeg";

export default function Services() {
  return (
    <>
      <section>
        <div id="our_services" className="container mt-100 wow fadeInUp" data-wow-delay="0.8s" >
          <div className="row">
            <div className="col-lg-12">
              <div className=" text-center">
                <h2 style={{color:'#000'}} className="mb-30">
                  {/* POWERED BY EXPERIENCE. DRIVEN BY INNOVATION. */}
                  Powered By Experience. Driven By Innovation.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service_sec col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div
                className="tp-choose__item  mb-100 "
              >
                <div>
                  <Image
                    src={Contract}
                    alt="Quality Manufacturing"
                    width={350}
                  />
                </div>
                <div>
                  <h4 style={{color:'#000'}} className="my-4">Quality Manufacuturing</h4>
                  <p className="text-accent" >
                    Our high-tech, optimized manufacturing facility is located
                    on-site in our 10,000 square feet Innovation Campus
                    headquarters in Karachi , Pakistan. As the industry’s
                    leading developer and manufacturer of scientifically proven,
                    state-of-the-art General & Skin Care Products, N Healthcare  is the
                    choice partner for established and emerging brands in the
                    Derma , Aesthetics and retail skincare industries worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="service_sec col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div
                className="tp-choose__item  mb-100 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div>
                  <Image src={Custom} alt="Custom Formulation" width={350} />
                </div>
                <div>
                  <h4 style={{color:'#000'}} className="my-4">Unique Formulation</h4>
                  <p className="text-accent" >
                    Our onsite, state-of-the-art laboratory and highly
                    experienced chemists use advanced technologies and delivery
                    systems to create the most innovative General & Skin Healthcare products on
                    the market today. For brands looking for something that is
                    uniquely their own, our team of R&D Specialists – located
                    within our in-house laboratory can create a formulation
                    tailored exactly to your specifications.
                  </p>
                </div>
              </div>
            </div>
            <div className="service_sec col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div
                className="tp-choose__item  mb-100 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div>
                  <Image  src={Label} alt="Private Labelling" width={350} height={230} />
                </div>
                <div>
                  <h4 style={{color:'#000'}} className="my-4">Immaculate Packaging</h4>
                  <p className="text-accent" >
                  N Healthcare offers immaculate packaging of his brands that attract the customers more closely. Our innovation teams work closely with all partners to create unique & highly effective products sold in premium packaging that are ready for global market. Also we will work closely with you , guiding you through the immaculate packaging, turning your concept into reality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
