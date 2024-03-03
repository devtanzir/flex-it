import React from "react";
import DefaultHeading from "../../components/DefaultHeading";
import TestimonialSlider from "../../components/TestimonialSlider";
import TestimonialImg1 from "../../assets/Image/testimonials/1.png";
import TestimonialImg2 from "../../assets/Image/testimonials/2.png";
import TestimonialImg3 from "../../assets/Image/testimonials/3.png";

const Testimonials = () => {
  return (
    <>
      <section
        className="testimonials testimonials-1-col has-dark-bg mega-section"
        id="testimonials-img-bg"
      >
        <div
          className="overlay-photo-image-bg parallax"
          data-bg-img="assets/images/sections-bg-images/1.jpg"
          data-bg-opacity=".25"
        ></div>
        <div className="container">
          <DefaultHeading
            className="centered"
            title="testimonials"
            heading1="customers"
            heading2="testimonials"
          />
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-10 mx-auto">
              <div
                className="swiper-container wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="swiper-wrapper">
                  {/* <!--First Slide--> */}
                  <TestimonialSlider
                    img={TestimonialImg1}
                    text="ipsum dolor sit amet consectetur adipisicing elit.
                              Quod, id sequi aut qui est ab, corporis quis
                              maiores reiciendis explicabo odio tenetur nulla
                              sint vel."
                    name="Yusuf amin"
                    role="founder"
                  />
                  {/* <!--Second Slide--> */}
                  <TestimonialSlider
                    img={TestimonialImg2}
                    text="ipsum dolor sit amet consectetur adipisicing elit.
                              Quod, id sequi aut qui est ab, corporis quis
                              maiores reiciendis explicabo odio tenetur nulla
                              sint vel."
                    name="fouad osman"
                    role="officer"
                  />
                  {/* <!--third Slide--> */}
                  <TestimonialSlider
                    img={TestimonialImg3}
                    text="ipsum dolor sit amet consectetur adipisicing elit.
                              Quod, id sequi aut qui est ab, corporis quis
                              maiores reiciendis explicabo odio tenetur nulla
                              sint vel."
                    name="fairouz mahmud"
                    role="manager"
                  />
                </div>
                {/* <!--navigation buttons--> */}
                <div className="swiper-button-prev">
                  <div className="left-arrow">
                    <i className="bi bi-chevron-left icon"></i>
                  </div>
                </div>
                <div className="swiper-button-next">
                  <div className="right-arrow">
                    <i className="bi bi-chevron-right icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
