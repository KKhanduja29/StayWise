import React from "react";
import logo2 from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import deals from "../assets/deals.svg";
import date from "../assets/date.svg";
import travel from "../assets/travel.webp";
import "../index.css";
import { g1, g2, g3, g4 } from "../image";
import g5 from "../assets/gallery-1.jpg";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={logo2}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Hotel and Travel Booking
            </h1>
            <p class="lead">
              StayWise is your one-stop destination for seamless hotel
              reservations and travel bookings. Whether you're planning a
              vacation, a business trip, or a weekend getaway, we provide a
              hassle-free experience with the best deals and a user-friendly
              platform.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                class="btn btn-outline-dark btn-lg px-4 me-md-2"
                fdprocessedid="p2c7on"
                onClick={() => navigate("/Hotel")}
              >
                Hotel
              </button>
              <button
                type="button"
                class="btn btn-outline-dark btn-lg px-4"
                fdprocessedid="dv1dnd"
                onClick={() => navigate("/Travel")}
              >
                Travel
              </button>
            </div>
          </div>
        </div>
        <section class="gallery-section spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title">
                  <span>Our Gallery</span>
                  <h2>Discover Our Work</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="gallery-item set-bg1">
                  <div class="gi-text">
                    <h3>Room Luxury</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="gallery-item set-bg2">
                      <div class="gi-text">
                        <h3>Room Luxury</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="gallery-item set-bg3" >
                      <div class="gi-text">
                        <h3>Room Luxury</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="gallery-item large-item set-bg4" >
                  <div class="gi-text">
                    <h3>Room Luxury</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="conatiner12">
          <h2>Fast facts</h2>
          <p>Sleep easy and explore the india with our travel facility</p>
          <div className="con">
            <div className="one">
              <span class="material-symbols-outlined">hotel</span>
              <h6>Hotel brands to choose from city</h6>
              <p>20+</p>
            </div>
            <div className="one">
              <span class="material-symbols-outlined">groups</span>
              <h6>Happy Customer</h6>
              <p>500+</p>
            </div>
            <div className="one">
              <span class="material-symbols-outlined">travel_explore</span>
              <h6>Travel Easy And Our Happy Customer</h6>
              <p>300+</p>
            </div>
          </div>
        </div>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img src={deals} alt="" width="55%" />
            </div>
            <h3 class="fs-2 text-body-emphasis">Great Hotel Deals</h3>
            {/* <p>
              We search for deals with the world’s leading hotels, and share our
              findings with you.
            </p> */}
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img src={date} alt="" width="55%" />
            </div>
            <h3 class="fs-2 text-body-emphasis text-center">
              Up-to-date Updates
            </h3>
            {/* <p>
              We always show you the most recent pricing overview we can find,
              so you know exactly what to expect.
            </p> */}
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 all">
              <img src={travel} />
            </div>
            <h3 class="fs-2 text-body-emphasis">Travel Booking</h3>
            {/* <p>
             Travel with trusted company
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
