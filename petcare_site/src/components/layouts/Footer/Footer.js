import React from "react";
import "./footer.scss";
import Heading from "../../common/Section Heading/Heading";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EastIcon from "@mui/icons-material/East";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contain-in">
        <div className="footer-col">
          <div className="col-heading">
            <Heading headingTitle="GET IN TOUCH" />
          </div>
          <p className="short-info">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor
          </p>
          <div className="contact-details">
            <div className="detail-wrap">
              <span className="detail-sign">
                <LocationOnIcon />
              </span>
              <span className="main-detail">123 Street, New York, USA</span>
            </div>
            <div className="detail-wrap">
              <span className="detail-sign">
                <EmailIcon />
              </span>
              <span className="main-detail">info@example.com</span>
            </div>
            <div className="detail-wrap">
              <span className="detail-sign">
                <AddIcCallIcon />
              </span>
              <span className="main-detail">+012 345 67890</span>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="col-heading">
            <Heading headingTitle="QUICK LINKS" />
          </div>
          <div className="quick-link-list">
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Home
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              About Us
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Our Services
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Meet The Team
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Latest Blog
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Contact Us
            </a>
          </div>
        </div>
        <div className="footer-col">
          <div className="col-heading">
            <Heading headingTitle="POPULAR LINKS" />
          </div>
          <div className="quick-link-list">
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Home
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              About Us
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Our Services
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Meet The Team
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Latest Blog
            </a>
            <a className="quick-link" href="#">
              <i>
                <EastIcon />
              </i>{" "}
              Contact Us
            </a>
          </div>
        </div>
        <div className="footer-col">
          <div className="col-heading">
            <Heading headingTitle="NEWSLETTER" />
          </div>
          <div className="quick-register">
            <form action="signup">
              <input type="email" />
              <button>SIGN UP</button>
            </form>
          </div>
          <div className="follow-on-media">
            <h5>FOLLOW US</h5>
            <div className="social-links">
              <span>
                <TwitterIcon />
              </span>
              <span>
                <FacebookIcon />
              </span>
              <span>
                <LinkedInIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
