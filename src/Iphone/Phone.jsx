import React from "react";
import PropsTypes from 'prop-types';


export default function Phone(props) {
    const {desc, name ,img}= props;
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">

    <div className="container">
      <div className="card bg-light" style={{ width: 300 }}>
        <img
          className="card-img-top"
          src={img}
          alt="Card image"
          style={{ maxWidth: "100%", height: 250 }}
        />
        <div className="card-body text-center">
          <h4 className="card-title text-center">{name}</h4>
          <p className="card-text">
            {desc}
          </p>
          <a href="#" className="btn btn-primary">
            Detail
          </a>
          <a href="#" className="btn btn-danger">
            Cart
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
