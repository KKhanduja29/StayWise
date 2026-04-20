import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    psw: "",
    phn: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate  = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    let isvalid = true;
    let validationerros = {};

    if (formData.fname === "" || formData.fname === null) {
      isvalid = false;
      validationerros.fname = "First Name Required";
    }
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationerros.email = "Email Required";
    } else if (!/\S+@\S+\.+/.test(formData.email)) {
      isvalid = false;
      validationerros.email = "Email Is Not Valid";
    }
    if (formData.psw === "" || formData.psw === null) {
      isvalid = false;
      validationerros.psw = "Password Required";
    } else if (formData.psw.length < 6) {
      isvalid = false;
      validationerros.psw = "Password Length At Least 6 Character";
    }
    if (formData.phn === "" || formData.phn === null) {
      isvalid = false;
      validationerros.phn = "Phone Number Required";
    }

    setErrors(validationerros);
    setValid(isvalid);

    if (Object.keys(validationerros).length === 0) {
       axios.post('http://localhost:8000/users',formData)
       .then(result => 
        alert("Successfully Ragistered"),
        navigate('/login')

       )
       .catch(err => console.log(err))
      
    }
  };

  return (
    <div className="mx-auto p-2">
      {valid ? (
        <></>
      ) : (
        <span className="text-danger">
          <div class="alert alert-danger" role="alert">
            {errors.fname} {errors.email} {errors.psw} {errors.phn}
          </div>
        </span>
      )}
      <form onSubmit={handelsubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            name="fname"
            onChange={(event) =>
              setFormData({ ...formData, fname: event.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            name="email"
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="psw" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="psw"
            onChange={(event) =>
              setFormData({ ...formData, psw: event.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">
            Phone
          </label>
          <input
            type="number"
            class="form-control"
            name="phn"
            onChange={(event) =>
              setFormData({ ...formData, phn: event.target.value })
            }
          />
        </div>
        <button type="submit" class="btn btn-outline-dark">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
