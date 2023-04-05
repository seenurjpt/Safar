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
    <form>
    <div className="card shadow mt-4 mb-5 bg-white rounded">

            <div className="card-body">

                <p className="card-title text-center shadow mt-5 rounded">Travel Booking Form</p>

                <div className="icons text-center">

                    <i className="fa fa-bus fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-campground fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-utensils fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-person-hiking fa-2x" aria-hidden="true"></i>


                </div>

                <hr/>

                <div className="row mt-4">

                    <div className="col-sm-6">
                    <input placeholder="Name" type="text" id="date-picker-example"
                            className="form-control mb-4" style={{fontfamily:'Arial,FontAwesome'}}/>
                    </div>

                    <div className="col-sm-6">
                        <input placeholder="E-mail" type="text" id="date-picker-example"
                            className="form-control" style={{fontfamily:'Arial,FontAwesome'}}/>
                    </div>


                </div>
                

                <div className="row mt-4">

                    <div className="col-sm-6">
                        <input placeholder="Phone number" type="" id="date-picker-example"
                            className="form-control mb-4" style={{fontfamily:'Arial,FontAwesome'}}/>
                    </div>

                    <div className="col-sm-6">
                        <input placeholder="&#xf073; Arriving" type="date" id="date-picker-example"
                            className="form-control datepicker" style={{fontfamily:'Arial,FontAwesome'}}/>
                    </div>

                </div>



                <div className="row mt-4">

                    <div className="col-sm-6">
                        <select className="browser-default custom-select mb-4" id="select">
                        <option value="#" disabled="" selected="">--Packages--</option>
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
                    </div>

                    <div className="col-sm-6">
                        <select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Modes</option>
                            <option value="1">Flight</option>
                            <option value="2">Train</option>
                            <option value="3">Bus</option>
                        </select>
                    </div>

                </div>




                <div className="row mt-4">

                    <div className="col-sm-4">
                        <select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Kids(0-14)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className="col-sm-4">
                        <select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Adults(15-64)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className="col-sm-4">
                        <select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Seniors(65+)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>



                </div>

                <input className="btn float-left " type="reset"/>
                <input className="btn float-right" type="submit" value="Book"/>
            </div>
        </div>
        </form>

    );
};

export default Booking;
