import React from "react";
import { Link } from "react-router-dom";

const SwiperSlide = (props) => {
  return (
    <>
      <div className="swiper-slide">
        <div className="client-logo">
          <Link href="/">
            <img
              className="img-fluid logo"
              loading="lazy"
              src={props.img}
              alt="Client"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SwiperSlide;
