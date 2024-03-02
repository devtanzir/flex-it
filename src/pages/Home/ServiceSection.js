import React from "react";
import DefaultHeading from "../../components/DefaultHeadding";
import ServiceBox from "../../components/ServiceBox";

const ServiceSection = () => {
  return (
    <>
      <section className="services services-boxed mega-section" id="services">
        <div className="container">
          <DefaultHeading title="services" />

          <div className="row gx-4 gy-4 services-row">
            <div className="col-12 col-md-6 col-lg-4 mx-auto">
              <ServiceBox
                icon="flaticon-web-development"
                title="web development"
              />
              {/* <!-- End First service box   --> */}
            </div>
            <div className="col-12 col-md-6 col-lg-4 mx-auto">
              <ServiceBox
                icon="flaticon-nanotechnology"
                title="Digital Marketing"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mx-auto">
              {/* <!--Start Third service box--> */}
              <ServiceBox icon="flaticon-web-domain" title="SaaS products" />

              {/* <!-- End Third service box--> */}
            </div>
            <div className="col-12 col-md-6 col-lg-4 mx-auto">
              {/* <!--Start fourth service box--> */}
              <ServiceBox icon="flaticon-profile" title="Apps development" />
              {/* <!-- End fourth service box   --> */}
            </div>
            <div className="col-12 col-md-6 col-lg-4 mx-auto">
              {/* <!--Start 5th service box--> */}
              <ServiceBox icon="flaticon-search" title="SEO services" />
              {/* <!-- End 5th service box--> */}
            </div>
            <div className="col-12 col-md-6 col-lg-4 mx-auto">
              {/* <!--Start 6th service box--> */}
              <ServiceBox icon="flaticon-strategy" title="data analysis" />
              {/* <!-- End 6th service box--> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
