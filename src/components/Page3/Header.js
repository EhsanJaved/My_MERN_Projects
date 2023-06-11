import React from "react";
import "../Page3/main.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";
import LOGO from "./HN_Dental_BG.png";
export default function Header(props) {
  return (
    <header data-bs-theme="dark">
      <nav
        className="navbar navbar-expand-md NavbarMain sticky-top "
        data-bs-theme="dark"
      >
        <div className="container">
          {/* <a className="navbar-brand d-md-none" href="#"> */}
          {/* <svg className="bi" width={24} height={24}> */}
          {/* <use src={LOGO} /> */}
          {/* {props.MainLogo} */}
          {/* <img src={props.MainLogo} width="30" height="24" /> */}
          {/* <img src={props.logo} alt="HN dental" width={24} height={24} /> */}
          {/* </svg> */}
          {/* Aperture */}
          <Navbar.Brand href="#home">
            <img
              src={LOGO}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          {/* button work */}
          {/* </a> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="#offcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              
              <h5 className="offcanvas-title" id="#offcanvasLabel">
                Aperture
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkHref="#aperture" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    help
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Enterprise
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkHref="#cart" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary" to="/login">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
Header.propTypes = {
  logo: PropTypes.object,
};
