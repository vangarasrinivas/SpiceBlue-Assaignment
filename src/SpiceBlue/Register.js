import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register", data).then((res) => {
      alert(res.data);
      setData({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    });

    window.location.reload();
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <form onSubmit={submitHandler} autocomplete="off">
          <h3 className="text-primary">Register</h3>
          <input
            className="form-control"
            type="text"
            onChange={changeHandler}
            name="username"
            placeholder="User Name"
          />
          <br />
          <input
            className="form-control"
            type="email"
            onChange={changeHandler}
            name="email"
            placeholder="@email"
          />
          <br />
          <input
            className="form-control"
            type="password"
            onChange={changeHandler}
            name="password"
            placeholder="Password"
          />
          <br />
          <input
            className="form-control"
            type="password"
            onChange={changeHandler}
            name="confirmpassword"
            placeholder="Confirm Password"
          />
          <br />
          <input className="btn btn-danger" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
