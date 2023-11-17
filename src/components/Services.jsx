import content1 from "../assets/content1.png";
import content2 from "../assets/content2.png";
import content3 from "../assets/content3.png";
import content4 from "../assets/content4.png";
import { useEffect, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  const [activeTab, setActiveTab] = useState("onRoad");

  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);


  function openService(serName) {
    setActiveTab(serName);
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.fontWeight = "bold";
    }
    document.getElementById(serName).style.display = "block";
  }


  return (
    <>
      <section className="services" id="services">
        <div
          className="services-content"
          
          
          
        >
          <div className="main">
            <h2 className="text-center fw-bold">Professional Offers</h2>
          </div>

          <div className="services-row-contents container-fluid">
            <div className="tab text-center">
              <a
                id="defaultOpen"
                className={`tablinks ${
                  activeTab === "onRoad" ? "underline" : ""
                }`}
                onClick={() => {
                  openService("onRoad");
                }}
              >
                Engineering Design and Consultancy{" "}
              </a>
              <a
                className={`tablinks ${
                  activeTab === "offRoad" ? "underline" : ""
                }`}
                onClick={() => {
                  openService("offRoad");
                }}
              >
                Civil, Mech, Elect & Electronics Sign and Seal of Plans{" "}
              </a>
              <a
                className={`tablinks ${
                  activeTab === "generator" ? "underline" : ""
                }`}
                onClick={() => {
                  openService("generator");
                }}
              >
                Mech, Elect, Electronics Inspection and Certifications{" "}
              </a>
              <a
                className={`tablinks ${
                  activeTab === "bulk" ? "underline" : ""
                }`}
                onClick={() => {
                  openService("bulk");
                }}
              >
                DOLE, PEZA, LGU Permit requirements and Application{" "}
              </a>
            </div>

            {/* content 1 */}

            <div className="tabcontent" id="onRoad">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3>Engineering Design and Consultancy</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo dignissimos sapiente laborum, porro
                    deserunt vitae consequuntur provident suscipit tenetur
                    nostrum aut magnam possimus odio aliquam, neque, itaque
                    reiciendis?
                  </p>
                  <div className="checklist container">
                    <div className="row">
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Employee Safety
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Cost Savings
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Reduced Downtime
                        </span>
                      </div>
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Increased
                          Efficiency
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> 24/7 Availability
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> No Contracts or
                          Minimums
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={content1} alt="" width={"100%"} />
                </div>
              </div>
            </div>

            {/* content 2 */}

            <div className="tabcontent" id="offRoad">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3>
                    {" "}
                    Civil, Mech, Elect & Electronics Sign and Seal of Plans
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo dignissimos sapiente laborum, porro
                    deserunt vitae consequuntur provident suscipit tenetur
                    nostrum aut magnam possimus odio aliquam, neque, itaque
                    reiciendis?
                  </p>
                  <div className="checklist container">
                    <div className="row">
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Employee Safety
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Cost Savings
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Reduced Downtime
                        </span>
                      </div>
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Increased
                          Efficiency
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> 24/7 Availability
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> No Contracts or
                          Minimums
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={content2} alt="" width={"100%"} />
                </div>
              </div>
            </div>

            {/* content 3 */}

            <div className="tabcontent" id="generator">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3>
                    {" "}
                    Mech, Elect, Electronics Inspection and Certifications
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo dignissimos sapiente laborum, porro
                    deserunt vitae consequuntur provident suscipit tenetur
                    nostrum aut magnam possimus odio aliquam, neque, itaque
                    reiciendis?
                  </p>

                  <div className="checklist container">
                    <div className="row">
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Employee Safety
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Cost Savings
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Reduced Downtime
                        </span>
                      </div>
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Increased
                          Efficiency
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> 24/7 Availability
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> No Contracts or
                          Minimums
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={content3} alt="" width={"100%"} />
                </div>
              </div>
            </div>

            {/* content 3 */}
            <div className="tabcontent" id="generator">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3>
                    {" "}
                    Mech, Elect, Electronics Inspection and Certifications
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo dignissimos sapiente laborum, porro
                    deserunt vitae consequuntur provident suscipit tenetur
                    nostrum aut magnam possimus odio aliquam, neque, itaque
                    reiciendis?
                  </p>
                  <div className="checklist container">
                    <div className="row">
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Employee Safety
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Cost Savings
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Reduced Downtime
                        </span>
                      </div>
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Increased
                          Efficiency
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> 24/7 Availability
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> No Contracts or
                          Minimums
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={content3} alt="" width={"100%"} />
                </div>
              </div>
            </div>

            {/* content 4 */}
            <div className="tabcontent" id="bulk">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3> DOLE, PEZA, LGU Permit requirements and Application</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo dignissimos sapiente laborum, porro
                    deserunt vitae consequuntur provident suscipit tenetur
                    nostrum aut magnam possimus odio aliquam, neque, itaque
                    reiciendis?
                  </p>

                  <div className="checklist container">
                    <div className="row">
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Employee Safety
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Cost Savings
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Reduced Downtime
                        </span>
                      </div>
                      <div className="col-md-5">
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> Increased
                          Efficiency
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> 24/7 Availability
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCheck} /> No Contracts or
                          Minimums
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={content4} alt="" width={"100%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
