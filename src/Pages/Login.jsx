import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    psw: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const win = window.localStorage;

  const handleSubmit = (e) => {
    e.preventDefault();
    win.clear();

    let isValid = true;
    let validationErrors = {};

    // Validation
    if (formData.name === "" || formData.name === null) {
      isValid = false;
      validationErrors.name = "Name Required";
    }

    if (!formData.email) {
      isValid = false;
      validationErrors.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Email Is Not Valid";
    }
    if (!formData.psw) {
      isValid = false;
      validationErrors.psw = "Password Required";
    }

    if (!isValid) {
      setErrors(validationErrors);
      setValid(false);
      return; // Stop the submission if validation fails
    }

    // Check user credentials
    axios
      .get("http://localhost:8000/users")
      .then((result) => {
        const user = result.data.find((user) => user.email === formData.email);
        if (user) {
          if (user.psw === formData.psw) {
            alert("Login Successfully");
            // Store data in localStorage after successful login
            win.setItem("name", formData.name);
            win.setItem("email", formData.email);
            win.setItem("psw", formData.psw);
            navigate("/");
          } else {
            setErrors({ psw: "Wrong Password" });
            setValid(false);
          }
        } else {
          setErrors({ email: "Wrong Email" });
          setValid(false);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Load data from localStorage
    const storedName = win.getItem("name");
    const storedEmail = win.getItem("email");
    const storedPsw = win.getItem("psw");

    if (storedName) setFormData((prev) => ({ ...prev, name: storedName }));
    if (storedEmail) setFormData((prev) => ({ ...prev, email: storedEmail }));
    if (storedPsw) setFormD-ata((prev) => ({ ...prev, psw: storedPsw }));
  }, []);

  useEffect(() => {
    // Store data in localStorage whenever formData changes
    win.setItem("name", formData.name);
    win.setItem("email", formData.email);
    win.setItem("psw", formData.psw);
  }, [formData]);

  return (
    <div className="mx-auto p-2">
      <form onSubmit={handleSubmit}>
        {!valid && (
          <div className="alert alert-danger" role="alert">
            {errors.name && <div>{errors.name}</div>}
            {errors.email && <div>{errors.email}</div>}
            {errors.psw && <div>{errors.psw}</div>}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="psw" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="psw"
            name="psw"
            value={formData.psw}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, psw: event.target.value }))
            }
          />
        </div>

        <button type="submit" className="btn btn-outline-dark">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;