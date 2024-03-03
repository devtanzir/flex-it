import React from "react";

const TestimonialSlider = (props) => {
  return (
    <>
      <div className="swiper-slide">
        <div className="testmonial-card d-flex align-items-center justify-content-center">
          <div className="testimonial-content">
            <div className="customer-img">
              <img
                className="img-fluid"
                loading="lazy"
                src={props.img}
                alt="First Slide "
              />
            </div>
            <div className="customer-testimonial">
              <div className="content">
                <p className="testimonial-text">{props.text}</p>
              </div>
            </div>
            <div className="customer-info">
              <div className="customer-details">
                <p className="customer-name">{props.name}</p>
                <p className="customer-role">{props.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
