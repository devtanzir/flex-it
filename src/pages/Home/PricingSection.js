import React from "react";
import DefaultHeading from "../../components/DefaultHeading";
import DefaultHeadingBtn from "../../components/DefaultHeadingBtn";
import PricingPlans from "../../components/PricingPlans";

const PricingSection = () => {
  return (
    <>
      <section className="pricing mega-section" id="pricing-1">
        <div className="container">
          <DefaultHeading
            title="pricing plans"
            heading1="affordable"
            heading2="pricing plans"
            para1="Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis"
            para2="id atque dignissimos repellat quae ullam."
          >
            <DefaultHeadingBtn text="see all plans" />
          </DefaultHeading>

          <div className="row">
            {/* <!--First Plan--> */}
            <PricingPlans icon="flaticon-nft-1" title="free plan" price="00" />
            {/* <!--Second-plan--> */}
            <PricingPlans
              icon="flaticon-virtual-reality"
              title="standerd plan"
              price="85"
            />
            {/* <!--Third-plan--> */}
            <PricingPlans
              featured="featured"
              icon="flaticon-box"
              title="pro plan"
              price="150"
            />
            {/* <!--fourth-plan--> */}
            <PricingPlans
              icon="flaticon-basic-shapes"
              title="ultimate plan"
              price="210"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
