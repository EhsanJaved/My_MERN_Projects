import React from "react";
import "../Page3/main.css";
// import MainLogo from'./iconsAndImages/logoHN.png';
// import carouselOne from './iconsAndImages/carouselOne.jpg'; 
import { Link } from "react-router-dom";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function Main(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        
      <style
        dangerouslySetInnerHTML={{
            __html:
              "\n    .bd-placeholder-img {\n      font-size: 1.125rem;\n      text-anchor: middle;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      user-select: none;\n    }\n\n    @media (min-width: 768px) {\n      .bd-placeholder-img-lg {\n        font-size: 3.5rem;\n      }\n    }\n\n    .b-example-divider {\n      width: 100%;\n      height: 3rem;\n      background-color: rgba(0, 0, 0, .1);\n      border: solid rgba(0, 0, 0, .15);\n      border-width: 1px 0;\n      box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n    }\n\n    .b-example-vr {\n      flex-shrink: 0;\n      width: 1.5rem;\n      height: 100vh;\n    }\n\n    .bi {\n      vertical-align: -.125em;\n      fill: currentColor;\n    }\n\n    .nav-scroller {\n      position: relative;\n      z-index: 2;\n      height: 2.75rem;\n      overflow-y: hidden;\n    }\n\n    .nav-scroller .nav {\n      display: flex;\n      flex-wrap: nowrap;\n      padding-bottom: 1rem;\n      margin-top: -1px;\n      overflow-x: auto;\n      text-align: center;\n      white-space: nowrap;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .btn-bd-primary {\n      --bd-violet-bg: #712cf9;\n      --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n      --bs-btn-font-weight: 600;\n      --bs-btn-color: var(--bs-white);\n      --bs-btn-bg: var(--bd-violet-bg);\n      --bs-btn-border-color: var(--bd-violet-bg);\n      --bs-btn-hover-color: var(--bs-white);\n      --bs-btn-hover-bg: #6528e0;\n      --bs-btn-hover-border-color: #6528e0;\n      --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n      --bs-btn-active-color: var(--bs-btn-hover-color);\n      --bs-btn-active-bg: #5a23c8;\n      --bs-btn-active-border-color: #5a23c8;\n    }\n    .bd-mode-toggle {\n      z-index: 1500;\n    }\n  ",
          }}
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>About Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="container text-center">
                <div class="row">
                    <div class="col fw-bold">
                    Price
                    </div>                    
                    <div class="col">
                    price....
                    </div>
                </div>
                <div class="row">
                    <br/>
                </div>
                <div class="row">
                    <div class="col fw-bold">
                    description
                    </div>                    
                    <div class="col">
                    description...
                    </div>
                </div>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
      {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
      </svg>
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#circle-half" />
          </svg>
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#sun-fill" />
              </svg>
              Light
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2" />
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#moon-stars-fill" />
              </svg>
              Dark
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2" />
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#circle-half" />
              </svg>
              Auto
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2" />
              </svg>
            </button>
          </li>
        </ul>
      </div> */}
      <header data-bs-theme="dark">
      <nav
        className="navbar navbar-expand-md bg-dark fixed-top "
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand d-md-none" href="#">
            <svg className="bi" width={24} height={24}>
              <use xlinkHref="#aperture" />
            </svg>
            Aperture
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="#offcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="#offcanvas"
            aria-labelledby="#offcanvasLabel"
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
                  <a className="nav-link text-light" href="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkHref="#aperture" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    {props.Logo}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Enterprise
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkHref="#cart" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <main>
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
          data-bs-theme="light"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={props.cr1} alt=""width="100%" height="100%" />
              <div className="container">
                <div className="carousel-caption text-start text-black">
                  <h1>Example headline.</h1>
                  <p className="opacity-75">
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img src={props.cr2} alt=""width="100%" height="100%" />
              <div className="container">
                <div className="carousel-caption text-black">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img src={props.cr3} alt=""width="100%" height="100%" />
              <div className="container ">
                <div className="carousel-caption text-end text-black">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Marketing messaging and featurettes
  ================================================== */}
        {/* Wrap the rest of the page in another container to center all the content. */}
        <div className="container marketing">
          {/* Three columns of text below the carousel */}
         
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                First featurette heading.{" "}
                <span className="text-body-secondary">
                  Itll blow your mind.
                </span>
              </h2>
              <p className="lead">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
              <button className="btn btn-primary">Explore More</button>
            </div>
            <div className="col-md-5">
                
              <img className="shadow-lg p-3 mb-5 bg-body-tertiary rounded featurette-image img-fluid mx-auto" src={props.imgg} alt="" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, its that good.{" "}
                <span className="text-body-secondary">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
              <button className="btn btn-primary" onClick={handleShow}>Explore More</button>
            </div>
            <div className="col-md-5 order-md-1">
            <img className="shadow-lg p-3 mb-5 bg-body-tertiary rounded featurette-image img-fluid mx-auto" src={props.imgg} alt="" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                And lastly, this one.{" "}
                <span className="text-body-secondary">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
              <button className="btn btn-primary">Explore More</button>
            </div>
            <div className="col-md-5">
            <img className="shadow-lg p-3 mb-5 bg-body-tertiary rounded featurette-image img-fluid mx-auto" src={props.imgg} alt="" />
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* /END THE FEATURETTES */}
        </div>
        {/* /.container */}
        {/* FOOTER */}
        <footer className="container">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            © 2017–2023 Company, Inc. · <a href="#">Privacy</a> ·{" "}
            <a href="#">Terms</a>
          </p>
        </footer>
      </main>
    </div>
  );
}
