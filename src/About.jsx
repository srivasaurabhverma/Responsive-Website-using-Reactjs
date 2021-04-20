import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/webdevelop.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome To About Page"
        imgsrc={web}
        visit="/contact"
        bname="Contact Now"
      />
    </>
  );
};

export default About;
