// import shop_data from "@/data/shop-data";
import shop_data from "@/data/shop-data";
import NiceSelect from "@/ui/nice-select";
import Link from "next/link";
import React from "react";

const Feminine = () => {

  const feminineProducts = shop_data.filter(item => item.category === "feminine");

  return (
    <>
      <div className="all_product_parent pt-150 pb-80">
      <section class="intro_sec" style={{ paddingTop: "2rem" , marginBottom: '2rem' , marginTop: '-15px' , backgroundColor: '#caa23c'}}  >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-7 col-12">
                <div className="text-center " >  
                  <h2 className="text-white " >Feminine Intimate Care</h2>
                  <p className="text-white">Experience Confidence and Comfort with Our Specially Crafted Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
        
          
          <div className="row">
            {feminineProducts.map((item) => (
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
    </>
  );
};

export default Feminine;
