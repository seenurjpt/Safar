import React from "react";
import { useState } from "react";
import "../booking/booking.css";
import background from "../../assets/booking_images/banner.png";

const Booking = () => {
    const [val,setVal]=useState();
    const handleChange=(e)=>{
        console.log("Jay shree Ram", e.target.value);
        setVal(e.target.value)
    }
return (
    <div className="boody">
        <div className="b">
        <div className="b2">
            <div className="b3">
            <img className="imagg" src={background} alt="" />
            </div>
            <div className="fom">
            {console.log("inreturn",val)}
            <form action="#">
                <label for="name">Traveler name*:</label>
                <br />
                <input onChange={handleChange}
                required
                className="txx"
                type="text"
                id="name"
                name="name"
                value={val}
                />
                <br />
                <br />
                <label for="phone">Phone number*:</label>
                <br />
                <input
                required
                className="txx"
                type="tel"
                id="phone"
                name="phone"
                />
                <br />
                <br />
                <label for="Email">Email*:</label>
                <br />
                <input
                required
                className="txx"
                type="email"
                id="email"
                name="Email"
                />
                <br />
                <br />
                <h1 className="hea">Packages</h1>
                <br />
                <label for="package">Choose a package:</label>
                <br />
                <select className="txxxt" id="package" name="package">
                <option value="#" selected>
                    --None--
                </option>
                <option value="#">Devprayag</option>
                <option value="#">Badrinath</option>
                <option value="#">Kedarnath</option>
                <option value="#">Tungnath</option>
                <option value="#">Nalsarovar</option>
                <option value="#">Harihar Fort</option>
                <option value="#">Bahubali Hills</option>
                <option value="#">Kumbhalgarh</option>
                <option value="#">Jatayu Museum</option>
                <option value="#">Rameshwaram</option>
                <option value="#">Tirupati</option>
                <option value="#">Meenakshi</option>
                <option value="#">Darjeeling</option>
                <option value="#">Konark Sun Temple</option>
                <option value="#">Jagannath Puri</option>
                <option value="#">Chilika Lake</option>
                <option value="#">Gwalior Fort</option>
                <option value="#">Kailash Temple</option>
                <option value="#">Golden Temple</option>
                <option value="#">Lal Chowk</option>
                </select>
                <br />
                <br />
                <label for="date">Date of Travelling:</label>
                <br />
                <input className="txx" type="date" id="birthday" name="date" />
                <br />
                <br />
                <label for="quantity">Adults:</label>
                <input
                className="txx"
                type="number"
                id="quantity"
                name="quantity"
                placeholder="00"
                min="1"
                max="10"
                />
                <label for="quantity">Kids:</label>
                <input
                className="txx"
                type="number"
                id="quantity"
                name="quantity"
                placeholder="00"
                min="1"
                max="10"
                />
                <br />
                <br />
                <input className="submit" type="submit" value="Submit" />
                <input className="reset" type="reset" value="Reset" />
            </form>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Booking;
