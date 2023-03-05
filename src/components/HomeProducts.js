import React from 'react' // canceled 
import axios from 'axios';
export default function HomeProducts() {

  return (
    <>
    <div className="row row-cols-1 row-cols-md-2 g-4 my-4">
        <div className="col">
          {/*  */}
          
          <div className="card mx-4">  
            <div className="card-body">
              <h3 className="card-title text-center">Product Name</h3>
              <div>
                <h5>Sold</h5>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                  </div>
              </div>
              <div>
                <h5>In Stock</h5>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                  </div>
              </div></div>
          </div>
          {/*  */}
        </div>
        <div className="col">
            <div className="card mx-4 ">  
              <div className="card-body">
                <h3 className="card-title text-center">Product Name</h3>
                  <div>
                    <h5>Sold</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                      </div>
                  </div>
                  <div>
                    <h5>In Stock</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <div className="container" id="total">
<div className="container my-4" id="1">
    <h3>TOTAL SOLD</h3>
    <div className="progress" style="height: 20px;">
        <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
</div>
<div className="container my-4" id="2">
    <h3>TOTAL IN STOCK</h3>
    <div className="progress" style="height: 20px;">
        <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
</div>
      </div>
    </>
  )
}
