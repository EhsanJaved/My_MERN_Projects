import React from 'react';

export default function InvoiceMaker() {
  return(
    <>
<div className="container">
    <form>
        <div className="mb-3">
        <label htmlFor="Input" className="form-label my-2"><h4>First Name:</h4></label>
        <input type="email" className="form-control" id="input" aria-describedby="emailHelp"/>
        
        </div>
        <label htmlFor="leInput" className="form-label"><h4>Second Name:</h4></label>
        <input type="Name" className="form-control"/>
        
        <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label my-2"><h4>Phone Number:</h4></label>
            <input type="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label my-2"><h4>Email Adderss:</h4></label>
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
                className="form-control"
                list="datalistOptions"
                id="DataList"
                placeholder="Type to search..."
              />
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
              </datalist>
            </td>
            <td>
              <input
                type="number"
                name="item_name[]"
                value="1"
                className="form-control intem_name"
              />
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
                <datalist id="datalistOptions"/>
        <option value="San Francisco"/>
        <option value="New York"/>
        <option value="Seattle"/>
        <option value="Los Angeles"/>
        <option value="Chicago"/>
    <datalist/> 
        </div>
        </>
  )
}
