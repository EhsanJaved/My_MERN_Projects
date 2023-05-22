import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
function Records() {

  const [navbtn, setnavbtn] = useState({

    Oneadder1: 1,
    Oneadder2: 2,
    Oneadder3: 3,

    Twoadder1: 1,
    Twoadder2: 2,
    Twoadder3: 3,

    Threeadder1: 1,
    Threeadder2: 2,
    Threeadder3: 3
  }
  );


const onClickBTN1ADD =()=> {
  setnavbtn({
    Oneadder1: navbtn.Oneadder1 + 1,
    Oneadder2: navbtn.Oneadder2 + 1,
    Oneadder3: navbtn.Oneadder3 + 1
})}
const onClickBTN1SUB =()=> {
  if (navbtn.Oneadder1 >=2) {
    setnavbtn({
      Oneadder1: navbtn.Oneadder1 - 1,
      Oneadder2: navbtn.Oneadder2 - 1,
      Oneadder3: navbtn.Oneadder3 - 1
  })  
  }
  }
  
  return (
    <>
    {/* tabs start */}
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    {/* 1 */}
  <li to ="/CustomInvoice" class="nav-item" role="presentation">
    <button to ="/CustomInvoice" class="nav-link active fw-bold" id="home-tab1" data-bs-toggle="tab" data-bs-target="#home-tab-pane1" type="button" role="tab" aria-controls="home-tab-pane1" aria-selected="true">Custom Invoice</button>
  </li>
  {/* 2 */}
  <li to ="/CustomInvoice" class="nav-item" role="presentation">
    <button to ="/CustomInvoice" class="nav-link fw-bold" id="contact-tab2" data-bs-toggle="tab" data-bs-target="#contact-tab-pane2" type="button" role="tab" aria-controls="contact-tab-pane2" aria-selected="false">Invoice</button>
  </li>
  {/* 3 */}
  <li class="nav-item" role="presentation">
    <button class="nav-link fw-bold" id="contact-tab3" data-bs-toggle="tab" data-bs-target="#contact-tab-pane3" type="button" role="tab" aria-controls="contact-tab-pane3" aria-selected="false">Orders</button>
  </li>
</ul>
    {/* tabs end */}

    {/* data start of 1 */}
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane1" role="tabpanel" aria-labelledby="home-tab1" tabindex="0">
    <h2 className='mx-2'></h2>
<div className="table-responsive mx-2">
  <table className="table table-striped table-sm">
    <thead>
      <tr>
        
        <th scope="col">Name</th>
        <th scope="col">Cell Number</th>
        <th scope="col">Items Quantity</th>
        <th scope="col">Total bill</th>
        <th scope="col">Dated</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ehsan Javed</td>
        <td>1234567890</td>
        <td>3</td>
        <td>300</td>
        <td>2/3/22</td>   
      </tr>
     
     
    </tbody>
    <div className='position-absolute bottom-10 start-50 translate-middle-x my-3'>
    <nav aria-label="Page navigation example">
<ul className="pagination">
<Pagination>
      <Pagination.Prev onClick={onClickBTN1SUB} />
      <Pagination.Item active href={`:CuIn${navbtn.Oneadder1}`} >{navbtn.Oneadder1}</Pagination.Item>
      <Pagination.Item href={`:CuIn${navbtn.Oneadder2}`}>{navbtn.Oneadder2}</Pagination.Item>
      <Pagination.Item href={`:CuIn${navbtn.Oneadder3}`}>{navbtn.Oneadder3}</Pagination.Item>
      <Pagination.Next href={`:CuIn${navbtn.Oneadder1}`} onClick={onClickBTN1ADD} />
    </Pagination>
</ul>
</nav>
    </div>
  </table>
</div> 
    </div>
    {/* data end of 1 */}

    {/* data start of 2 */}
  <div class="tab-pane fade" id="contact-tab-pane2" role="tabpanel" aria-labelledby="contact-tab2" tabindex="0">
    <h2 className='mx-2'></h2>
<div className="table-responsive mx-2">
  <table className="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Cell Number</th>
        <th scope="col">Items Quantity</th>
        <th scope="col">Total bill</th>
        <th scope="col">Dated</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>1234567890</td>
        <td>4</td> 
        <td>300</td>   
        <td>12/3/23</td>   
      </tr>
     
     
    </tbody>
    <div className='position-absolute bottom-10 start-50 translate-middle-x my-3'>
    <nav aria-label="Page navigation example">
<ul className="pagination">
<li className="page-item">
<a className="page-link" href="#" aria-label="Previous">
  <span aria-hidden="true">&laquo;</span>
</a>
</li>
<li className="page-item"><a className="page-link" href="#">1</a></li>
<li className="page-item"><a className="page-link" href="#">2</a></li>
<li className="page-item"><a className="page-link" href="#">3</a></li>
<li className="page-item">
<a className="page-link" href="#" aria-label="Next">
  <span aria-hidden="true">&raquo;</span>
</a>
</li>
</ul>
</nav>
    </div>
  </table>
</div> 
    </div>
        {/* data end of 2*/}
    {/* data start of 3*/}
  <div class="tab-pane fade" id="contact-tab-pane3" role="tabpanel" aria-labelledby="contact-tab3" tabindex="0">
    <h2 className='mx-2'></h2>
<div className="table-responsive mx-2">
  <table className="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">Order Num</th>
        <th scope="col">Name</th>
        <th scope="col">Email Adress</th>
        <th scope="col">Cell Number</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
     
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
      <tr>
        <td>1</td>
        <td>Ehsan Javed</td>
        <td>Ehasanjavedrock@gmail.com</td>
        <td>1234567</td>
        <td>Pending</td>     
      </tr>
     
    </tbody>
    <div className='position-absolute bottom-10 start-50 translate-middle-x my-3'>
    <nav aria-label="Page navigation example">
<ul className="pagination">
<li className="page-item">
<a className="page-link" href="#" aria-label="Previous">
  <span aria-hidden="true">&laquo;</span>
</a>
</li>
<li className="page-item"><a className="page-link" href="#">1</a></li>
<li className="page-item"><a className="page-link" href="#">2</a></li>
<li className="page-item"><a className="page-link" href="#">3</a></li>
<li className="page-item">
<a className="page-link" href="#" aria-label="Next">
  <span aria-hidden="true">&raquo;</span>
</a>
</li>
</ul>
</nav>
    </div>
  </table>
</div> 
    </div>
        {/* data end of 3*/}
</div>
    </>
  );
}

export default Records;

 