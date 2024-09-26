import React from "react";
import { CDBSidebarFooter, CDBLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../images/donatelife.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <CDBSidebarFooter
      className="shadow"
      style={{
        background:
          "linear-gradient(170deg, #00FF7F, #1E3A78)", // Light green to dark blue
      }}
    
    >
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              <img alt="logo" src={logo} width="30px" /> DonateLife
            </p>

            <p className="my-3" style={{ width: "250px" }}>
              At <strong>DonateLife</strong>, we are committed to saving lives by
              connecting blood and organ donors with those in need. Join us in
              our mission to make a life-saving difference today.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              DonateLife
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Resources</CDBLink>
              <CDBLink href="/">About Us</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Blog</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Get Involved
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Become a Donor</CDBLink>
              <CDBLink href="/">Sign Up</CDBLink>
              <CDBLink href="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Services
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Blood Donation</CDBLink>
              <CDBLink href="/">Organ Donation</CDBLink>
              <CDBLink href="/">Find a Donor</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; DonateLife {currentYear}. All rights reserved.
        </small>
      </CDBBox>
    </CDBSidebarFooter>
  );
};

export default Footer;
