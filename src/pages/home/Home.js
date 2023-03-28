import React from "react";


const Home = () => {
  return (
    <>
      <div className="intro">
        <div className="intro-header">
          <div>
            <p className="flex-shrink-1 saf-1">YOUR सFAR STARTS HERE...</p>
          </div>

          <div className="pt-5 ">
            <div className="explore ">
              <div className="explore-btn rounded-5">
                <ion-icon name="earth" className="earth px-2"></ion-icon>
                <a href="#">Explore</a>
              </div>
            </div>

            <div className="card-1">
              <div className="card-hero px-5 rounded-5">
                <div className="loc d-flex ">
                  <ion-icon
                    name="location-outline"
                    className="location"
                  ></ion-icon>
                  <div className="px-4">
                    <p>Location</p>
                    <p className="fs-6 fw-bold">Explore Nearby</p>
                  </div>
                </div>

                <div className="cyc d-flex">
                  <ion-icon name="bicycle-outline" className="cycle"></ion-icon>
                  <div className="px-4">
                    <p>Activity</p>
                    <p className="fs-6 fw-bold">All Activities</p>
                  </div>
                </div>

                <div className="dat d-flex">
                  <ion-icon name="calendar-outline" className="when"></ion-icon>
                  <div className="px-4">
                    <p>When</p>
                    <p className="fs-6 fw-bold">Choose A Date</p>
                  </div>
                </div>

                <div className="gus d-flex ">
                  <ion-icon name="people-outline" className="guests"></ion-icon>
                  <div className="px-4">
                    <p>Guests</p>
                    <p className="fs-6 fw-bold">1 Guest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <div className="services container">
          <div className="bino">
            {/* <img src="./Assets/binoculars.png" alt=""> */}
            <p className="fw-bold">Search Your Destination</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a
              quos autem ut itaque ea nemo ab suscipit atque magni, laboriosam
              eveniet dignissimos, dolores cupiditate?
            </p>
          </div>

          <div className="tick">
            {/* <img src="./Assets/tickets.png" alt=""> */}
            <p className="fw-bold">Get Your Tickets</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae veritatis tenetur corporis maiores excepturi nobis
              neque, ut repellat et mollitia saepe tempora est similique
              expedita?
            </p>
          </div>

          <div className="map-loc">
            {/* <img src="./Assets/map-marker.png" alt=""> */}
            <p className="fw-bold">Travel Around The Country</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at
              similique dicta numquam voluptate, maxime nihil tempora quaerat,
              odio eligendi officia expedita! Praesentium, exercitationem
              impedit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
