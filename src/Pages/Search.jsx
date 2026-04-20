import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import data from "../data.json";
import "../index.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const destination = query.get("destination");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [bookedHotel, setBookedHotel] = useState(null); // New state

  useEffect(() => {
    const storedEmail = window.localStorage.getItem("email");
    setIsLoggedIn(!!storedEmail);
  }, []);

  const handleBook = (hotel) => {
    setLoading(true);
    setShowPopup(false);
    setBookedHotel(hotel); // Save selected hotel

    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 2000);
  };

  const filteredHotels = data.hotels.filter(
    (hotel) => hotel.location.toLowerCase() === destination?.toLowerCase()
  );

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {showPopup && bookedHotel && (
        <div className="popup">
          <div className="popup-content">
            <h4>Booking Confirmed!</h4>
            <p>
              <strong>Hotel:</strong> {bookedHotel.hname} <br />
              <strong>Location:</strong> {bookedHotel.location}, {bookedHotel.country} <br />
              <strong>Price:</strong> {bookedHotel.price} <br />
              <strong>Rating:</strong> {bookedHotel.rating}
            </p>
            <p style={{ marginTop: "1rem", color: "green" }}>
              ✅ Please click a photo of this page and share with us and also complete your payment to <strong>992641516</strong> and send a screenshot to the same number via WhatsApp. <br />
                Thankyou for choosing us.  
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {filteredHotels.length === 0 ? (
        <div className="container mt-4">
          <h4>No hotels found in "{destination}"</h4>
        </div>
      ) : (
        filteredHotels.map((hotel) => (
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
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button
                      type="button"
                      className="btn btn-outline-dark me-4 px-4 me-md-2"
                      onClick={() => handleBook(hotel)}
                      disabled={!isLoggedIn || loading}
                    >
                      {isLoggedIn ? "Book" : "Login to Book"}
                    </button>
                  </div>
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
        ))
      )}
    </>
  );
}

export default Search;
