import React from "react";
import "./userprofile.css";
import userPro from "../../assets/clipart546487.png"

const User = () => {
  return (
    <div class="container-fluid rounded pt-5 pb-5 background">
      <div class="row">
        <div class="col-md-2 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-1">
            <img class="rounded-circle mt-5" width="150px" src={userPro} />
            <span class="font-weight-bold">Moksha Sarvaiya</span>
            <span class="text-black-50">mokshasarvaiya@gmail.com</span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-3 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label>
                <input
                  type="text"
                  class="form-control"
                  
                  placeholder="surname"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Email ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter email id"
                  
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your pasasword"
                  
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your address "
                  
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Pincode</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter ypur pincode"
                  
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Country</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="country"
                  
                />
              </div>
              <div class="col-md-6">
                <label class="labels">State/Region</label>
                <input
                  type="text"
                  class="form-control"
                  
                  placeholder="state"
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" type="button">
                Save Changes
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center experience">
              <span>Booked Pakages</span>
              <span class="border px-3 p-1 add-experience">
                <i class="fa fa-plus"></i> Book Pakages
              </span>
            </div>
            <br />
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action">
                Golden temple
              </a>
              <a href="#" class="list-group-item list-group-item-action active">
                Devprayag
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Kedarnath
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Nal sarover
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Rameshvaram
              </a>
            </div>
            {/* <div class="col-md-12"><label class="labels">places</label><input type="text" class="form-control" placeholder="experience" value=""/></div> <br/>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div> */}
          </div>
        </div>

        <div class="col-md-3 overflow-auto ">
          <div
            class="card text-justify "
            style={{ height: "18rem", width: "22rem" }}
          >
            <div class="card-body ">
              <h3>Itinerary Planning </h3>
              <p>Devprayag 8 day & 9 night</p>
              <br />

              <h4 class="card-subtitle mb-2 text-muted ">Day 1</h4>
              <p class="card-text">Arrival in Devprayag</p>
              <ul>
                <li>Arrive in Devprayag and check into your accommodation.</li>
                <li>
                  Spend the day exploring the town and getting familiar with the
                  surroundings.
                </li>
                <li>
                  Visit the famous confluence of the rivers Alaknanda and
                  Bhagirathi, which form the Ganges River.
                </li>
              </ul>

              <h4 class="card-subtitle mb-2 text-muted ">Day 2</h4>
              <p class="card-text "> Devprayag Sightseeing</p>
              <ul>
                <li>
                  Explore the ancient temples in Devprayag, such as the
                  Raghunathji Temple, Chandrabadani Temple, and Dashrathshila
                  Temple.
                </li>
                <li>
                  Enjoy panoramic views of the Himalayas and the confluence of
                  rivers from various viewpoints in the town.
                </li>
                <li>
                  Take a walk along the riverside and enjoy the serene
                  atmosphere.
                </li>
              </ul>

              <h4 class="card-subtitle mb-2 text-muted ">Day 3</h4>
              <p class="card-text ">Excursion to Tehri Dam</p>
              <ul>
                <li>
                  Take a day trip to Tehri Dam, which is located approximately
                  42 kilometers from Devprayag.
                </li>
                <li>
                  Enjoy a guided tour of the dam and learn about its history and
                  significance.
                </li>
                <li>
                  Experience water sports activities like jet skiing, boating,
                  and banana boat rides in Tehri Lake.
                </li>
                <li>Return to Devprayag in the evening.</li>
              </ul>
              <h4 class="card-subtitle mb-2 text-muted ">Day 4</h4>
              <p class="card-text ">Trek to Chandrabadani Temple</p>
              <ul>
                <li>Arrive in Devprayag and check into your accommodation.</li>
                <li>
                  Spend the day exploring the town and getting familiar with the
                  surroundings.
                </li>
                <li>
                  Visit the famous confluence of the rivers Alaknanda and
                  Bhagirathi, which form the Ganges River.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
