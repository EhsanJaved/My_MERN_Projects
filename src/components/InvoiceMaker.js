import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
export default function InvoiceMaker() {

  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    setFields([...fields, ""]);
  };

const handleFieldChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index] = value;
    setFields(updatedFields);
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


  return(
    <>
<div className="container">
    <form>
      <Row>
        <Col>
        <div className="mb-3">
        <label htmlFor="Input" className="form-label my-2"><h4>First Name:</h4></label>
        <input type="email" className="form-control" id="input" aria-describedby="emailHelp"/>
        
        </div>
        </Col>
        <Col>
        <label htmlFor="leInput" className="form-label"><h4>Second Name:</h4></label>
        <input type="Name" className="form-control"/>
        </Col>
        </Row>
        <Row>
        <Col>
        <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label my-2"><h4>Phone Number:</h4></label>
            <input type="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        </Col>
        <Col xs={9}>
        <div className="mb-3">
            <label htmlFor="Input" className="form-label my-2"><h4>Email Adderss:</h4></label>
            <input type="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        </Col>
        </Row>

        <div className="mb-3">
            <label htmlFor="Input" className="form-label my-2"><h4>Adderss:</h4></label>
            <input type="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        
        <div className="card my-4">
  <div className="card-header">
    <i className='fw-bold'>Enter item Details:</i>
  </div>
  <div className="card-body container">
    <form method="post" id="insert_form">
      <table className="table table-bordered" id="item_table">
        <tbody>
          <tr>
            <th>Enter Item Name</th>
            <th>Enter Quentity</th>
            <th>
              <button type="button" name="add" className="btn btn-success btn-sm add">
                <i className="fas fa-plus"></i>
              </button>
            </th>
          </tr>
          <tr>
            <td>
              <input
                className="form-control" list="datalistOptions" id="DataList" placeholder="Type to search..." />
              
              <datalist id="datalistOptions">
              {prod.map((display) => (
                <option value={display.prductname} />
                ))}
                </datalist>
              
            </td>
            <td>
              <input type="number" name="item_name[]" value="0" className="form-control intem_name" />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</div>

                    <div className="container my-4 text-center ">
                    <button type="submit" className="btn btn-primary mx-2">Create Invoice</button>
                    <button type="submit" className="btn btn-primary mx-2">Print Invoice</button>
                    <button type="submit" className="btn btn-primary mx-2">Save as PDF</button>
                    </div>    
                </form>
        </div>

        <div>
      {fields.map((field, index) => (
        <input
          key={index}
          value={field}
          onChange={(e) => handleFieldChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleAddField}>Add Field</button>
    </div>

        </>
  )
}
