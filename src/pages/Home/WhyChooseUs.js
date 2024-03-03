import React from "react";

import ChooseUsImage from "../../assets/Image/about/1.png";

import DefaultHeading from "../../components/DefaultHeading";
import InfoItem from "../../components/InfoItem";
import DefaultBtn from "../../components/DefaultBtn";

const WhyChooseUs = () => {
  return (
    <>
      <div className="content-block">
        <div className="row">
          <div
            className="col-12 col-lg-6 d-flex align-items-center about-col wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="img-area">
              <div className="image" data-tilt>
                <img
                  className="about-img img-fluid"
                  loading="lazy"
                  src={ChooseUsImage}
                  alt="about"
                />
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 d-flex align-items-center about-col pad-start wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="text-area">
              <DefaultHeading
                title="why choose us"
                class="light-title"
                heading1="customers"
                heading2="choose"
                featuredText="working"
              />
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officia molestiae dolorum tempora ut accusamus cupiditate!
                Nesciunt tempora reiciendis libero voluptate!
              </p>
              <div className="info-items-list">
                <div className="row">
                  <InfoItem
                    gridClass="col-12"
                    number="01."
                    title="latest technologies"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque repellendus minima reiciendis nobis dolore
                          obcaecati."
                  />
                  <InfoItem
                    gridClass="col-12"
                    number="02."
                    title="uniqe solutions"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque repellendus minima reiciendis nobis dolore
                          obcaecati."
                  />
                  <InfoItem
                    gridClass="col-12"
                    number="03."
                    title="powerful strategies"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque repellendus minima reiciendis nobis dolore
                          obcaecati."
                  />
                </div>
              </div>
              <div className="cta-area">
                <DefaultBtn
                  btn_className="btn-solid"
                  to="/"
                  text="get in toutch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
