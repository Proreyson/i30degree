import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const services = [
  {
    name: "ELECTRICAL SYSTEM",
  },
  {
    name: "LIGHTING",
  },
  {
    name: "POWER",
  },
  {
    name: "CABLE SUPPORT SYSTEM",
  },
  {
    name: "EARTHING & LIGHTNING PROTECTION SYSTEM",
  },
  {
    name: "MECHANICAL SYSTEM",
  },
  {
    name: "FIRE PROTECTION",
  },
  {
    name: "COMPRESSED DRY AIR SYSTEM",
  },
];

function Construction() {
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
                      <h3>{name}</h3>
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

export default Construction;
