import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
export default function HomeNew() {
  const [prod, setprod] = useState([]);
  const [allprod, setallprod] = useState([]);
  // for product catch
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
  //
  useEffect(() => {
    // Make a GET request to the backend API
    axios
      .get("http://localhost:5000/products/total_productsQuentity")
      .then((res) => {
        setallprod(res.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4 my-4">
        {prod.map((idx) => (
          <div className="col">
            <div className="card mx-4 ">
              <div className="card-body">
                <h3 className="card-title text-center">{idx.prductname}</h3>
                <div>
                  <h5>Sold</h5>
                  <ProgressBar
                    animated
                    now={idx.sold}
                    label={` ${idx.sold}`}
                  />
                </div>
                <div>
                  <h5>In Stock</h5>
                  <ProgressBar
                    animated
                    now={idx.instock}
                    label={` ${idx.instock}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {allprod.map((idxt) => (
      <div className="container" id="total">
          <div className="container my-4" id="1">
            <h3>TOTAL SOLD</h3>
            <ProgressBar
              now={idxt.TOTAL_PRODUCTS}
              label={idxt.TOTAL_PRODUCTS}
            />
          </div>
        <div className="container my-4" id="instock">
          <h3>TOTAL IN STOCK</h3>
          <ProgressBar now={(idxt.totalSold / idxt.TOTAL_PRODUCTS) * 100} label={`${idxt.totalSold}`} />
        </div>  
      </div>
      ))}
    </>
  );
}
