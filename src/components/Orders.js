import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function Orders() {

  const [order, setorder] = useState([]);
  useEffect(() => {
    // Make a GET request to the backend API
    axios.get('http://localhost:5000/orders/list')
      .then(res => {
        setorder(res.data);
        console.log(res.data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [orderdate, setorderdate] = useState([]);
  useEffect(() => {
    // Make a GET request to the backend API
    axios.get('http://localhost:5000/orders/listdate')
      .then(res => {
        setorderdate(res.data);
        console.log(res.data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <> 
     {order.map(orders => (
      
   <div className="card mx-3 my-3 text-center">
  <div className="card-header ">
 
    <h4 key={orders.OrdersNumber} >Order #{orders.OrdersNumber}</h4>
  </div>
  {orderdate.map(ordersda => (
  <div className="card-body ">
  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col fs-6 ">
    <div className='d-flex p-2 ' >
    <div className="card-text fw-bold">First Name:  
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>{orders.CoustumersName}</i>
    </div>
    <div className="card-text mx-5 fw-bold"> Second Name: 
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>{orders.CoustumersSurname}</i>
    </div>
    </div>
    <div className='my-3'>
    <div className='d-flex p-2 '>
    <div className="card-text fw-bold">Cell:
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>{orders.CoustumersPhonenumber}</i>
    </div>
    <div className="card-text mx-5 fw-bold"> Order Date:
    <i className='rounded border fst-normal mx-2 p-2 fw-normal' key={orders.OrdersNumber}>
      {ordersda.date}
      </i>
    </div>
    </div>
    </div>
    <div className=" card-text my-4 g-3 fw-bold col-8">Email:  
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>{orders.CoustumersEmail}</i>
    </div>
    </div>
    <div class="col fs-6">
        <div className="card-text mx-5 p-2 my-2 fw-bold">Orders ID :  
            <i className='rounded border fst-normal mx-2 p-2 fw-normal'>{orders.ProductID}</i>    
            <i className='rounded border fst-normal mx-2 p-2 fw-normal'>2</i>
            <i className="card-text mx-2 p-2 my-2 fw-bold">Price: 
            <i className='fst-normal fw-normal'>-/{orders.ProductPrice}</i>    
        </i>
        </div>
        <div className="card-text mx-5 p-2 my-2 fw-bold">Orders:  
            <i className='rounded border fst-normal mx-2 p-2 fw-normal'>Aiyarwadi</i>    
            <i className='rounded border fst-normal mx-2 p-2 fw-normal'>1</i>
            <i className="card-text mx-2 p-2 my-2 fw-bold">Price: 
            <i className='fst-normal fw-normal'>-/600</i>    
        </i>
        </div>
        Total bill is Rs. <i className='fw-bold'>1200</i>
    </div>
  </div>
  </div>
  </div>
   ))}  
  <div className="card-footer ">
    <button class="btn btn-primary mx-2 my-2" type="button">Create Bill</button>
    <button class="btn btn-primary mx-2 my-2" type="button">Done</button>
    <button class="btn btn-primary mx-2 my-2" type="button">Cancel Order</button>
    </div>
     
</div>

))}
<div className="card mx-3 my-3 text-center">
  <div className="card-header ">
    <h4>Order #1234</h4>
  </div>
  <div className="card-body ">
  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col fs-6 ">
    <div className='d-flex p-2 ' >
    <div className="card-text fw-bold">First Name:  
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>Ehsan</i>
    </div>
    <div className="card-text mx-5 fw-bold"> Second Name: 
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>Javed</i>
    </div>
    </div>
    <div className='my-3'>
    <div className='d-flex p-2 '>
    <div className="card-text fw-bold">Cell:
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>1234567890</i>
    </div>
    <div className="card-text mx-5 fw-bold"> Order Date:
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>12-12-12</i>
    </div>
    </div>
    </div>
    <div className=" card-text my-4 g-3 fw-bold col-8">Email:  
    <i className='rounded border fst-normal mx-2 p-2 fw-normal'>ehsanjavedrock@gmail.com</i>
    </div>
    </div>
    <div class="col fs-6">
        <div className="card-text mx-5 p-2 my-2 fw-bold">Orders:  
            <i className='rounded border fst-normal mx-2 p-2 fw-normal'>shahrwadi</i>    
            <i className='rounded border fst-normal mx-2 p-2 fw-normal'>2</i>
            <i className="card-text mx-2 p-2 my-2 fw-bold">Price: 
            <i className='fst-normal fw-normal'>-/600</i>    
        </i>
        </div>
        <div className="card-text mx-5 p-2 my-2 fw-bold">Orders:  
            <i className='rounded border fst-normal mx-2 p-2 fw-normal'>Aiyarwadi</i>    
            <i className='rounded border fst-normal mx-2 p-2 fw-normal'>1</i>
            <i className="card-text mx-2 p-2 my-2 fw-bold">Price: 
            <i className='fst-normal fw-normal'>-/600</i>    
        </i>
        </div>
        Total bill is Rs. <i className='fw-bold'>1200</i>
    </div>
  </div>
  </div>
  </div>
  <div className="card-footer ">
    <button class="btn btn-primary mx-2 my-2" type="button">Create Bill</button>
    <button class="btn btn-primary mx-2 my-2" type="button">Done</button>
    <button class="btn btn-primary mx-2 my-2" type="button">Cancel Order</button>
    </div>
</div>
</>
  )
}
