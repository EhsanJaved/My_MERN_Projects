import React from "react";
import "../Page3/main.css";
import Header from "./Header";
// import MainLogo from'./iconsAndImages/logoHN.png';
// import carouselOne from './iconsAndImages/carouselOne.jpg'; 
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";
export default function Main(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
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
      <Header/>
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
        <Footer/>
      </main>
    </div>
  );
}
