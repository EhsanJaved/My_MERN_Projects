import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Images(props) {
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseA = () => setShowA(false);
  const handleShowA = () => setShowA(true);


  function handleSubmit(event) {
    alert(`Product added`);
    setShow(false);
    event.preventDefault();
  }
  function handleSubmitA(event) {
    alert(`Product added`);
    setShowA(false);
    event.preventDefault();
  }
  return (
    <div>
      <h2>
        Icons and Logos{" "}
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={handleShowA}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </h2>

      <div className="grid row">
        <div className="col mx-3 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={props.icon} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">
                State: <i> Active</i>
              </h5>
              <button className="btn btn-primary" type="submit">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="col mx-3 my-3">
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.icon} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">
                State: <i>Not Active</i>
              </h5>
              <button className="btn btn-primary" type="submit">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="col mx-3 my-3">
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.icon} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">
                State: <i>Not Active</i>
              </h5>
              <button className="btn btn-primary" type="submit">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        Carousels{" "}
        <button
          type="button"
          class="btn btn-outline-primary"
          formTarget="Form.ControlInput1"
          onClick={handleShow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </h2>
      <div className="grid row">
        <div className="col mx-2 my-2 img-fluid rounded shadow p-3 mb-5 bg-body-tertiary">
          <div class="card ">
            <img src={props.crz} class="card-img " />
            <div class="card-img-overlay">
              <p class="card-text fw-bold ">
                STATE:
                <i className="btn-danger"> Active</i>
              </p>
              <input
                name=""
                id=""
                class="btn btn-primary"
                type="button"
                value="Button"
                // onClick={}
              />
            </div>
          </div>
        </div>
        <div className="col mx-2 my-2 img-fluid rounded shadow p-3 mb-5 bg-body-tertiary">
          <div class="card ">
            <img src={props.crz} class="card-img " />
            <div class="card-img-overlay">
              <p class="card-text fw-bold ">
                STATE:
                <i className="btn-danger"> Active</i>
              </p>
              <input
                name=""
                id=""
                class="btn btn-primary"
                type="button"
                value="Button"
              />
            </div>
          </div>
        </div>
      </div>
{/* modal 2 */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                autoFocus
                controlId="Form.ControlInput1"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>STATE</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Not Active</option>
                <option>Active</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
            <Form.Label>Group</Form.Label>
              <Form.Control
                type="name"
                placeholder="Carousels"
                disabled
                value={'carousels'}
                controlId="Form.ControlInput1"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddProForm.InputSO">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" autoFocus />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Image
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal 0 */}


      <Modal show={showA} onHide={handleCloseA}>
        <Modal.Header closeButton>
          <Modal.Title>Add Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(event) => handleSubmitA(event)}>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                autoFocus
                controlId="Form.ControlInput1"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>STATE</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Not Active</option>
                <option>Active</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
            <Form.Label>Group</Form.Label>
              <Form.Control
                type="name"
                placeholder="Icon"
                disabled
                value={'icon'}
                controlId="Form.ControlInput1"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddProForm.InputSO">
              <Form.Label>Image </Form.Label>
              <Form.Control type="file" autoFocus />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseA}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseA}>
            Add Image
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
  );
}
