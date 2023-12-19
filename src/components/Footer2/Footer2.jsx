import React from "react";
import "./Footer2.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";

function Footer2() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For business</h4>
            <a href="#">
              <p>Employer</p>
            </a>
            <a href="#">
              <p>Health</p>
            </a>
            <a href="#">
              <p>individuals</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For XYZ</h4>
            <a href="#">
              <p>Employer</p>
            </a>
            <a href="#">
              <p>Health</p>
            </a>
            <a href="#">
              <p>individuals</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For Resources</h4>
            <a href="#">
              <p>Employer</p>
            </a>
            <a href="#">
              <p>Health</p>
            </a>
            <a href="#">
              <p>individuals</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For Companies</h4>
            <a href="#">
              <p>Employer</p>
            </a>
            <a href="#">
              <p>Health</p>
            </a>
            <a href="#">
              <p>individuals</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For About</h4>
            <a href="#">
              <p>Employer</p>
            </a>
            <a href="#">
              <p>Health</p>
            </a>
            <a href="#">
              <p>individuals</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For Coming soon</h4>
            <div className="socialmedia">
              <p>
                <img src={FaFacebook} alt="" />
              </p>
              <p>
                <img src={FaLinkedin} alt="" />
              </p>
              <p>
                <img src={FaSquareTwitter} alt="" />
              </p>
              <p>
                <img src={FaInstagram} alt="" />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-below-links">
            <a href="#">
              <div>
                <p>Term & Condition</p>
              </div>
            </a>
            <a href="#">
              <div>
                <p>Term & Condition</p>
              </div>
            </a>
            <a href="#">
              <div>
                <p>Term & Condition</p>
              </div>
            </a>
            <a href="#">
              <div>
                <p>Term & Condition</p>
              </div>
            </a>
          </div>
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} Repos All right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
