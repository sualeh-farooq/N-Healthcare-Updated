import React from "react";
import Count from "../common/count";

//  counter_text;
const counter_text = [
  {
    id: 1,
    color: "blue-hard",
    counter: 10,
    text: "Years of Experience",
  },
  {
    id: 2,
    color: "pink-hard",
    counter: 5000,
    text: "Happy Clients Served",
  },
  {
    id: 3,
    color: "sky-hard",
    counter: 50,
    text: "Trusted Partners",
  },
  {
    id: 4,
    color: "green-hard",
    counter: 12,
    text: "Certifications Earned",
  },
];

const Counter = ({ cls = "pt-40 pb-100"  }) => {
  return (
    <>
      <section className={`counter-area ${cls}`}>
        <div className="container">
          <div className="row">
            {counter_text.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  
                  <div className="counter__content">
                    <h4 className="counter__title text-primary">
                      <span className="counter">
                        <Count  number={item.counter} />
                      </span>
                    </h4>
                    <p className="text-accent" >{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
