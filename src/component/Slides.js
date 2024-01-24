import { Carousel } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import CardData from "./CardData";

const Slides = () => {
  return (
    <div>
      <div className="card mt-2">
        <div className="card-body  p-1">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{borderRadius:"40px"}}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="istockphoto-1158623408-612x612.jpg"
                  className="d-block w-100 img-fluid"
                  alt=" "
                  style={{width:"1500px", height:"300px"}}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="istockphoto-1140567402-612x612.jpg"
                  className="d-block w-100 img-fluid"
                  alt=""
                  style={{width:"1500px", height:"300px"}}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="istockphoto-1315621909-612x612.jpg"
                  className="d-block w-100 img-fluid"
                  alt=""
                  style={{width:"1500px", height:"300px"}}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;
