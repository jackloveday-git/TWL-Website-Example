import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc, text }) {
  return (
    <>
      <div className="col-md-4 col-10">
        <div className="card">
          <img
            src={imgsrc}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <NavLink to="/contact" className="btn btn-primary">
              Get Quote
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
