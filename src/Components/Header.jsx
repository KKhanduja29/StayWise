import React from "react";
import { bg, slider2, slider3, slider4 } from "../image";
import { NavLink, useNavigate } from "react-router-dom";
import { use } from "react";
import { train } from "../image";
import Navbar from "./Navbar";
import Service from "../Pages/Service";
import Testimonial from "../Pages/Testimonial";
import Search from "../Pages/Search";

function Header() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const queryParams = new URLSearchParams(formData).toString();

    navigate(`/Search?${queryParams}`);
  };
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg} className="d-block w-100" height="500px" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Hotel Booking</h3>
              <p>
                <h5> "Find Your Perfect Stay–Book Now!"</h5>
                Welcome to Booking System, your ultimate destination for
                hassle-free hotel bookings. Whether you're planning a relaxing
                getaway, a business trip, or a family vacation, we make finding
                the perfect stay simple and convenient.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100"
              height="500px"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Travel Booking</h3>
              <p>
                <h5> "Seamless Journeys, Unforgettable Adventures!"</h5>
                Discover and book your perfect getaway with our seamless travel
                booking platform.Plan your trip effortlessly, compare prices,
                and enjoy a hassle-free booking experience. Start your journey
                today!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider4}
              className="d-block w-100"
              height="500px"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Hotel and Travel Booking</h3>
              <p>This is one platform for Hotel and Traveling booking.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container px-4 py-5" id="custom-cards">
        <Service />
        {/* Search Box */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 bg-white shadow p-4 rounded">
              <h5>Check Booking Availability</h5>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-2">
                    <label
                      htmlFor="destination"
                      style={{ fontWeight: "500" }}
                      className="text-center"
                    >
                      Destination
                    </label>
                    <div className="form-floating">
                      <select
                        name="destination"
                        style={{ height: "35px" }}
                        required
                      >
                        <option value="">Select Destination</option>
                        <option value="Indore">Indore</option>
                        <option value="Ujjain">Ujjain</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Kota">Kota</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <label
                      htmlFor="checkin"
                      style={{ fontWeight: "500" }}
                      className="text-center"
                    >
                      Check-In
                    </label>
                    <input
                      type="date"
                      name="checkin"
                      className="form-control shadow-none"
                      required
                    />
                  </div>

                  <div className="col-lg-3">
                    <label
                      htmlFor="checkout"
                      style={{ fontWeight: "500" }}
                      className="text-center"
                    >
                      Check-Out
                    </label>
                    <input
                      type="date"
                      name="checkout"
                      className="form-control shadow-none"
                      required
                    />
                  </div>

                  <div className="col-lg-1">
                    <label
                      htmlFor="adults"
                      style={{ fontWeight: "500" }}
                      className="text-center"
                    >
                      Adult
                    </label>
                    <div className="form-floating">
                      <select name="adults" style={{ height: "35px" }} required>
                        <option value="">Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-1">
                    <label
                      htmlFor="children"
                      style={{ fontWeight: "500" }}
                      className="text-center"
                    >
                      Children
                    </label>
                    <div className="form-floating">
                      <select
                        name="children"
                        style={{ height: "35px" }}
                        required
                      >
                        <option value="">Select</option>
                        <option value="0">Zero</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-1">
                    <label
                      htmlFor="rooms"
                      style={{ fontWeight: "500" }}
                      className="text-center"
                    >
                      Room
                    </label>
                    <div className="form-floating">
                      <select name="rooms" style={{ height: "35px" }} required>
                        <option value="">Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-outline-dark shadow-none"
                      style={{ width: "21%" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <Testimonial />
      </div>
    </>
  );
}

export default Header;
