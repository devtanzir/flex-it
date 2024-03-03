import React from "react";
import SwiperSlide from "../../components/SwiperSlide";
import Client1 from "../../assets/Image/clients-logos/1-white.png";
import Client2 from "../../assets/Image/clients-logos/2-white.png";
import Client3 from "../../assets/Image/clients-logos/3-white.png";
import Client4 from "../../assets/Image/clients-logos/4-white.png";
import Client5 from "../../assets/Image/clients-logos/5-white.png";
import Client6 from "../../assets/Image/clients-logos/6-white.png";
import Client7 from "../../assets/Image/clients-logos/7-white.png";

const ClientSection = () => {
  return (
    <>
      <section
        className="our-clients mega-section wow fadeInUp"
        id="our-clients"
        data-wow-delay="0.2s"
      >
        <div className="container">
          <div className="sec-heading centered">
            <div className="content-area">
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                trusted by over 500 clients around the world
              </h2>
            </div>
          </div>
          <div className="clients-logos d-flex align-items-center justify-content-around flex-wrap">
            {/* <!--Swiper--> */}
            <div className="swiper-container">
              <div
                className="swiper-wrapper clients-logo-wrapper wow fadeIn"
                data-wow-delay=".02s"
              >
                <SwiperSlide img={Client1} />
                <SwiperSlide img={Client2} />
                <SwiperSlide img={Client3} />
                <SwiperSlide img={Client4} />
                <SwiperSlide img={Client5} />
                <SwiperSlide img={Client6} />
                <SwiperSlide img={Client7} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSection;
