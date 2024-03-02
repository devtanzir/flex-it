import React from "react";
import { Link } from "react-router-dom";

const DefaultHeading = (props) => {
  return (
    <>
      <div class="sec-heading">
        <div class="content-area">
          <span class="pre-title wow fadeInUp" data-wow-delay=".2s">
            {props.title}
          </span>
          <h2 class="title wow fadeInUp" data-wow-delay=".4s">
            <span class="hollow-text">services</span> we offer
          </h2>
          <p class="subtitle wow fadeInUp" data-wow-delay=".6s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis
            <br />
            id atque dignissimos repellat quae ullam.
          </p>
        </div>
        <div class="cta-area wow fadeInUp" data-wow-delay=".8s">
          <Link class="cta-btn btn-solid" to="/">
            see all services <i class="bi bi-arrow-right icon"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DefaultHeading;
