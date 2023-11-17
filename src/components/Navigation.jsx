import navbarlogo from "../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default function Navigation() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light fixed-top`}
      >
        <a className="navbar-brand" href="/">
          <img className="navlogo" src={navbarlogo} width={35} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#partners">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Professional offers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
