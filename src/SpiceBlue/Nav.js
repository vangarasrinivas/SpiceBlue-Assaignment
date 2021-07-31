import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { store } from "./App";

const Nav = () => {
  const [token, setToken] = useContext(store);
  return (
    <div>
      {!token ? (
        <div className="d-flex justify-content-between py-3 px-3 bg-secondary">
          <div>
            <Link className="btn btn-warning" to="/">
              Home
            </Link>
          </div>
          <div className="d-flex justify-content-around">
            <Link className="btn btn-warning me-4" to="/register">
              Register
            </Link>
            <Link className="btn btn-warning" to="/login">
              Login
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-4">
          <a className="btn btn-warning">Dashboard</a>
        </div>
      )}
    </div>
  );
};

export default Nav;
