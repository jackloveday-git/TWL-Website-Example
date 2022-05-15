import React from "react";
import CommonAbout from "./CommonAbout";
import web from "../src/Pictures/TWLogo_bw.png";

function About() {
  return (
    <>
      <CommonAbout
        name="The Key to your hands off solution"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
