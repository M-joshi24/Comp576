import React from "react";
import Button from "@material-ui/core/Button";
import images01 from "../images/icon/blood_donation.png";
import images02 from "../images/icon/medical-kit.png";
import images03 from "../images/icon/AdobeStock_207418957_Preview-removebg-preview.png";
import images04 from "../images/icon/open.png";
import images05 from "../images/icon/chat.png";
import images06 from "../images/icon/appointment.png";
import "../assets/styles/Features.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div>
      <section id="home-icon" className="pb-3 text-center">
        <div className="content pb-5"></div>
        <div className="containerx text-center">
          <div className="row align-self-center">
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-1" className="box col-md-4 ">
                <img style={{ height: "80px" }} src={images02} alt="Emergency Care" />
                <h3 className="my-2">Emergency Care</h3>
                <p className="lead mb-3">
                  Immediate medical care is available for emergencies related to blood donation and organ transplants.
                </p>

              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-2" className="box col-md-4">
                <img style={{ height: "80px" }} src={images04} alt="Opening Hours" />
                <h3 className="my-2">Opening Hours</h3>
                <p className="lead mb-3">
                  We are open 24/7 for urgent cases. Regular donation hours are available on weekdays.
                </p>

              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-3" className="box col-md-4">
                <img style={{ height: "80px" }} src={images01} alt="Blood Donation" />
                <h3 className="my-2">Donation</h3>
                <p className="lead mb-3">
                  Save lives by donating blood /Organ today. Every donation can help people.
                </p>
        
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-4" className="box col-md-4">
                <img style={{ height: "80px" }} src={images05} alt="Chat With Doctors" />
                <h3 className="my-2">Chat With Doctors</h3>
                <p className="lead mb-3">
                  Connect with our medical professionals to get personalized advice regarding donation or care.
                </p>
  
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-5" className="box col-md-4">
                <img style={{ height: "80px" }} src={images06} alt="Get Appointment" />
                <h3 className="my-2">Get Appointment</h3>
                <p className="lead mb-3">
                  Schedule an appointment for donation or consultation with one of our experts.
                </p>

              </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div id="box-6" className="box col-md-4">
                <img style={{ height: "80px" }} src={images03} alt="24 Hours Service" />
                <h3 className="my-2">24 Hours Service</h3>
                <p className="lead mb-3">
                  We are available 24/7 to handle urgent cases or to assist you with any queries.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
