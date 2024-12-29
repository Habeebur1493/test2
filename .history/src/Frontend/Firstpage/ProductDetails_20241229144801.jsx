import React, { useState } from "react";
import "./page1.css";
import {  useParams, useLocation } from "react-router-dom";



const ProductDetails = () => {
  const params = useParams();
  const loacation = useLocation();
  console.log(loacation);

  return (
    <div className="ProductDetails">
      <div className="container1">

        <div className="column1">
          <h1>Customization</h1>
          <input type="text" placeholder="Search Here.." /><br />
          <select name="Products" id="Products">
            <option value="">Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Headphones">Headphones</option>
            <option value="Watches">Watches</option>
            <option value="Telivision">Telivision</option>
            <option value="Shoes">Shoes</option>
          </select>
          <button>Search</button>
        </div>

        <div className="column2">
          <h1>Product Details</h1>

          <div className="item-list">
            <div className="item1">  
              <img src="" alt="" />
              <h1></h1>
              <p></p>
              <h2></h2>
          </div>   
        </div>



      </div>
    </div>
  );
};

export default ProductDetails;
