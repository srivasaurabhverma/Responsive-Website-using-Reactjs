import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/webdevimg.jpg";
import Radium, { StyleRoot } from 'radium';

const Common = (props) => {
  const mystyle = {
  "@media only screen and (max-width: 992px)": {
    display:'none',
  },
};
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  className="col-md-6 pt-5 order-2 order-lg-1 pt-lg-0 d-flex justify-content-center flex-column"
                  id="center"
                >
                  <h1 className="my-3">
                    {props.name}{" "}
                    <strong className="brand-name">Webdeveloper </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talended developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      className="btn btn-primary"
                      to={props.visit}
                      type="submit"
                      id="btn"
                    >
                      {props.bname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt=""
                    className="img-fluid my-3"
                    id="animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
