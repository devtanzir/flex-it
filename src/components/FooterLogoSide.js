import React from "react";

const FooterLogoSide = (props) => {
  return (
    <>
      <div className="col-12 col-md-8 col-lg-4 footer-col">
        <img
          className="img-fluid footer-logo"
          loading="lazy"
          src={props.img}
          alt="logo"
        />
        <div className="footer-col-content-wrapper">
          <p className="footer-text-about-us">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus facere modi possimus dignissimos, aliquam nobis eaque?
            Voluptatem magnam quisquam rem.
          </p>
        </div>
        <div className="form-area">
          <div className="mailchimp-form">
            <form className="one-field-form">
              <div className="field-group">
                <label className="email-label" for="email-input">
                  Subscribe to our news letter
                </label>
                <input
                  className="email-input"
                  type="email"
                  value=""
                  name="EMAIL"
                  id="email-input"
                  placeholder="Email Address"
                  autocomplete="off"
                />
                <div className="cta-area">
                  <input
                    className="btn-solid subscribe-btn"
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                  />
                </div>
              </div>
              <span className="email-notice">
                *we will not share your personal info
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLogoSide;
