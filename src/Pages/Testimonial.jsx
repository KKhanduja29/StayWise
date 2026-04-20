import React from "react";
import one from "../assets/1.jpeg";
import two from "../assets/2.jpeg";
import three from "../assets/3.jpeg";
import four from "../assets/4.jpeg";
import "../index.css";

function Testimonial() {
  return (
    <>
      <div className="container">
        <h2 className="text-center">Feedback</h2>
        <p className="text-center">Customer Say's</p>
        <div class="card-group" style={{gap:"10px"}}>
          <div class="card">
            <img src={one} class="card-img-top" alt="..." height={"220px"} />
            <div class="card-body">
              <h5 class="card-title">Advik</h5>
              <p class="card-text">
              ⭐⭐⭐⭐⭐ <br />
              "Seamless Booking Experience!" <br />
              The platform is super easy to use. I booked my hotel and transportation in just a few minutes. Highly recommended!
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src={two} class="card-img-top" alt="..." height={"220px"}/>
            <div class="card-body">
              <h5 class="card-title">Kashish</h5>
              <p class="card-text">
              ⭐⭐⭐⭐⭐ <br />
              "Best Prices and Options!" <br />
              I found the best deals on hotels and flights compared to other platforms. Definitely my go-to travel booking site.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src={three} class="card-img-top" alt="..." height={"220px"} />
            <div class="card-body">
              <h5 class="card-title">Rahul</h5>
              <p class="card-text">
              ⭐⭐⭐⭐⭐ <br />
              "User-friendly and Reliable!" <br />
              I loved how easy it was to navigate the website. The filters helped me find the perfect stay within my budget.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
