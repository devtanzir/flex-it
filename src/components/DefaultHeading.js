import React from "react";

const DefaultHeading = (props) => {
  return (
    <>
      <div className={`sec-heading ${props.className}`}>
        <div className="content-area">
          <span className="pre-title wow fadeInUp" data-wow-delay=".2s">
            {props.title}
          </span>
          <h2 className="title wow fadeInUp" data-wow-delay=".4s">
            <span className="hollow-text">{props.heading1}</span>{" "}
            {props.heading2}
            {props.featuredText && (
              <span className="featured-text">
                {props.featuredText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                </svg>
              </span>
            )}
          </h2>
          {props.para1 && (
            <p className="subtitle wow fadeInUp" data-wow-delay=".6s">
              {props.para1}
              <br />
              {props.para2}
            </p>
          )}
        </div>
        {props.children}
      </div>
    </>
  );
};

export default DefaultHeading;
