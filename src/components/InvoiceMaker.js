import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
export default function InvoiceMaker() {
  // to be replaced with invoicemaker2 but before that need to impiment css to it (DONE)
  const [Costumerdetails, setCostumerdetails] = useState([
    {
      Fname: "",
      Lname: "",
      number: 0,
      email: "",
      address: "",
      order: [{ name: "", number: 0 }],
    },
  ]);
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    setFields([...fields, { name: "", number: 0 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCostumerdetails.order(fields);
    console.log(fields, Costumerdetails);
  };

  const onChange = (event) => {
    setCostumerdetails({
      ...Costumerdetails,
      [event.target.name]: event.target.value,
    });
  };

  function handleDeleteField(index) {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  }
  // const [Costumerdetails, setCostumerdetails] = useState([]);
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
      <datalist id="datalistOptions">
        {prod.map((display) => (
          <option value={display.prductname} />
        ))}
      </datalist>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <div className="mb-3">
                <label htmlFor="Input" className="form-label ">
                  <h4>First Name:</h4>
                </label>
                <input
                  value={Costumerdetails.Fname}
                  type="Fname"
                  className="form-control"
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
              </div>
            </Col>
            <Col>
              <label htmlFor="leInput" className="form-label">
                <h4>Second Name:</h4>
              </label>
              <input
                type="Lname"
                name="Lname"
                id="Lname"
                className="form-control"
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label my-2">
                  <h4>Cell Number:</h4>
                </label>
                <input
                  onChange={onChange}
                  type="Name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </Col>
            <Col xs={9}>
              <div className="mb-3">
                <label htmlFor="Input" className="form-label my-2">
                  <h4>Email Adderss:</h4>
                </label>
                <input
                  type="Name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={onChange}
                />
              </div>
            </Col>
          </Row>

          <div className="mb-3">
            <label htmlFor="Input" className="form-label my-2">
              <h4>Adderss:</h4>
            </label>
            <input
              type="Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>

          <div className="card my-4">
            <div className="card-header">
              <i className="fw-bold">Enter item Details:</i>
            </div>
            <div className="card-body container">
              <form method="post" id="insert_form">
                <table className="table table-bordered" id="item_table">
                  <tbody>
                    <tr>
                      <th>Enter Item Name</th>
                      <th>Enter Quentity</th>
                      <th className="text-center">
                        <button
                          type="button"
                          name="add"
                          onClick={handleAddField}
                          className="btn btn-success btn-sm add"
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </th>
                    </tr>
                    {fields.map((field, index) => (
                      <>
                        <tr>
                          <td>
                            <input
                              className="form-control"
                              list="datalistOptions"
                              id="DataList"
                              type="name"
                              name="item_name[]"
                              value={field.name}
                              onChange={(event) => {
                                const list = [...fields];
                                list[index] = {
                                  ...list[index],
                                  name: event.target.value,
                                };
                                setFields(list);
                              }}
                              placeholder="Type to search..."
                            />
                          </td>
                          <td>
                            <input
                              value={field.number}
                              type="number"
                              onChange={(e) => {
                                const list = [...fields];
                                list[index] = {
                                  ...list[index],
                                  number: e.target.value,
                                };
                                setFields(list);
                              }}
                              name="item_name[]"
                              className="form-control intem_name"
                            />
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              name="Subtract"
                              onClick={() => handleDeleteField(index)}
                              className="btn btn-danger btn-sm add"
                            >
                              
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
          <div className="container my-4 text-center ">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary mx-2"
            >
              Create Invoice
            </button>
            <button type="submit" className="btn btn-primary mx-2">
              Print Invoice
            </button>
            <button type="submit" className="btn btn-primary mx-2">
              Save as PDF
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </>
  );
}
