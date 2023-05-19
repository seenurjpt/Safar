import { React, useState, useEffect } from "react";
import axios from "axios";
import "../booking/booking.css";
import Payment from "../../components/common/paymentgateway/Payment";

const Booking = () => {
  const [val, setVal] = useState({

  });
  const [pop, setPop] = useState({});

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const [regionid, setRegionid] = useState("");
  const [placeid, setPlaceid] = useState("");
  const [place, setPlace] = useState([]);
  const currentDate = new Date().toISOString().split("T")[0];

  const getApi = () => {
    axios.get("http://localhost:3004/packages").then((result) => {
      setData(result.data);
    });
  };
  const getApi1 = () => {
    axios.get("http://localhost:3004/booking").then((result1) => {
      setData1(result1.data);
    });
  };

  useEffect(() => {
    getApi();
    getApi1();
  }, []);

  const handleReg = (e) => {
    const getregId = e.target.value;
    const getPlacedata = data.find(
      (region) => region.pack_id == getregId
    )?.places;
    setPlace(getPlacedata);
    setRegionid(getregId);
  };

  const handlePack = (e) => {
    const packId = e.target.value;
    setPlaceid(packId);
  };

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
    setPop({ ...val, [e.target.name]: e.target.value });
  };

  // const handleSubmit = () => {
  //   axios.post("http://localhost:3004/booking", val).then((result) => {
  //   });
  //    setVal({   Name: "",
  //    Mail: "",
  //    Phone: "",
  //    Date: "",
  //    Region: "",
  //    Package: "",
  //    Kids: "",
  //    Adults: "",
  //    Seniors: "",})
  // };

  //   const handleSubmit = () => {
  //     const axios = require('axios');
  //     alert("sunny")
  // // const FormData = require('form-data');
  // let data = new FormData();
  // data.append('name', pop.Name);
  // data.append('email', pop.Mail);
  // data.append('phone', pop.Phone);
  // data.append('date', pop.Phone);
  // data.append('region', pop.Region);
  // data.append('package', pop.Package);
  // data.append('kids', pop.Kids);
  // data.append('adults', pop.Adults);
  // data.append('seniors', pop.Seniors);

  // let config = {
  //   method: 'POST',
  //   maxBodyLength: Infinity,
  //   url: 'http://localhost:1337/api/booking',
  //   headers: {
  //     'Cookie': 'sails.sid=s%3ALuaBTamQNyEbD1or6eWu4DM8wvhlkpwo.%2BUMUYCeqJd%2F7VP5O%2BbrECHC6XwpJkbzgJvrhdrADKhs',
  //     ...data.getHeaders()
  //   },
  //   data : data
  // };

  // axios.request(config)
  // .then((response) => {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  //   };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/booking",
        val
      );
      console.log(response);
      setVal({});
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background-color">
      <form
        id="formElem"
        className="py-5 border-top border-dark"
        onSubmit={(e) => {
          handleSubmit(e);
          e.preventDefault();
        }}
      >
        <div className="card shadow  bg-white  rounded-5">
          <div className="card-body rounded-3 ">
            <p className="card-title text-center shadow mt-5 rounded-2">
              Travel Booking Form
            </p>

            <div className="icons text-center">
              <i className="fa fa-bus fa-2x faa" aria-hidden="true"></i>
              <i className="fa fa-campground fa-2x faa" aria-hidden="true"></i>
              <i className="fa fa-utensils fa-2x faa" aria-hidden="true"></i>
              <i
                className="fa fa-person-hiking fa-2x faa"
                aria-hidden="true"
              ></i>
            </div>
            <hr />

            <div className="row pt-2">
              <div className="col-sm-6">
                <input
                  placeholder="Name"
                  type="text"
                  id="date-picker-example"
                  className="form-control "
                  name="name"
                  value={val?.name}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              {console.log("pop", val)}

              <div className="col-sm-6">
                <input
                  placeholder="E-mail (e.g. emaple@gmail.com)"
                  type="email"
                  id="date-picker-example"
                  className="form-control"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  name="email"
                  value={val?.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>
            </div>

            <div className="row pt-4">
              <div className="col-sm-6">
                <input
                  placeholder="Phone Number (e.g. 1234567890)"
                  type="tel"
                  maxLength={10}
                  id="date-picker-example"
                  className="form-control pb-2"
                  name="phone"
                  value={val?.phone}
                  pattern="[0-9]{10}"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>

              <div className="col-sm-6">
                <input
                  placeholder="&#xf073; Arriving"
                  type="date"
                  id="date-picker-example"
                  min={currentDate}
                  className="form-control datepicker"
                  name="date"
                  value={val?.date}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="row pt-4">
              <div className="col-sm-6">
                <select
                  className="browser-default custom-select pb-p"
                  id="select"
                  name="region"
                  value={val?.region}
                  onChange={(e) => {
                    handleChange(e);
                    handleReg(e);
                  }}
                  required
                >
                  <option disabled="" selected="">
                    Select Region
                  </option>
                  {data.map((option, index) => (
                    <option key={index} value={option.pack_id}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-sm-6">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="package"
                  value={val?.package}
                  onChange={(e) => {
                    handleChange(e);
                    handlePack(e);
                  }}
                  required
                >
                  <option value="" disabled="" selected="">
                    Packages
                  </option>
                  {place.map((pl, index) => (
                    <option value={pl.place} key={index}>
                      {pl.place}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-4">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="kids"
                  value={val?.kids}
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="" disabled="" selected="">
                    Kids(0-14)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="col-sm-4">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="adults"
                  value={val?.adults}
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="" disabled="" selected="">
                    Adults(15-64)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="col-sm-4">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="seniors"
                  value={val?.seniors}
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="" disabled="" selected="">
                    Seniors(65+)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              {/* <div className="row pt-2">
                <div className="col-sm-3">
                  <input
                    placeholder="Add Passenger"
                    type="text"
                    id="date-picker-example"
                    className="form-control "
                    name="Name"
                    required
                  />
                </div>

                <div
                  className="col-sm-3 py-2"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <i class="bi bi-plus-circle  "></i>
                </div>

                <div className="col-sm-6 d-flex">
                  <label className="">
                    Upload Document : <label></label>
                  </label>
                  <input
                    type="file"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    required
                  />
                </div>
              </div> */}
            </div>
            <div className="col-sm-2"></div>
            <input className="btn float-left " id="book-btn" type="reset" />
            <button
              className="btn float-right "
              id="book-btn"
              type="submit"
              value="Book"
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
            >
              Submit
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Booking Details
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div class="modal-body">
                    <p>Name : {pop?.Name}</p>
                    <p>Package : {pop?.Package}</p>
                    <p>Date: {pop?.Date}</p>

                    <div className="d-flex gap-3">
                      <p>Kids : {pop?.Kids}</p>
                      <p>Adults: {pop?.Adults}</p>
                      <p>Seniors : {pop?.Seniors}</p>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <Payment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
