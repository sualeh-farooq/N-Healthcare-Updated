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
  //   {
  //     id: 1,
  //     tab_id: "profile-tab-pane",
  //     aria_labelledby: "profile-tab",
  //     header: (
  //       <>
  //         Your full service lab for clinical trials. Our process is to ensure the
  //         generation of <br /> accurate and precise findings
  //       </>
  //     ),
  //     title: "Our Mission is Give You Always Best Results.",
  //     des_1: (
  //       <>
  //         Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
  //         claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti
  //         excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl
  //         aliquip ex ea commodo habent claritatem insitamconse quat.
  //       </>
  //     ),
  //     des_2: (
  //       <>
  //         Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
  //         claritatem insitamconse quat.Exerci tation ullamcorper suscip
  //       </>
  //     ),
  //     images: [
  //       { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-03.jpg" },
  //       { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-04.jpg" },
  //     ],
  //   },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",

    title: "Eco-Friendly Innovation and Quality Production",
    des_1: (
      <>
        Our Clean Dermatology/Aesthetic contemporary creations are rooted in
        nature with plant-derived raw material and enriching high quality of
        Chemicals / essential oils that offer an experience of synesthesia from
        head to toe with the aim to provide best-quality Dermatology/Aesthetic
        and general products to its customers and products demand. 
      </>
    ),
    des_2: (
      <>
      N HealthCare
        aspires to achieve the highest level of customer satisfaction with its
        world-class manufacturing facilities, trained manpower and advanced R &
        D capabilities, practice zero waste and recycling protocols to maintain
        an ecofriendly manufacturing operation at our factory.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/about/about-mission.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
    ],
  },
];
const NavTab = () => {
  return (
    <>
      <section
        className="nav-area tp-common-area wow fadeInUp "
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="tab-content" id="myTabContent">
            {tab_content.map((item) => (
              <div
                key={item.id}
                id={`${item.tab_id}`}
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75 text-primary">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-10">
                        <h4 className="nabmission__title mb-20 text-primary">
                          {item.title}
                        </h4>
                        <p className="mb-20 text-dark">{item.des_1}</p>
                        <p className="text-dark">{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div
                        style={{ width: "20rem" }}
                        className="nabthumb mb-30 rounded-2"
                      >
                        <img
                          style={{ width: "100%" }}
                          src={img.img}
                          alt="tab-thumb"
                          className="rounded-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
