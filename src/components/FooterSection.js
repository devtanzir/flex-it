import React from "react";
import FooterLogoSide from "./FooterLogoSide";
import Logo from "../assets/Image/logo/logo-colored.png";
import FooterLinks from "./FooterLinks";
import FooterContactCard from "./FooterContactCard";
import ListedItem from "./ListedItem";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <>
      <footer className="page-footer dark-color-footer" id="page-footer">
        <div
          className="overlay-photo-image-bg"
          data-bg-img="assets/images/sections-bg-images/footer-bg-1.jpg"
          data-bg-opacity=".25"
        ></div>
        <div className="container">
          <div className="row footer-cols">
            <FooterLogoSide img={Logo} />
            <div className="col-6 col-lg-2 footer-col">
              <h2 className="footer-col-title">useful links</h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu">
                  <FooterLinks to="/" text="Google" />
                  <FooterLinks to="/" text="Dribbble" />
                  <FooterLinks to="/" text="linkedIn" />
                  <FooterLinks to="/" text="wikipedia" />
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2 footer-col">
              <h2 className="footer-col-title">Resources</h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu">
                  <FooterLinks to="/" text="support" />
                  <FooterLinks to="/" text="dashboard" />
                  <FooterLinks to="/" text="drivers" />
                  <FooterLinks to="/" text="projects" />
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4 footer-col">
              <h2 className="footer-col-title">contact information</h2>
              <div className="footer-col-content-wrapper">
                <FooterContactCard
                  icon="bi-envelope "
                  className="text-lowercase info"
                  to="mailto:example@support.com"
                  links="example@support.com"
                />
                <FooterContactCard
                  icon="bi-geo-alt"
                  text="5 Xyz st., Abc, alexandria, egypt."
                />
                <FooterContactCard
                  icon="bi-phone"
                  className="info"
                  to="tel:+20123456789"
                  links="+20123456789"
                />
                <div className="contact-info-card">
                  <div className="social-icons">
                    <div className="sc-wrapper dir-row sc-size-32">
                      <ul className="sc-list">
                        <ListedItem
                          Li_Class="sc-item"
                          Li_Title="Facebook"
                          Link_Class="sc-link"
                          Link_to="/"
                          Link_Title="social media icon"
                        >
                          <i className="fab fa-facebook-f sc-icon"></i>
                        </ListedItem>
                        <ListedItem
                          Li_Class="sc-item"
                          Li_Title="youtube"
                          Link_Class="sc-link"
                          Link_to="/"
                          Link_Title="social media icon"
                        >
                          <i className="fab fa-youtube sc-icon"></i>
                        </ListedItem>
                        <ListedItem
                          Li_Class="sc-item"
                          Li_Title="instagram"
                          Link_Class="sc-link"
                          Link_to="/"
                          Link_Title="social media icon"
                        >
                          <i className="fab fa-instagram sc-icon"></i>
                        </ListedItem>
                        <ListedItem
                          Li_Class="sc-item"
                          Li_Title="twitter"
                          Link_Class="sc-link"
                          Link_to="/"
                          Link_Title="social media icon"
                        >
                          <i className="fab fa-twitter sc-icon"></i>
                        </ListedItem>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrights">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 d-flex justify-content-start">
                <p className="creadits">
                  &copy; 2024 Created by:
                  <Link className="link" to="/">
                    tanzir-themes
                  </Link>
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-end">
                <div className="terms-links">
                  <Link to="/">Terms of Use </Link> |
                  <Link
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#privacyPolicyModal"
                  >
                    Privacy Policy.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
