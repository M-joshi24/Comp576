import React from "react";
import { Link } from "react-router-dom";
import doctor from "../images/5790-removebg.png";
import "../assets/styles/MakeAppointment.css";
const MakeAppointment = () => {
  return (
    <div style={{ paddingRight: "150px", paddingLeft: "150px" }}>
      <section className="make-appointment mt-5">
        <div className="appointment_container">
          <div className="row">
            <div className="col-md-5 d-none d-md-block">
              <img src={doctor} alt="" />
            </div>
            <div className="col-md-7 text-white py-5 front">
              <h5 className="text-uppercase my-2">DoanteLife</h5>
              <h1 className="my-4">
                Donate Today
              </h1>
              <p>
              By donating your organs or blood, you can save someone's life. Your generous contribution can
              give others a second chance to live. Consider registering as an organ donor or donating blood today.
             </p>

              <Link
                variant="contained"
                to="/blood"
                className=" contact1-form-btn1"
              >
                Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
