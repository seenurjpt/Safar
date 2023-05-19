import { React, useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

const Feedback = () => {
  const [data, setData] = useState([]);
  const [val,setVal] = useState([]);


  const getApi = () => {
    axios.get("http://localhost:3004/ratings").then((result) => {
      setData(result.data);
    });
  };

  const removeId = async (id) => {
    await axios.delete(`http://localhost:3004/ratings/${id}`);
    getApi();
  };


  useEffect(() => {
    getApi();

  }, []);


  return (
    <>

      <div className="px-3 background-color">
        <div className="container-fluid">
          <div className="row g-3 py-5">


            <div className="col-md p-3">
              <div className="p-3 bg-white shadow-sm  d-flex justify-content-around align-item-center rounded ">
                <div>
                  <h3 className="fs-2 mt-3">{Object.keys(data).length}</h3>
                  <h2>{val}</h2>
                  <p className="fs-2">Feedback</p>
                </div>
                <i className="bi bi-bookmark p-3 fs-1"></i>
              </div>
            </div>

            <table class="table caption-top bg-white rounded">
              {/* <caption className='text-white fs-2'> Recent data</caption> */}
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Stars</th>
                  <th scope="col">Feedback</th>

                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <>
                    <tr>
                      <th scope="row">{index+1}</th>
                     
                     <td>{user.Star} Star</td>
                      {/* <td>{golu}</td> */}
                      <td>{user.feedback}</td>
                      <td>
                      {/* ⭐⭐⭐⭐⭐ */}
                      <button type="button" className="btn btn-danger" onClick={() => {removeId(user.id)}}>X</button>
                      </td>
                    </tr>
                  </>
                ))}

                {/* <tr>
      <th scope="row">1</th>
      <td>kimi</td>
      <td>998988345</td>
      <td>2/5/23</td>
      <td>kedarnath</td>
      <td>3</td>
    </tr>

    <tr>
      <th scope="row">1</th>
      <td>Mayur</td>
      <td>56563423</td>
      <td>6/5/23</td>
      <td>nalsarover</td>
      <td>4</td>
    </tr>
     */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
