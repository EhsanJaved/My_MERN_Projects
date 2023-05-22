import React, { useState, useEffect } from "react";
import pro1 from "../iconsAndImages/product11.jpg";

import axios from "axios";
import { Button, Row, Col, Card, Form, Modal } from "react-bootstrap";
export default function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(event) {
    alert(`Product added`);
    setShow(false);
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("exampleForm.ControlInput1")); // prints the value of the "Email address" input
    console.log(formData.get("AddProForm.InputCP"));
    console.log(formData.get("AddProForm.InputSO"));
    console.log(formData.get("AddProForm.InputST"));
  }

  const [prod, setprod] = useState([]);
  useEffect(() => { 
    // Make a GET request to the backend API
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setprod(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Row xs={3} md={3} className="g-4">
        {prod.map((idx) => (
          <Col>
            <Card className="btn-outline-success mx-1 ">
              <Card.Img variant="top" src={pro1} width="" height="240" />
              <Card.Body>
                <Card.Title>
                  <b>Name: </b>
                  {idx.prductname}
                </Card.Title>
                <Card.Text>
                  <i className="fw-bold fst-normal" key={idx._id}>
                    ID:{" "}
                  </i>{" "}
                  {idx._id}
                  <br />
                  <i className="fw-bold fst-normal"> Cost Price: </i> Rs.
                  {idx.costprice}
                  <br />
                  <i className="fw-bold fst-normal">Sell Price: </i> Rs.
                  {idx.sellprice}
                  <br />
                  <i className="fw-bold fst-normal">In stock:</i> {idx.instock}{" "}
                  pices
                  <br />
                  <i className="fw-bold fst-normal">sold:</i> {idx.sold} pices
                  <br />
                  <i className="fw-bold fst-normal">Last Updated:</i>{" "}
                  {idx.updatedAt}
                  <br />
                  <button className="btn btn-outline-primary my-2 mx-4 ms-5">
                    <i className="mx-3">Edit</i>
                  </button>
                  <button className="btn btn-outline-primary my-2 mx-1">
                    <i className="mx-3">Delete</i>
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* add button large  */}
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={handleShow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </Row>
      {/* Product ADD */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD PRODUCT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                autoFocus
                controlId="exampleForm.ControlInput1"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddProForm.InputSO">
              <Form.Label>Product Image (NOT WORKING) </Form.Label>
              <Form.Control type="file" autoFocus />
            </Form.Group>
            <Row xs={2} md={2} className="g-4">
              <Form.Group className="mb-3" controlId="AddProForm.InputCP">
                <Form.Label>Product Cost Price</Form.Label>
                <Form.Control type="number" placeholder="0" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="AddProForm.InputSO">
                <Form.Label>Product sell Price</Form.Label>
                <Form.Control type="number" placeholder="0" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="AddProForm.InputSO">
                <Form.Label>Product Solds</Form.Label>
                <Form.Control type="number" placeholder="0" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="AddProForm.InputST">
                <Form.Label>Product In Stock</Form.Label>
                <Form.Control type="number" placeholder="0" autoFocus />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            ADD PRODUCT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
