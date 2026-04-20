import React, { useState } from "react";
import axios from "axios"; // Import axios
import "../index.css";
import kids from "../assets/contactUsBoy.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/contact", formData)
      .then((result) => {
        alert("Submit , We Contact You Soon!");
        setFormData({
          name: "",
          email: "",
          query: "",
          phone: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Error saving data");
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-center">
        <h5>We are here to help</h5>
        <h6>
          Have questions? At Booking System, we love talking to our clients.
        </h6>
      </div>
      <div className="container col-xxl-8 px-4 py-1">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={kids}
              className="d-block mx-lg-auto img-fluid"
              alt="Contact Us"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="text" className="form-label">
                    Query
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-outline-dark">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
