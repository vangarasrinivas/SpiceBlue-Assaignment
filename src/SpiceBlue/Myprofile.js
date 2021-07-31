import React, { useContext, useState, useEffect } from "react";
import { store } from "./App";
import { Redirect } from "react-router";
import axios from "axios";

const Myprofile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://stage.api.sloovi.com/user?company_id=company_b841ec73bbde4de5918b19ac93bf2d56&product=outreach",
        {
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data.results.company_datas);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  const handleDropdownChange = (e) => {
    setUser(e.target.value);
  };

  const GetUserData = () => {
    axios
      .get(
        "https://stage.api.sloovi.com/team?company_id=company_0336d06ff0ec4b3b9306ddc288482663&product=outreach",
        {
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) =>
        // console.log(res.data.results.data)

        setUserData(res.data.results.data)
      );
  };

  return (
    <div>
      {data && (
        <center>
          <br />
          <h2>User Ids List:</h2>
          <select className="form-select w-50" onChange={handleDropdownChange}>
            {data.map((emp, i) => (
              <option key={i.user_id} value={emp.user_id}>
                {emp.user_id}
              </option>
            ))}
          </select>
          <br />
          <h3>Selected User:{user}</h3>
          <br />
          <h5 className="text-primary">
            Click Button to Display Accepted user Details
          </h5>
          <br />
          <br />
          <button onClick={GetUserData} className="btn btn-danger">
            Get Data
          </button>

          <br />

          <br />

          {userData.map((user) => (
            <div className="card p-4" style={{ width: "30rem" }}>
              <h4 className="text-success">
                Welcome to <span className="text-primary">{user.name}</span>{" "}
                Dashboard
              </h4>
              <img
                className="card-img-top"
                src={user.icon}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">
                  Company : <span className="text-primary">{user.company}</span>
                </h4>
                <h4 className="card-title">
                  Captain : <span className="text-primary">{user.last}</span>
                </h4>
                <h4 className="card-title">
                  Phone : <span className="text-primary">{user.phone}</span>
                </h4>
                <h4 className="card-title">
                  Status : <span className="text-primary">{user.status}</span>
                </h4>
                <button
                  className="btn btn-primary"
                  onClick={() => setToken(null)}
                >
                  Logout
                </button>
              </div>
            </div>
          ))}
        </center>
      )}
    </div>
  );
};

export default Myprofile;
