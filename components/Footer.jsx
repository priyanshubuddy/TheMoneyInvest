import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { faFacebookF } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <footer className="kilimanjaro_area">
        {/* <!-- Top Footer Area Start --> */}
        <div className="foo_top_header_one section_padding_100_70">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="kilimanjaro_part">
                  <h5>About Us</h5>
                  <p>
                    It includes rich features & contents. It's designed &
                    developed based on One Page/ Multi-page Layout,blog
                    themes,world press themes and blogspot. You can use any
                    layout from any demo anywhere.
                  </p>
                  <p>
                    Our company is completely creative, clean & 100% responsive
                    website. Put your business into next level with us.
                  </p>
                </div>
                <div className="kilimanjaro_part m-top-15">
                  <h5>Social Links</h5>
                  <ul className="kilimanjaro_social_links">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>{" "}
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>{" "}
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube" aria-hidden="true"></i>{" "}
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>{" "}
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
                <div className="row">
              <div className="col-12 col-md-6 col-lg-3">

                  <div className="kilimanjaro_part m-top-15">
                    <h5>Important Links</h5>
                    <ul className="kilimanjaro_links">
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                          About Licences
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                          Help & Support
                        </a>
                      </li>
                      {/* <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Careers</a></li> */}
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                          Privacy Policy
                        </a>
                      </li>
                      {/* <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Community & Forum</a></li> */}
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                  <div className="kilimanjaro_part">
                    <h5 className="text-center ">Quick Contact</h5>
                    <div className="lg:flex lg:justify-around ">
                      <div className="kilimanjaro_single_contact_info">
                        <h5>Phone:</h5>
                        <p>+255 255 54 53 52 </p>
                      </div>
                      <div className="kilimanjaro_single_contact_info">
                        <h5>Email:</h5>
                        <p>support@email.com </p>
                        <p> company@email.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom Area Start --> */}
        <div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
          <div className="container justify-center">
            <div className="row">
              <div className="col-12">
                <p>
                  © All Rights Reserved by{" "}
                  <a href="#">
                    The Money Invest<i className="fa fa-love"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
