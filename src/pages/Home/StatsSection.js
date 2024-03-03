import React from "react";
import StatsBox from "../../components/StatsBox";

const StatsSection = () => {
  return (
    <>
      <section className="stats js-stats-counter mega-section">
        <div
          className="overlay-photo-image-bg"
          data-bg-img="assets/images/sections-bg-images/pattern-bg-3.jpg"
          data-bg-opacity=".2"
        ></div>
        <div className="container">
          <div className="stats-inner">
            <div className="row">
              <StatsBox
                icon="flaticon-project-management"
                start="10"
                end="750"
                description="finished projects"
              />
              <StatsBox
                icon="flaticon-content-management"
                start="0"
                end="23"
                description="Created jobs"
              />
              <StatsBox
                icon="flaticon-user"
                start="0"
                end="200"
                description="happy customers"
              />
              <StatsBox
                icon="flaticon-aim"
                start="0"
                end="28"
                description="years Of exprience"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
