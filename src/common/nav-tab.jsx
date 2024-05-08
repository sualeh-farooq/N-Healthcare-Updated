import React from "react";


// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Generate Proposal",
    des: (
      <>
        Testing Begins many varios <br /> suffered alten in some
      </>
    ),
  },
  {
    id: 2,
    icon: "flaticon-flask",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Testing Begins",
    des: (
      <>
        There are many varios passages <br />
        suffered alten in some
      </>
    ),
  },
  {
    id: 3,
    icon: "flaticon-report",
    img: "",
    title: "Reports Delivered",
    des: (
      <>
        There are many varios passages <br />
        suffered alten in some
      </>
    ),
  },
];

// tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: (
      <>
        Your full service lab for clinical trials. Our process is to ensure the
        generation of <br /> accurate and precise findings
      </>
    ),
    title: "Our Mission is Give You Always Best Results.",
    des_1: (
      <>
        Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti
        excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl
        aliquip ex ea commodo habent claritatem insitamconse quat.
      </>
    ),
    des_2: (
      <>
        Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        claritatem insitamconse quat.Exerci tation ullamcorper suscip
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-03.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-04.jpg" },
    ],
  },
  {
    id: 2,
    aria_labelledby: "contact-tab",
    header: (
      <>
        Your full service lab for clinical trials. Our process is to ensure the
        generation of <br /> accurate and precise findings
      </>
    ),
    title: "A Legacy of Success",
    des_1: (
      <>
        Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti
        excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl
        aliquip ex ea commodo habent claritatem insitamconse quat.
      </>
    ),
    des_2: (
      <>
        Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        claritatem insitamconse quat.Exerci tation ullamcorper suscip
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-01.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
    ],
  },
];
const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-130 pb-80">
        <div className="container">
       
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
                Your full service lab for clinical trials. Our process is to
                ensure the generation of <br /> accurate and precise findings
              </span>
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-40">
                      <div className="navtabs__icon mb-35">
                        <i className={item.icon}></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-25 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
