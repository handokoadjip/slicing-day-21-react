import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-light py-4 mb-5">
      <div className="container d-flex align-items-center">
        <div className="address w-25">
          <p className="mb-0 fw-medium text-uppercase">
            christina michelaitsch
          </p>
        </div>

        <Link className="navbar-brand text-center fw-medium" to="#">
          <i className="fab fa-app-store-ios"></i>
        </Link>
      </div>
    </nav>
  );
};

export default index;
