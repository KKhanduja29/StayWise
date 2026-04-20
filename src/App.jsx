import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
// import Upper from "./Components/Upper";
import About from "./Pages/About";
import Hotel from "./Pages/Hotel";
import Travel from "./Pages/Travel";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Search from "./Pages/Search";
import Searchh from "./Pages/Searchh";
import Book from "./Pages/Book";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/about" element={<About/>} />
        <Route path="/hotel" element={<Hotel/>} />
        <Route path="/travel" element={<Travel/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/searchh" element={<Searchh/>}/>
        <Route path="/book" element={<Book/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
