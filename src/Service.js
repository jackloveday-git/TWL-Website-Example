import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/img5.png";
import img6 from "../src/Pictures/img6.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row row-cols-2">
              <Card
                title="Business Management"
                imgsrc={img1}
                text="A clean and well organized system to manage your business workflow. 
                We will increase productivity, communication, and deliver a team friendly enviornment."
              />
              <Card
                title="Community Management"
                imgsrc={img2}
                text="You can trust us to be the core of your community with enthusiastic and multi-lingual support. We can offer a range of Community building and management services."
              />
              <Card
                title="Utility Engineering"
                imgsrc={img3}
                text="Paving the way to standardized digital utilities. Our plan is to build our brand to be a seal of authenticity for companies getting started or in need of assistance, ask us about our plans for mint date planning contacts and other projects."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
