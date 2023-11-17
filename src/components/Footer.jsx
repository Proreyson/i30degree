import React from "react";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="links-list-content col-xl-6">
                <h3>i30 Degree</h3>
                <ul className="other-links">
                  <li>Maharlika Highway</li>
                  <li>San Pablo Sto Tomas Batangas</li>
                  <li>Philippines</li>
                </ul>
                <ul>
                  <li>Phone: </li>
                  <li>Email: </li>
                </ul>
              </div>

              <div className="col-xl-6">
                <h4>Useful Links</h4>
                <div className="other-links">
                  <a href="#"><FontAwesomeIcon icon={faChevronRight} className="icon" />Home</a>
                  <a href="#"><FontAwesomeIcon icon={faChevronRight} className="icon" />About us</a>
                  <a href="#"><FontAwesomeIcon icon={faChevronRight} className="icon" />Services</a>
                  <a href="#"><FontAwesomeIcon icon={faChevronRight} className="icon" />Terms of services</a>
                  <a href="#"><FontAwesomeIcon icon={faChevronRight} className="icon" />Private Policy</a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-6">
            <div className="row">
              <div className="col-xl-6">
                <h4>Useful Services</h4>
                <div className="other-links">
                  <a href="">
                  <FontAwesomeIcon icon={faChevronRight} className="icon" />Web Design
                  </a>
                  <a href="">
                  <FontAwesomeIcon icon={faChevronRight} className="icon" />Web Development
                  </a>
                  <a href="">
                  <FontAwesomeIcon icon={faChevronRight} className="icon" />Product Management
                  </a>
                  <a href="">
                  <FontAwesomeIcon icon={faChevronRight} className="icon" />Marketing
                  </a>
                  <a href="">
                  <FontAwesomeIcon icon={faChevronRight} className="icon"/>Graphic Design
                  </a>
                </div>
              </div>
              <div className="col-xl-6">
                <h4>Our Social Networks</h4>

                <div className="link-social-links">
                  <a href="">
                      <FontAwesomeIcon icon="fa-brands fa-facebook" />
                  </a>
                  <a href="">
                   
                  </a>
                  <a href="">
                   
                  </a>
                  <a href="">
                    
                  </a>
                  <a href="">
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
