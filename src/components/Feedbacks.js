import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Feedbacks() {

  const [data, setUsers] = useState([]);
  useEffect(() => {
    // Make a GET request to the backend API
    axios.get('http://localhost:5000/costumers')
      .then(res => {
        setUsers(res.data);
        console.log(res.data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <h2 className='mx-2'></h2>
      <div className="table-responsive mx-2">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Adress</th>
              <th scope="col">Ratings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ehsan</td>
              <td>Javed</td>
              <td>Ehasanjavedrock@gmail.com</td>
              <td>5/5</td>
              
            </tr>
            {data.map(costumers => (
            <tr>
              <td>{costumers.CoustumersName}</td>
              <td>{costumers.CoustumersSurname}</td>
              <td>{costumers.CoustumersEmail}</td>
              <td>{costumers.rating}/5</td>
            </tr>
           ))}
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
    </>
  )
}
