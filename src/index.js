import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/vendors/bootstrap.min.css";
import "./assets/css/vendors/animate.css";
import "./assets/css/vendors/swiper-bundle.min.css";
import "./assets/css/vendors/flaticon/flaticon.css";
import "./assets/css/vendors/all.min.css";
import "./assets/css/vendors/bootstrap-icons-1.9.1/bootstrap-icons.css";
import "./assets/css/vendors/jquery.fancybox.min.css";
import "./assets/css/main-LTR.css";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import {
  About,
  Blog1,
  Blog2,
  Blog3,
  Contact,
  FAQ,
  Home,
  Home2,
  Home3,
  Home4,
  Home5,
  NotFound,
  OurTeam,
  PortfolioBlocks,
  PortfolioGrid,
  PortfolioSingle,
  PortfolioSlider,
  PricingPlans,
  Services,
  ServicesSingle,
  SingleBlog,
  TeamMember,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="home2" element={<Home2 />} />
      <Route path="home3" element={<Home3 />} />
      <Route path="home4" element={<Home4 />} />
      <Route path="home5" element={<Home5 />} />
      <Route path="services" element={<Services />} />
      <Route path="services-single" element={<ServicesSingle />} />
      <Route path="portfolio-grid" element={<PortfolioGrid />} />
      <Route path="portfolio-blocks" element={<PortfolioBlocks />} />
      <Route path="portfolio-Slider" element={<PortfolioSlider />} />
      <Route path="portfolio-single" element={<PortfolioSingle />} />
      <Route path="blog-page1" element={<Blog1 />} />
      <Route path="blog-page2" element={<Blog2 />} />
      <Route path="blog-page3" element={<Blog3 />} />
      <Route path="single-post" element={<SingleBlog />} />
      <Route path="pricing-plans" element={<PricingPlans />} />
      <Route path="team" element={<OurTeam />} />
      <Route path="team-member" element={<TeamMember />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="404" element={<NotFound />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
