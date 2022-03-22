import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="my-3 py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper border-bottom-3px">
              <div className="menu">
                <div className="d-block d-lg-flex align-items-lg-center pb-4 w-100">
                  <Link
                    className="text-decoration-none d-block mx-5 ms-lg-0 me-5 text-uppercase"
                    to="#"
                  >
                    mail
                  </Link>
                  <Link
                    className="text-decoration-none d-block mx-5 text-uppercase"
                    to="#"
                  >
                    twitter
                  </Link>
                  <Link
                    className="text-decoration-none d-block mx-5 text-uppercase"
                    to="#"
                  >
                    linkedin
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="wrapper position-relative w-110px mx-auto mx-lg-0">
              <div style={{ height: "200px" }}></div>
              {/* <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="200px"
                height="200px"
                viewBox="0 0 300 300"
                enable-background="new 0 0 300 300"
                xmlSpace="preserve"
              >
                <defs>
                  <path
                    id="circlePath"
                    d=" M 80, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlinkTo="#circlePath" fill="none"></use>
                  <text fill="#000">
                    <textPath className="fw-bold" xlinkTo="#circlePath">
                      Bullet with text - Bullet with text - Bullet with text
                    </textPath>
                  </text>
                </g>
              </svg> */}
              <i className="fs-3 fab fa-app-store-ios position-absolute top-50 start-50 translate-middle"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
