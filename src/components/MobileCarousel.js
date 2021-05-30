import React from "react";
import pics4 from "../img/pics4.png";
import pics6 from "../img/pics7.png";
import pics7 from "../img/pics6.png";

function MobileCarousel() {
  return (
    <div className="mobile">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-wrapper">
            <img src={pics4} className="" alt="First slide" />
            </div>
            <div className="carousel-caption animate__animated animate__backInDown animate__slow overlay">
              <h5 className="text-info fs-5 fw-bold">Latest Collection 2021</h5>
              <h5 className="text-display">New Arrivals</h5>
              <div>
                <button className="mern-button px-5 py-2 border-3 border-info">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
            <img src={pics6} className="" alt="Second slide" />
            </div>
            <div className="carousel-caption animate__animated animate__backInDown animate__slow overlay">
              <h5 className="text-info fs-5 fw-bold">Latest Collection 2021</h5>
              <h5 className="text-display">New Arrivals</h5>
              <div>
                <button className="mern-button px-5 py-2 border-3 border-info">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-wrapper">
            <img src={pics7} className="" alt="Third slide" />
            </div>
            <div className="carousel-caption animate__animated animate__backInDown animate__slow overlay">
              <h5 className="text-info fs-5 fw-bold">Latest Collection 2021</h5>
              <h5 className="text-display">New Arrivals</h5>
              <div>
                <button className="mern-button px-5 py-2 border-3 border-info">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileCarousel;
