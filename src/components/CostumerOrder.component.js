import React from 'react'
import {Row, Col} from 'react-bootstrap'
import testimage from '../iconsAndImages/product11.jpg'
// import  '../componentsCSS/glassdiv.css'
export default function CostumerRegister() {
  const glass = {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(89, 51, 192, 0.3)"
  }
  const modulback = {
background: "rgba(99, 60, 205, 0)",
borderRadius: "16px",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(0px)",
WebkitBackdropFilter: "blur(0px)",

  }
  
  return (
    <>

    <button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target='#BuyNow'>Buy Now</button>
    <button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#CostumerRegister">register</button>
    <button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#CostumerOrder">Order now</button>
    
    {/* module 0 */}
    <div class="modal fade" id="BuyNow" tabindex="-1" aria-labelledby="BuyNow" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <div className="card  " style={glass}>
        <div className="card-body p-5 text-center">
          <div className="mb-md-5 mt-md-4 pb-5">
            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
            <p className="-50 mb-5">Please enter your login and password!</p>
            <div className="form-outline  mb-4">
            <label className="form-label" htmlFor="typeEmailX">Email</label>
              <input type="email" id="typeEmailX" className="form-control form-control-lg" />
            </div>
            <div className="form-outline  mb-4">
            <label className="form-label" htmlFor="typePasswordX">Password</label>
              <input type="password" id="typePasswordX" className="form-control form-control-lg" />
            </div>
            <p className="small mb-5 pb-lg-2"><a className="text-black-50" href="#!">Forgot password?</a></p>
            <button className="btn btn-outline-primary btn-lg px-5" type="submit">Login</button>
            <div className="d-flex justify-content-center text-center mt-4 pt-1">
            </div>
          </div>
          <div>
            <p className="mb-0">Don't have an account? <a href="#" data-bs-toggle="modal" data-bs-target="#CostumerRegister" className=" fw-bold">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>


    {/* Module 1 */}
    <div className="modal fade" id="CostumerRegister" tabindex="-1" aria-labelledby="CostumerRegister" aria-hidden="true">
  <div className="modal-dialog card">
    <div className="modal-content card">
      <div className="modal-body card">
    
        <div class="modal-body card">
      <div className="card  " style={glass}>
        <div className="card-body p-5 text-center">
          <div className="mb-md-5 mt-md-4 pb-5">
            <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
            <p className="-50 mb-5">Please enter your Name, Email and Password!</p>
            <div className="form-outline  mb-4">
            <Row xs={2} md={2} className="g-4">
       <Col>
        <label for="FirstUserName" className="form-label">First Name</label>
    <input id='FirstUserName' className="form-control" type="text" placeholder=""/>
    </Col>
    <Col>
    <label for="SecondtUserName" className="form-label">Second Name</label>
    <input id='SecondUserName' className="form-control" type="text" placeholder=""/>
    </Col>
        </Row>
            <label className="form-label" htmlFor="typeEmailX">Email</label>
              <input type="email" id="typeEmailX" className="form-control form-control-lg" />
            </div>
            <div className="form-outline  mb-4">
            <label className="form-label" htmlFor="typePasswordX">Password</label>
              <input type="password" id="typePasswordX" className="form-control form-control-lg" />
            </div>
            <button className="btn btn-outline-primary btn-lg px-5" type="submit">Sign up</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>

{/* modul 2 */}
<div className="modal fade modal-lg" id="CostumerOrder" tabindex="-1" aria-labelledby="CostumerOrder" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content ">
      <div className="modal-body " >
      <div className="col"style={glass}>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="h5">Make your order</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="d-flex ">
                    <img src={testimage} className="img-fluid rounded-3" style={{width: 120}} alt="Book" />
                    <div className="flex-column ms-4">
                      <p className="mb-2">Thinking, Fast and Slow</p>
                      <p className="mb-0">Daniel Kahneman</p>
                    </div>
                  </div>
                </th>
                
                <td className="align-middle">
                  <div className="d-flex flex-row">
                    <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i className="fas fa-minus" />
                    </button>
                    <input disabled id="form1" min={0} name="quantity" defaultValue={0} type="number" className="form-control form-control-sm" style={{width: 50}} />
                    <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </td>
                <td className="align-middle">
                  <p className="mb-0" style={{fontWeight: 500}}>$9.99</p>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-bottom-0">
                  <div className="d-flex align-items-center">
                    <img src={testimage} className="img-fluid rounded-3" style={{width: 120}} alt="Book" />
                    <div className="flex-column ms-4">
                      <p className="mb-2">Homo Deus: A Brief History of Tomorrow</p>
                      <p className="mb-0">Yuval Noah Harari</p>
                    </div>
                  </div>
                </th>
                
                <td className="align-middle border-bottom-0">
                  <div className="d-flex flex-row">
                    <button className="btn btn-link px-2"  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i className="fas fa-minus" />
                    </button>
                    <input disabled id="form1" min={0} name="quantity" defaultValue={0} type="number" className="form-control form-control-sm" style={{width: 50}} />
                    <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </td>
                <td className="align-middle border-bottom-0">
                  <p className="mb-0" style={{fontWeight: 500}}>$13.50</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="my-4" />
        <Row xs={1} md={3} className="g-4">
          <Col></Col>
          <Col></Col>
          <Col>
        <div className="container  mb-5 mb-lg-0" >
          <div className="card-body p-4">
            <div className="row">
              
              
              <div className="col-lg-4 col-xl-3">
                <div className="d-flex justify-content-between" >
                  <p className="mb-2 fw-bold">Subtotal</p>
                  <p className="mb-2">$23.49</p>
                </div>
                <div className="d-flex justify-content-between" >
                  <p className="mb-0 fw-bold">Shipping</p>
                  <p className="mb-0">$2.99</p>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-between mb-4" >
                  <p className="mb-2 fw-bold">Total</p>
                  <p className="mb-2">$26.48</p>
                </div>
                <button type="button" className="btn btn-primary btn-block btn-lg">
                  <div className="d-flex justify-content-between">
                    <span>Checkout</span>
                    <span>$26.48</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        </Col>
        </Row>
      </div>
    </div>
  </div>
</div>
     </div>
    
    </>

  )
}

