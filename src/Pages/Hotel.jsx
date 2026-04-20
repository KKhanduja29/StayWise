import React from "react";
import "../index.css";
import { r1, r2, r3, r4, r5, r6 } from "../image";

function Hotel() {
  return (
    <>
      <div class="our_room">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Our Hotel Rooms</h2>
                <p>Different locations and different hotels rooms</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div id="serv_hover" class="room">
                <div class="room_img">
                  <figure>
                    <img src={r1} alt="#" />
                  </figure>
                </div>
                <div class="bed_room">
                  <h3>Indore</h3>
                  <p>Indulge in elegance – your perfect stay awaits!</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div id="serv_hover" class="room">
                <div class="room_img">
                  <figure>
                    <img src={r2} alt="#" />
                  </figure>
                </div>
                <div class="bed_room">
                  <h3>Ujjain</h3>
                  <p>A touch of class, a world of comfort.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div id="serv_hover" class="room">
                <div class="room_img">
                  <figure>
                    <img src={r3} alt="#" />
                  </figure>
                </div>
                <div class="bed_room">
                  <h3>Mumbai</h3>
                  <p>Where sophistication meets relaxation.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div id="serv_hover" class="room">
                <div class="room_img">
                  <figure>
                    <img src={r4} alt="#" />
                  </figure>
                </div>
                <div class="bed_room">
                  <h3>Delhi</h3>
                  <p>Comfort on a budget – stay smart, stay cozy!</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div id="serv_hover" class="room">
                <div class="room_img">
                  <figure>
                    <img src={r5} alt="#" />
                  </figure>
                </div>
                <div class="bed_room">
                  <h3>Jaipur</h3>
                  <p>Relax, unwind, and enjoy budget-friendly comfort.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div id="serv_hover" class="room">
                <div class="room_img">
                  <figure>
                    <img src={r6} alt="#" />
                  </figure>
                </div>
                <div class="bed_room">
                  <h3>Kota</h3>
                  <p>More than just a stay – it's a productive getaway!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-outline-dark"> <a href={"/Searchh"} target="_blank" className="text-decoration-none">Explore Hotels</a></button>
        </div>
      </div>
    </>
  );
}

export default Hotel;
