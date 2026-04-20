import React, { useState } from "react";
import data from "../data.json";
import "../index.css";

function Search() {
  const [query, setQuery] = useState("");

  // Filter hotels based on query
  const filteredHotels = data.hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="search-bar container mt-4">
        <input
          type="text"
          placeholder="Search hotels..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
        />
      </div>

      {filteredHotels.map((hotel) => (
        <div className="box" key={hotel.id}>
          <div className="container col-m-8">
            <div className="row flex-lg-row-reverse align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <h5 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">
                  {hotel.hname}
                </h5>
                <p className="lead">
                  <strong>Rating: {hotel.rating}</strong> <br />
                  <strong>Location: {hotel.location}</strong> <br />
                  <strong>Country: {hotel.country}</strong> <br />
                  <strong>Price: {hotel.price}</strong>
                </p>
                {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    className="btn btn-outline-dark me-4 px-4 me-md-2"
                  >
                    Book
                  </button>
                </div> */}
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={hotel.img}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Hotel"
                  width="1000"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Search;
