import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../assets/styles/Heading.css";
import images01 from "../images/doctors.png";
import images02 from "../images/do-2.png";
import images03 from "../images/do-3.png";
import images04 from "../images/Abortionamico591x531.png";
import images05 from "../images/World-health-dayrafiki591x531.png";
import { Carousel } from "react-bootstrap";

const Heading = () => {
  return (
    <div className="site-header">
      <div className="container-fluid main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              {/* Left Section with Animated Text */}
              <div className="col-md-5 col-12 main_header_left">
                <section className="left-sec">
                  <h1 className="donate-heading"> Donate and Save Lives</h1>
                  <h1 className="join-hands-heading">
                    <span>Join </span>
                    <span>Hands </span>
                    <span>With </span>
                    <span>Us</span>
                  </h1>
                  <p className="donation-text">
                    Your donation can give someone a second chance at life.
                    Donate blood or organs today.
                  </p>

                  {/* Custom Button */}
                  <Link className="btnlink" to="/Blood">
                    <Button
                      variant="contained"
                      color="primary"
                      className="donor-btn"
                    >
                      Become a Donor
                    </Button>
                  </Link>
                </section>
              </div>

              {/* Right Section with Carousel */}
              <div className="col-md-7 col-12 main_header_right">
                <Carousel className="custom-carousel">
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid overlay-image"
                      src={images04}
                      alt="Blood Donation"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-78 img-fluid overlay-image"
                      src={images05}
                      alt="Organ Donation"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid overlay-image"
                      src={images01}
                      alt="Doctors"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid overlay-image"
                      src={images02}
                      alt="DonateLife"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid overlay-image"
                      src={images03}
                      alt="Support"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
