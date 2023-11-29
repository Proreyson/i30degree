import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const services = [
  {
    name: "ELECTRICAL SYSTEM",
  },
  {
    name: "THERMAL SCANNING",
  },
  {
    name: "INSULATION RESISTANCE TESTING",
  },
  {
    name: "POWER TRANSFORMER TESTING",
  },
  {
    name: "CIRCUIT BREAKER TESTING",
  },
  {
    name: "PROTECTION RELAY TESTING",
  },
  {
    name: "MECHANICAL SYSTEM",
  },
  {
    name: "FIRE & JOCKEY PUMP",
  },
  {
    name: "FIRE HOSE CABINET",
  },
  {
    name: "PRESSURE VESSELS & COMPRESSOR",
  },
  {
    name: "AHU,FCU & ACCU",
  },
  {
    name: "ELECTRONICS SYSTEM",
  },
  {
    name: "FIRE DETECTION & ALARM SYSTEM(FDAS)",
  },
  {
    name: "PUBLIC ADDRESS SYSTEM (PA/BGM)",
  },
  {
    name: "CLOSED-CIRCUIT TELEVISON (CCTV)",
  },
  {
    name: "STRUCTURED CABLING SYSTEM",
  },
  {
    name: "BUILDING MANAGEMENT SYSTEM",
  },
];

function Preventive() {
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

export default Preventive;
