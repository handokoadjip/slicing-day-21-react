import { Img5, Img6 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-3 py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="wrapper">
              <figure className="m-0">
                <img
                  className="h-image-80vh w-100 my-3"
                  src={Img5}
                  alt="image-5"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="wrapper">
              <figure className="m-0">
                <img
                  className="h-image-80vh w-100 my-3"
                  src={Img6}
                  alt="image-6"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
