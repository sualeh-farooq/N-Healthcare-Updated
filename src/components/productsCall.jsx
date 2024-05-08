import Link from "next/link";

export default function ProductsCall(){
    return (
        <>
     
        <div className="cta-boxed-one wow fadeInDown" data-wow-delay="0.3s">
          <div className="container">
            <div
              className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
              style={{
                backgroundImage: "url(assets/img/cta-img/explore.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '50px 0px',
                margin: '10px 0px'
              }}
            >
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="cta-content text-center">
                    <div className="section-heading heading-white">
                      <h2 style={{lineHeight: '40px'}} className="text-primary my-2 cta-heading">
                      Unlock Radiant Possibilities with Our Manufacturing


                      </h2>
                    </div>
                    <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                      <li>
                       <Link href="/products" >
                       <button className="contact-btn" >
                         Explore Collection <i className="far fa-plus" />
                        </button>
                       </Link>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}