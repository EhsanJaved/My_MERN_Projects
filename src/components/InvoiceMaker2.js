import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
export default function InvoiceMaker() {
  
  const [Costumerdetails, setCostumerdetails] = useState([{
    Fname: "",
    Lname: "",
    Cell: 0,
    email: "",
    address: "",
    order: []
  }]);
  const [fields, setFields] = useState([]);
  
  const handleAddField = () => {
    setFields([...fields, { name: "", number: 0 }]);
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setCostumerdetails([{ ...customerDetails[0], [name]: value }]);
  // };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Costumerdetails.join(", ")

    console.log(fields,Costumerdetails);



  };

  const onChange = (event) => {
const { name, value } = event.target;
setCostumerdetails([{ ...Costumerdetails[0], [name]: value }]);
  };
  // const arraychange = (eve) =>{
  //   const { name, value } = eve.target;
  //   setCostumerdetails([{ ...Costumerdetails.order[0], [name]: value }]);
  // } 

  function handleDeleteField(index) {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
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
                  type="text"
                  name="Fname"
                  className="form-control"
                  id="Fname"
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
              type="text"
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
                value={Costumerdetails.cell}
                onChange={onChange}
                  type="text"
                  id="Cell"
                  name="Cell"
                  className="form-control"
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
                name="email"
                id="email"
                  type="email"
                  className="form-control"
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
              id="address"
              name="address"
              type="text"
              className="form-control"
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
                              //  //  //
                              id="order"
                              type="text"
                              // name="order"
                              //  //  //
                              list="datalistOptions"
                              // id="DataList"
                              name="item_name[]"
                              // value={Costumerdetails[0].order[0].name}
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
                            // value={Costumerdetails[0].order[0].number}
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
                              <i className="fas fa-minus"></i>
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
