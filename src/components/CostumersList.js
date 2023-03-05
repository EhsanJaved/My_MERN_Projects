import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
export default function Costumerslist() {

  const [data, setUsers] = useState([]);
  useEffect(() => {
    // Make a GET request to the backend API
    axios.get('http://localhost:5000/costumers')
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 

  return (    
    <>
    <h2 className='mx-2'></h2>
      <div className="table-responsive mx-3">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">cell</th>
              <th scope="col">email </th>
              <th scope="col">address</th>
            </tr>
          </thead>
          <tbody>        
          {data.map(costumers => (
          <tr key={costumers.CoustumersPhonenumber}>
            <td>{costumers.CoustumersName} {costumers.CoustumersSurname}</td>
            <td>{costumers.CoustumersEmail}</td>
            <td key={costumers.CoustumersAddress}>{costumers.CoustumersAddress}</td>
            <td key={costumers.CoustumersPhonenumber}>{costumers.CoustumersPhonenumber}</td>
           </tr>
           ))}
          </tbody>
          <div className='position-absolute bottom-10 start-50 translate-middle-x my-3'>
          <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link disabled" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item disabled"><a className="page-link" href="#">1</a></li>
    <li className="page-item disabled"><a className="page-link" href="#">2</a></li>
    <li className="page-item disabled"><a className="page-link" href="#">3</a></li>
    <li className="page-item disabled">
      <a className="page-link disabled" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span> 
      </a>
    </li>
  </ul>
</nav>
          </div>
        </table>
      </div>
    </>
  )


}