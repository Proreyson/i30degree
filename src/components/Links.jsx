import {
  faChevronRight,
  faBasketball,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  return (
    <div className="bg-light">
      <section className="container pt-5 links" id="links">
        <div className="links-content">
          <div className="links-list row">
            <div className="col-md-6">
              <div className="row">
                <div className="links-list-content col-xl-6">
                  <h3>I30 DEGREE</h3>

                  <ul className="address">
                    <li>Maharlika Highway</li>
                    <li>San Pablo Sto Tomas Batangas</li>
                    <li>Philippines</li>
                  </ul>

                  <ul className="links-info">
                    <li>
                      <span>Phone:</span>+639190754493
                    </li>
                    <li>
                      <span>Email:</span>md.i30degree@gmail.com
                    </li>
                  </ul>
                </div>

                <div className="links-list-content col-xl-6">
                  <h4>Useful Links</h4>

                  <div className="other-links">
                    <a href="#hero">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Home
                    </a>
                    <a href="#about">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      About us
                    </a>
                    <a href="#product">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Services
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Terms of service
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="links-list-content col-xl-6">
                  <h4>Useful Services</h4>

                  <div className="other-links">
                    <a href="">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Web Design
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Web Development
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Product Management
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Marketing
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      Graphic Design
                    </a>
                  </div>
                </div>

                <div className="links-list-content col-xl-6">
                  <h4>Our Social Networks</h4>

                  <p></p>

                  <div className="link-social-links">
                    <a href="https://www.facebook.com/i30degree">
                      <FontAwesomeIcon icon={faFacebook} className="social" />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} className="social" />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faSkype} className="social" />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} className="social" />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faBasketball} className="social" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="text-center">
        {" "}
        <small>
          Copyright 2021 - 2023 | | All Rights Reserved | Powered by{" "}
          <span className="text-primary fw-bold">i30degree</span>{" "}
        </small>
      </p>
    </div>
  );
}
