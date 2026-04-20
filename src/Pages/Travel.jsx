import React from "react";
import { train22 } from "../image";

function Travel() {
  return (
    <>
      <div class="container col-xxl-8 px-4 py-3">
        <h2 className="text-center">We Provide Train Booking Facility</h2>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={train22}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Train Booking
            </h1>
            <p class="lead">
              A train booking system allows users to search for trains, check
              availability, select seats, and book tickets for their journey.In
              this we fetch IRCTC Website.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                class="btn btn-outline-dark btn-lg px-4"
                fdprocessedid="jaj0jqo"
              >
                <a href="https://www.irctc.co.in/nget/train-search" target="_blank" className="train">
                  Find Train
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;
