import React from "react";
import AboutImage from "../../assets/Image/about/3.png";
import WhyChooseUs from "./WhyChooseUs";
import DefaultHeading from "../../components/DefaultHeading";
import InfoItem from "../../components/InfoItem";
import DefaultBtn from "../../components/DefaultBtn";

const AboutSection = () => {
  return (
    <>
      <section className="about mega-section" id="about">
        <div className="container">
          {/* <!-- Start first about div--> */}
          <div className="content-block">
            <div className="row">
              <div
                className="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="text-area">
                  <DefaultHeading
                    title="about Us"
                    class="light-title"
                    heading1="trusted"
                    heading2="by worldwide clients since"
                    featuredText="1980."
                  />
                  <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    officia molestiae dolorum tempora ut accusamus cupiditate!
                    Nesciunt tempora reiciendis libero voluptate!
                  </p>
                  <div className="info-items-list">
                    <div className="row">
                      <InfoItem
                        gridClass="col-9 col-xl-6"
                        icon="flaticon-medal"
                        title="first on field"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste"
                      />
                      <InfoItem
                        gridClass="col-9 col-xl-6"
                        icon="flaticon-game-console"
                        title="easy to reach"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste"
                      />
                      <InfoItem
                        gridClass="col-9 col-xl-6"
                        icon="flaticon-map"
                        title="worldwide services"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste"
                      />
                      <InfoItem
                        gridClass="col-9 col-xl-6"
                        icon="flaticon-technical-support-1"
                        title="24/7 support"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste"
                      />
                    </div>
                  </div>
                  <div className="cta-area">
                    <DefaultBtn
                      btn_className="btn-solid reveal-start"
                      to="/"
                      text="Get in touch"
                    />
                    <div className="signature">
                      <div className="signature-img"></div>
                      <div className="signature-name">CEO &amp; Founder</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="img-area" data-tilt>
                  <div className="image">
                    <img
                      className="about-img img-fluid"
                      loading="lazy"
                      src={AboutImage}
                      alt="Our vision"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End first about div--> */}
          {/* <!-- Start first about div--> */}
          <WhyChooseUs />
          {/* <!--End first about div--> */}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
