import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
// proble solved need to add css 
export default function InvoiceMaker() {
  
  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log(customerDetails)
    try {
      // Send a POST request to the server to create a new customer
      await axios.post('/customers', customerDetails);
      alert('Customer created');
    } catch (error) {
      console.log(error);
      alert('Error creating customer');
    }
  };

   const [customerDetails, setCustomerDetails] = useState({
    CostumerFName: "",
    CostumerLName: "",
    CostumerCell: 0,
    CostumerEmail: "",
    CostumerAddress: "",
    CostumerPostalAddress: 0,
    CostumerOrder: [{ name: "", number: 0 }]
  });

  const handleOrderChange = (index, event) => {
    const { name, value } = event.target;
    const CostumerOrder = [...customerDetails.CostumerOrder];
    CostumerOrder[index][name] = value;
    setCustomerDetails(prevState => ({
      ...prevState,
      CostumerOrder
    }));
  };

  const handleAddOrder = () => {
    setCustomerDetails(prevState => ({
      ...prevState,
      CostumerOrder: [...prevState.CostumerOrder, { name: "", number: 0 }]
    }));
  };

  const handleRemoveOrder = index => {
    const CostumerOrder = [...customerDetails.CostumerOrder];
    CostumerOrder.splice(index, 1);
    setCustomerDetails(prevState => ({
      ...prevState,
      CostumerOrder
    }));
  };
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
      <Row>
      <Col>
      <div className="mb-3">
        <label htmlFor="Input" className="form-label "><h4>First Name:</h4></label>
        <input
        className="form-control"
          type="text"
          value={customerDetails.CostumerFName}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              CostumerFName: e.target.value
            })
          }
        />
      </div>
      </Col>
      <Col>
      <div>
        <label className="form-label">
          <h4>Last Name:</h4>
          </label>
        <input
        className="form-control"
          type="text"
          value={customerDetails.CostumerLName}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              CostumerLName: e.target.value
            })
          }
        />
      </div>
      </Col>
      </Row>
      <Row>
           <Col>
      <div className="mb-3">
        <label className="form-label my-2">
          <h4>Phone number:</h4>
        </label>
        <input
        className="form-control"
          type="text"
          value={customerDetails.CostumerCell}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              CostumerCell: e.target.value
            })
          }
        />
      </div>
      </Col>
      <Col xs={9}>
      <div>
        <label className="form-label my-2">
          <h4>CostumerEmail:</h4>
        </label>
        <input
        className="form-control"
          type="CostumerEmail"
          value={customerDetails.CostumerEmail}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              CostumerEmail: e.target.value
            })
          }
        />
      </div>
      </Col>
      </Row>
      <Row>
          <Col>
          <div className="mb-3">
        <label className="form-label my-2">
          <h4>CostumerAddress:</h4>
          </label>
        <input
        className="form-control"
          type="text"
          value={customerDetails.CostumerAddress}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              CostumerAddress: e.target.value
            })
          }
        />
      </div></Col>
          <Col>
      <div className="mb-3">
        <label className="form-label my-2">
          <h4>Postal Address:</h4>
        </label>
        <input
        className="form-control"
          type="text"
          value={customerDetails.CostumerPostalAddress}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              CostumerPostalAddress: e.target.value
            })
          }
        />
      </div>
      </Col>
      </Row>
{/* cart */}
      <div className="card my-4">
      <div className="card-header">
        <h3>CostumerOrder</h3>
        </div>
        
          <div className="card-body container" >
            <table className="table table-bordered">
              <tbody>
                <tr>
                <th className="text-center">Enter Item Name</th>
                <th className="text-center">Enter Quentity</th>
                <th className="text-center">
                <button className="btn btn-primary" type="button" onClick={handleAddOrder}>
                <i className="fas fa-plus"></i>
        </button>
                </th>
                </tr>
                {customerDetails.CostumerOrder.map((order, index) => (
                  <>
                   <tr>
                          <td>
                          <input
                          data
                          key={index}
                          list="datalistOptions"
            className="form-control"
              type="text"
              name="name"
              value={order.name}
              onChange={e => handleOrderChange(index, e)}
            />
                          </td>
                          <td>
                          <input
            className="form-control"
              type="number"
              name="number"
              value={order.number}
              onChange={e => handleOrderChange(index, e)}
            /> 
                          </td>
                          <td className="text-center">
                          <button className="btn btn-danger" type="button" onClick={() => handleRemoveOrder(index)}>
                          <i className="fas fa-minus"></i>
            </button>
                          </td>
                          </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>

      </div>
      <div className="container my-4 text-center ">
      <button
              type="submit"
              onClick={handlesubmit}
              className="btn btn-primary mx-2">
                Create Invoice</button>
                <button type="submit" className="btn btn-primary mx-2">
              Print Invoice
            </button>
            <button type="submit" className="btn btn-primary mx-2">
              Save as PDF
            </button>
                </div>    
    </div>
    <div className="my-2"></div>
    </>   
  );
}

