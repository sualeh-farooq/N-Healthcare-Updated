import Image from "next/image";
import Contract from "../../public/assets/img/banner/contract.png";
import Abott from '../../public/assets/img/partners/abott.png'
import Bayer from '../../public/assets/img/partners/bayer.png'
import Getz from '../../public/assets/img/partners/getz.jpeg'
import Pfizer from '../../public/assets/img/partners/pfizer.png'
import Sanofi from '../../public/assets/img/partners/sanofi.png'
import Wyeth from '../../public/assets/img/partners/wyeth.png'

export default function Partners() {
  return (
    <>
      <section className="my-5 ">
        <div className="container wow fadeInUp" data-wow-delay="0.5s ">
          <div className="row">
            <div className="col-lg-12">
              <div className=" text-center">
                <h2 style={{color:'#000'}} className="mb-30 ">
                Powering Innovation Through Partnership
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 gap-2">
              <Image src={Abott} alt="Quality Manufacturing" width={120} />
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 gap-2">
              <Image src={Bayer} alt="Quality Manufacturing" width={120} />
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 gap-2">
              <Image src={Getz} alt="Quality Manufacturing" width={120} />
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 gap-2">
              <Image src={Pfizer} alt="Quality Manufacturing" width={120} />
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 gap-2">
              <Image src={Sanofi} alt="Quality Manufacturing" width={120} />
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 gap-2">
              <Image src={Wyeth} alt="Quality Manufacturing" width={120} />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
