import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Fab1 from "../assets/fab1.jpg";
import Fab2 from "../assets/fab2.jpg";
import Fab3 from "../assets/fab3.jpg";
import Fab4 from "../assets/fab4.jpg";

const services = [
  {
    name: Fab1,
  },
  {
    name: Fab2,
  },
  {
    name: Fab3,
  },
  {
    name: Fab4,
  },
];

function Fabrication() {
  const [showContent, setShowContent] = useState(true);
  const [showIcon, setShowIcon] = useState(true);

  const servicesRows = [];

  for (let i = 0; i < services.length; i += 4) {
    const rowItems = services.slice(i, i + 4);
    servicesRows.push(rowItems);
  }

  const handleToggleContent = () => {
    setShowContent(!showContent);
    setShowIcon(false);
  };

  return (
    <>
      {showContent &&
        servicesRows.map((row, rowIndex) => (
          <div className="services-row row pt-5" key={rowIndex}>
            {row.map(({ name }, index) => (
              <div className="col-lg-3" key={index}>
                <div className="service">
                  <div className="service-content">
                    <div className="service-title">
                      <img
                        src={name}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      {showIcon && (
        <button className="btn m-1" onClick={handleToggleContent}>
          <FontAwesomeIcon icon={faX} />
        </button>
      )}
    </>
  );
}

export default Fabrication;
