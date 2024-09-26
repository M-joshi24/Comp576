import React from "react";
import { Link } from "react-router-dom";
import images01 from "../images/Group 140.png";
import "../assets/styles/aboutus.css";

const AboutUs = () => {
  return (
    <section id="about" className=" d-flex align-item-center aboutcls">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Welcome to About Us <br />
                  <strong className="brand-name"> DonateLife</strong>
                </h1>
                <h2 className="my-2">
                  We are a dedicated team of medical professionals and
                  volunteers working together to save lives through blood and organ 
                  donation. Our mission is to connect donors with those in need,
                  making the donation process simple, safe, and impactful.
                  <br /> <br />
                  At <strong>DonateLife</strong>, we believe that every life saved
                  is a testament to the generosity of individuals like you. By
                  leveraging technology, we aim to create a platform where donors
                  and recipients can seamlessly connect to make a life-saving
                  difference.
                  <br /> <br />
                  Thank you for joining us on this life-saving journey. Your
                  support makes it possible to offer hope and health to countless
                  individuals in need.
                </h2>
                <div className="mt-3">
                  <Link to="/donate" className="btn-get-started">
                    Become a Donor
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 about-img">
                <img
                  src={images01}
                  style={{ height: "82vh" }}
                  className="img-fluid animated"
                  alt="about image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
