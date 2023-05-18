import { React, useState,useEffect} from "react";
import axios from "axios";
import "../booking/booking.css";
import { useLocation } from "react-router-dom";

const BookPackage = () => {
  const location= useLocation()
  const [data1, setData1] = useState([]);
  const getApi1 = () => {
    axios.get("http://localhost:3004/booking").then((result1) => {
      setData1(result1.data);
    });
  };

  useEffect(() => {
    getApi1();
  }, []);
  const [val, setVal] = useState({
    Name: "",
    Mail: "",
    Phone: "",
    Date: "",
    Region: "",
    Package: "",
    Kids: "",
    Adults: "",
    Seniors: "",
  });

  const currentDate = new Date().toISOString().split("T")[0];
  // const [placeid, setPlaceid] = useState("");
  // const [place, setPlace] = useState([]);

  // const getApi = () => {
  //   axios.get("http://localhost:3004/packages").then((result) => {
  //     setData(result.data);
  //   });
  // };
  // const getApi1 = () => {
  //   axios.get("http://localhost:3004/booking").then((result1) => {
  //     setData1(result1.data);
  //   });
  // };

  // useEffect(() => {
  //   getApi();
  //   getApi1();
  // }, []);

  // const handleReg = (e) => {
  //   const getregId = e.target.value;
  //   const getPlacedata = data.find(
  //     (region) => region.pack_id == getregId
  //   )?.places;
  //   setPlace(getPlacedata);
  //   setRegionid(getregId);
  // };

  // const handlePack = (e) => {
  //   const packId = e.target.value;
  //   setPlaceid(packId);
  // };

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value, Package:location.state.pack});
  };
  // const newData = {...val, Package:location.state.pack}

  const handleSubmit = () => {
    axios.post("http://localhost:3004/booking", val).then((result) => {});
     setVal({   Name: "",
     Mail: "",
     Phone: "",
     Date: "",
     Region: "",
     Package: "",
     Kids: "",
     Adults: "",
     Seniors: "",})
  };

  return (
    <div className="background-color">
      <form
        className="py-5 border-top border-dark"
        onSubmit={(e) => {
          handleSubmit(e);
          e.preventDefault();
        }}
      >
        <div className="card shadow  bg-white  rounded-5">
          <div className="card-body rounded-3 ">
            <p className="card-title text-center shadow mt-5 rounded-2">
              Book For {location.state.pack}
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
                  name="Name"
                  value={val?.Name}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="col-sm-6">
                <input
                  placeholder="E-mail (e.g. emaple@gmail.com)"
                  type="email"
                  id="date-picker-example"
                  className="form-control"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  name="Mail"
                  value={val?.Mail}
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
                  id="date-picker-example"
                  className="form-control pb-2"
                  name="Phone"
                  value={val?.Phone}
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
                  name="Date"
                  value={val?.Date}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-4">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="Kids"
                  value={val?.Kids}
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
                  name="Adults"
                  value={val?.Adults}
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
                  name="Seniors"
                  value={val?.Seniors}
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
            </div>
            <div className="col-sm-2">
              <p>{}</p>
            </div>
            <input className="btn float-left " id="book-btn" type="reset" />
            <button
              className="btn float-right "
              id="book-btn"
              type="submit"
              value="Book"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
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
                      Thanks For Booking With Us..!!!
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      // data-bs-dismiss="modal"
                      // aria-label="Close"
                    ></button>
                  </div>

                  <div class="modal-body">
                    <p>Name : {data1[data1.length - 1]?.Name}</p>
                    <p>Package : {data1[data1.length - 1]?.Package}</p>
                    <p>Date: {data1[data1.length - 1]?.Date}</p>
                    <p>
                      Number of persons : {data1[data1.length - 1]?.Persons}
                    </p>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
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

export default BookPackage;
