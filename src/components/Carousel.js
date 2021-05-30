import React from "react";
import pics4 from "../img/pics4.png";
import pics6 from "../img/pics6.png";
import pics7 from "../img/pics7.png";

function Carousel() {
  return (
    <div className="deskstop">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container d-flex justify-content-between align-items-center px-sm-5">
              <div>
                <h5 className="text-info">Latest Collection 2021</h5>
                <h5 className="text-display">New Arrivals</h5>
                <div>
                    <button className="mern-button px-5 py-2 border-3 border-info">Shop Now</button>
                </div>
              </div>
              <div className="d-flex">
                <img src={pics4} alt="First-slide" className="img-style img-fluid" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container d-flex justify-content-between align-items-center px-sm-5">
              <div>
                <h5 className="text-info">Latest Collection 2021</h5>
                <h5 className="text-display">New Arrivals</h5>
                <div>
                    <button className="mern-button px-5 py-2 border-3 border-info">Shop Now</button>
                </div>
              </div>
              <div className="d-flex">
                <img src={pics7} alt="Second-slide" className="img-style img-fluid" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container d-flex justify-content-between align-items-center px-sm-5">
              <div>
                <h5 className="text-info">Latest Collection 2021</h5>
                <h5 className="text-display">New Arrivals</h5>
                <div>
                    <button className="mern-button px-5 py-2 border-3 border-info">Shop Now</button>
                </div>
              </div>
              <div className="d-flex">
                <img src={pics6} alt="Third-slide" className="img-style img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
