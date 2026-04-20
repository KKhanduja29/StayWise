import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { use } from "react";
import { logo2 } from "../image";
import "../index.css";
import Login from "../Pages/Login";
import { useState } from "react";
import { useEffect } from "react";
// import hotel from '../Pages/Hotel'

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('email'); // Clear user data
    localStorage.removeItem('name'); // Clear user data
    localStorage.removeItem('psw'); // Clear user data
    alert("You Are Logged Out!")
    window.location.href = '/'; 
};
  const navigate = useNavigate();

  const [email, setemail] = useState("");

  useEffect(() => {
    console.log("local", localStorage.getItem("email"));
    // Retrieve the username from local storage
    // const storedUsername = localStorage.getItem('email');
    // console.log('cont',storedUsername);
    // if (storedUsername) {
    //   // setemail(localStorage.getItem('email'))
    // }     
    setemail(localStorage.getItem("email"));
    console.log("email", email);
  },[]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-light rounded"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-lg-flex"
            id="navbarsExample11"
          >
            <a className="navbar-brand col-lg-3 me-0 fw-semibold" href="/">
              {/* Booking System */}
              <img src={logo2} width="200px" className="image" />
            </a>
            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <NavLink to="/" className="text-decoration-none">
                <li className="nav-item">
                  <a className="nav-link fw-semibold" aria-current="page">
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink className="text-decoration-none" to="/about">
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#">
                    About
                  </a>
                </li>
              </NavLink>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul className="dropdown-menu">
                  <NavLink to="/hotel" className="text-decoration-none">
                    <li>
                      <a className="dropdown-item">Hotel Booking</a>
                    </li>
                  </NavLink>

                  <NavLink className="text-decoration-none" to="/travel">
                    <li>
                      <a className="dropdown-item">Traveling</a>
                    </li>
                  </NavLink>
                  {/* <NavLink className="text-decoration-none" to="/some">
                    <li>
                      <a className="dropdown-item">Some Features Add On</a>
                    </li>
                  </NavLink> */}
                </ul>
              </li>
              <NavLink className="text-decoration-none" to="/contact">
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#">
                    Contact Us
                  </a>
                </li>
              </NavLink>
            </ul>


            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            {!email ? (
              <>
              <button
                className="btn btn-outline-dark me-2"
                type="submit"
                onClick={() => navigate("/Signup")}
                >
                Register
              </button>
              <button
                className="btn btn-outline-dark"
                type="submit"
                onClick={() => navigate("/Login")}
                >
                Login <br />
              </button>
              </>
            ) : (
              <>
               <button className="btn btn-outline-dark me-2" ><h6>Welcome,{email.split("@gmail.com")}</h6></button>
              <button className="btn btn-outline-dark me-4" onClick={handleLogout} >Logout</button>
              </>
            ) }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
