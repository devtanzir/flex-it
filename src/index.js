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
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
