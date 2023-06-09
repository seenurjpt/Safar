import {React ,useState} from "react";
import axios from "axios";
import "./Contact.css";
import bannerco from "../../assets/contact-banner.jpg";

const Contact = () => {
  const [val, setVal] = useState()
  const [snd, setSnd] = useState()
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
    setSnd({ ...snd, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (event) => {

    // axios.post("http://localhost:3004/contact", val).then((result) => {
    // });

    var axios = require('axios');
    var data = JSON.stringify({
        "collection": "<COLLECTION_NAME>",
        "database": "<DATABASE_NAME>",
        "dataSource": "Cluster0",
        "projection": {
            "_id": 1,
            "name":snd.fname,
            "message":snd.ename
        }
    });
                
    var config = {
        method: 'post',
        url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-btyms/endpoint/data/v1/action/findOne',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': 'uIMvndnoaxtRDwYtRg9RjssNY8BF6tCVp0eYbF5QhhwWF4VOxONNAabfOrUiRNpY',
        },
        data: data
    };
                
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    
  };
  return (
    <>
      <div class="contact-banner">
        <img src={bannerco} />
      </div>

      <div class="abcd">
        <p class="contact-fade">Contact</p>
        <p class="contact-banner-text">Connect With Us</p>
      </div>

      <div class="row ola">
        <div class="col-sm-1 col-1">
          <div class="card1 d-flexl- justify-content-center">
            <p><h1>Contact Info</h1></p>

            <div class="info11">
              <div>
                <p>
                  <ion-icon name="location-sharp"></ion-icon> Ahmedabad
                </p>
              </div>

              <div>
                <p>
                  <ion-icon name="mail"></ion-icon> safar@info.com
                </p>
              </div>

              <div>
                <p>
                  <ion-icon name="call"></ion-icon> +91-1234567890
                </p>
              </div>
            </div>
            <div class="d-flex gap-3 mk">
              <a href="https://twitter.com">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="https://www.facebook.com">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://www.instagram.com">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

            </div>
          </div>
        </div>

        <div class="col-sm-8 col-9">
          <div class="card2 d-flex justify-content-center">
            <div class="t1 d-flex">
              <h1 class="mt-0 d-flex justify-content-center">Send a Message</h1>
            </div>

            <div class="form55">
              <form onSubmit={handleSubmit}>
                <div class="d-flex gap-5 w-100 py-sm-3">
                  <div>
                    <label for="fname"><p>First name:</p></label>
                    <br />
                    <input type="text" id="fname" name="fname" class="effect" onChange={(e) => handleChange(e)} required/>
                    <br />
                  </div>
                  <div>
                    <label for="lname"><p>Last name:</p></label> <br />
                    <input type="text" id="lname" name="lname" class="effect" onChange={(e) => handleChange(e)} required/>
                    <br />
                  </div>
                </div>

                <div class="d-flex gap-5 w-100 py-sm-3 py-2 ">
                  <div>
                    <label for="fname"><p>Email id:</p></label>
                    <br />
                    <input
                      type="email"
                      id="ename"
                      name="ename"
                      class="effect"
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <label for="fname"><p>Phone no.:</p></label>
                    <br />
                    <input
                      type="tel"
                      id="pname"
                      name="pname"
                      class="effect"
                      pattern="[0-9]{10}"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <br />
                  </div>
                </div>
                <div>
                  <label for="lname"><p>Write something here...</p></label>
                  <br />
                  <textarea
                    name="something"
                    id=""
                    cols="55"
                    rows="2"
                    class="effect"
                    onChange={(e) => handleChange(e)}
                    required
                  ></textarea>
                </div>
                <br />
                <br />
                <div class="sub d-flex justify-content-center">
                  <button type="submit">
                    <p>Submit</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
