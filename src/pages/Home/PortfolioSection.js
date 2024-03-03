import React from "react";
import DefaultHeading from "../../components/DefaultHeading";
import DefaultHeadingBtn from "../../components/DefaultHeadingBtn";
import PortfolioBox from "../../components/PortfolioBox";
import PortfolioImg1 from "../../assets/Image/portfolio/1.jpg";
import PortfolioImg2 from "../../assets/Image/portfolio/2.jpg";
import PortfolioImg3 from "../../assets/Image/portfolio/3.jpg";
import PortfolioImg4 from "../../assets/Image/portfolio/4.jpg";
import PortfolioImg5 from "../../assets/Image/portfolio/5.jpg";
import PortfolioImg6 from "../../assets/Image/portfolio/6.jpg";
import PortfolioList from "../../components/PortfolioList";

const PortfolioSection = () => {
  return (
    <>
      <section
        className="portfolio portfolio-blocks mega-section"
        id="portfolio"
      >
        <div className="container">
          <DefaultHeading
            title="portfolio"
            heading1="Awesome"
            heading2="portfolio"
          >
            <DefaultHeadingBtn text="see more" />
          </DefaultHeading>
          <div className="portfolio-wrapper">
            {/* <!--a menu of links to show the photos users needs   --> */}
            <ul
              className="portfolio-btn-list wow fadeInUp"
              data-wow-delay=".2s"
            >
              <PortfolioList activeclass="active" filter="*" text="All" />
              <PortfolioList filter=".mobile" text="mobile apps" />
              <PortfolioList filter=".web" text="cloud" />
              <PortfolioList filter=".data" text="data analaysis" />
              <PortfolioList filter=".hosting" text="hosting" />
            </ul>
            <div className="portfolio-group wow fadeIn" data-wow-delay=".4s">
              <div className="row">
                <PortfolioBox img={PortfolioImg1} title="mobile apps" />
                <PortfolioBox img={PortfolioImg2} title="cloud" />
                <PortfolioBox img={PortfolioImg3} title="data analaysis" />
                <PortfolioBox img={PortfolioImg4} title="hosting" />
                <PortfolioBox img={PortfolioImg5} title="SEO" />
                <PortfolioBox img={PortfolioImg6} title="other category" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
