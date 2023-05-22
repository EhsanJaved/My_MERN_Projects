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
    Fname: "",
    Lname: "",
    number: 0,
    email: "",
    address: "",
    orders: [{ name: "", number: 0 }]
  });

  const handleOrderChange = (index, event) => {
    const { name, value } = event.target;
    const orders = [...customerDetails.orders];
    orders[index][name] = value;
    setCustomerDetails(prevState => ({
      ...prevState,
      orders
    }));
  };

  const handleAddOrder = () => {
    setCustomerDetails(prevState => ({
      ...prevState,
      orders: [...prevState.orders, { name: "", number: 0 }]
    }));
  };

  const handleRemoveOrder = index => {
    const orders = [...customerDetails.orders];
    orders.splice(index, 1);
    setCustomerDetails(prevState => ({
      ...prevState,
      orders
    }));
  };
  // const handlesubmit = (e) =>{
  //   e.preventDefault();
  //   console.log(customerDetails)
  // }
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
          value={customerDetails.Fname}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              Fname: e.target.value
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
          value={customerDetails.Lname}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              Lname: e.target.value
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
          <h4>Phone Number:</h4>
        </label>
        <input
        className="form-control"
          type="text"
          value={customerDetails.number}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              number: e.target.value
            })
          }
        />
      </div>
      </Col>
      <Col xs={9}>
      <div>
        <label className="form-label my-2">
          <h4>Email:</h4>
        </label>
        <input
        className="form-control"
          type="email"
          value={customerDetails.email}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              email: e.target.value
            })
          }
        />
      </div>
      </Col>
      </Row>
      <div className="mb-3">
        <label className="form-label my-2">
          <h4>Address:</h4>
          </label>
        <input
        className="form-control"
          type="text"
          value={customerDetails.address}
          onChange={e =>
            setCustomerDetails({
              ...customerDetails,
              address: e.target.value
            })
          }
        />
      </div>
      <div className="card my-4">
      <div className="card-header">
        <h3>Orders</h3>
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
                {customerDetails.orders.map((order, index) => (
                  <>
                   <tr>
                          <td>
                          <input
                          key={index}
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

