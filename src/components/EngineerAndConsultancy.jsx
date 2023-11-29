import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const services = [
  {
    name: "ELECTRICAL, MECHANICAL & ELECTRONICS",
  },
  {
    name: "PEZA",
  },
  {
    name: "PERMIT TO INSTALL",
  },
  {
    name: "PETMIT TO OPERATE/OCCUPANCY PERMIT",
  },
  {
    name: "AS-BUILT DRAWINGS",
  },
  {
    name: "CERTIFICATION OF ELECTRICAL INSTALLATION",
  },
  {
    name: "CERTIFICATE OF SAFETY,RELIABILITY & CONFORMITY",
  },
  {
    name: "DOLE",
  },
  {
    name: "CERTIFICATE OF ELECTRICAL WIRING",
  },
  {
    name: "INSTALLATION",
  },
  {
    name: "POWER SYSTEM ANALYSIS",
  },
  {
    name: "PEPERMIT TO OPERATEZA",
  },
  {
    name: "INTERNAL COMBUSTION ENGINE",
  },
  {
    name: "PRESSURE VESSELS",
  },
  {
    name: "POWER PIPING",
  },
  {
    name: "HOIST & CRANE",
  },
  {
    name: "ELEVATOR",
  },
  {
    name: "AS-BUILT DRAWINGS",
  },
  {
    name: "TESTING REQUIREMENTS",
  },
  {
    name: "LOAD TESTING (ELEVATOR & CRANE)",
  },
  {
    name: "ULTRASONIC THICKNESS GAUGING",
  },
  {
    name: "THERMAL SCANNING",
  },
  {
    name: "INSPECTION & CERTIFICATION",
  },
  {
    name: "SIGN AND SEAL SERVICES",
  },
];

function Engineer() {
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

export default Engineer;
