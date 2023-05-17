import { React, useEffect, useState } from "react";
import "./admin.css";
import axios, { Axios } from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddPackage from "../../components/common/AddPackage";

const Admin = () => {
  // const [data, setData] = useState([]);
  // const [user, setUser] = useState([]);
  // const getApi = () => {
  //   axios.get("http://localhost:3004/booking").then((result) => {
  //     setData(result.data);
  //   });
  // };
  // const getApi2 = () => {
  //   axios.get("http://localhost:3004/users").then((result1) => {
  //     setUser(result1.data);
  //     console.log("lololo", result1.data);
  //   });
  // };
  const [data, setData] = useState([]);
  const fetchHomePageData = () => {
    axios
      .get("http://localhost:1337/admin/dashboard")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePlaceEdit = (id) => {
    axios
      .put(`http://localhost:1337/api/places/${id}`, {})
      .then((res) => {
        console.log("====================================");
        console.log(res.data);
        console.log("====================================");
        fetchHomePageData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeletePlace = (id) => {
    axios
      .delete(`http://localhost:1337/api/places/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchHomePageData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchHomePageData();
  }, []);

  // const removeId = async (id) => {
  //   await axios.delete(`http://localhost:3004/booking/${id}`);
  //   getApi();
  // };
  return (
    <>
      <div className="px-3 background-color">
        <div className="container-fluid">
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="/feedback">
                Feedback Page
              </a>
              <AddPackage fetchHomePageData={fetchHomePageData} />
            </div>
          </nav>
          {/* <div className="row g-3 py-5">
            <div className="col-md p-3">
              <div className="p-3 bg-white shadow-sm  d-flex justify-content-around align-item-center rounded ">
                <div>
                  <h3 className="fs-2 mt-3">{Object.keys(user).length}</h3>
                  <p className="fs-2">Users</p>
                </div>
                <i class="bi bi-person p-3 fs-1"></i>
              </div>
            </div>

            <div className="col-md p-3">
              <div className="p-3 bg-white shadow-sm  d-flex justify-content-around align-item-center rounded ">
                <div>
                  <h3 className="fs-2 mt-3">{Object.keys(data).length}</h3>
                  <p className="fs-2">Tickets booked</p>
                </div>
                <i className="bi bi-bookmark p-3 fs-1"></i>
              </div>
            </div>

          </div> */}
          {data.Places && (
            <table class="table caption-top bg-white rounded">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">place name</th>
                  <th scope="col">price</th>
                  <th scope="col">localtion</th>
                  <th scope="col">image</th>
                  <th scope="col">Presons</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.Places.map((user, index) => (
                  <tr>
                    {console.log(user)}
                    <td scope="row">{index + 1}</td>
                    <td>{user.place}</td>
                    <td>{user.price}</td>
                    <td>{user.maplocation}</td>
                    <td>
                      <img src={user.image} width="100px" height="100px" />
                    </td>
                    <td>{user.description}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger dlt-btn"
                        onClick={() => handleDeletePlace(user.id)}
                      >
                        <ion-icon name="close"></ion-icon>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dlt-btn"
                        onClick={() => handlePlaceEdit(user.id)}
                      >
                        update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
