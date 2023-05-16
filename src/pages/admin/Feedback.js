import { React, useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
const Feedback = () => {
  const [data, setData] = useState([]);
  const getApi = () => {
    axios.get("http://localhost:3004/contact").then((result) => {
      setData(result.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  const removeId = async (id) => {
    await axios.delete(`http://localhost:3004/booking/${id}`);
    getApi();
  };
  return (
    <>
      <div className="px-3 background-color">
        <div className="container-fluid">
          <div className="row g-3 py-5">
                <h1>Feedbacks</h1>
            <div className="col-md-3 p-3 mx-5">
              <div className="p-3 bg-white shadow-sm  d-flex justify-content-around align-item-center rounded ">
                <div>
                  <h3 className="fs-2 mt-3">{Object.keys(data).length}</h3>
                  <p className="fs-2">Feedback</p>
                </div>
              </div>
            </div>

            <table class="table caption-top bg-white rounded">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {user.fname} {user.lname}
                      </td>
                      <td>+91 {user.pname}</td>
                      <td>{user.ename}</td>
                      <td>{user.something}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger dlt-btn"
                          onClick={() => removeId(user.id)}
                        >
                          <ion-icon name="close"></ion-icon>
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
