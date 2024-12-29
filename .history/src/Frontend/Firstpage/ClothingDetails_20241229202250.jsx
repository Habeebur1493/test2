import React from "react";
import "./page1.css";
import { useParams, useLocation } from "react-router-dom";
import {  Link, Outlet } from "react-router-dom";

const ClothingDetails = () => {
  const params = useParams();
  const loacation = useLocation();

  console.log(loacation);

  return (
    <div className="ClothingDetails">
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
          
          <div className="item-list" href="/products/clothing/clothingdetails" target="_blank" rel="noopener noreferrer">
            <Link to="/products/clothing/clothingdetails" className="item1">
              <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/i/m/m/m-ustshs1534-u-s-polo-assn-original-imags7tspgvfcemp.jpeg?q=90&crop=false" alt="" />
              <h1>Polo T Shirt</h1>
              <p>Red</p>
              <h2>₹200.00</h2>
            </Link>
            <div className="item2">
              <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/i/m/m/m-ustshs1534-u-s-polo-assn-original-imags7tspgvfcemp.jpeg?q=90&crop=false" alt="" />
              <h1>Polo T Shirt</h1>
              <p>Red</p>
              <h2>₹200.00</h2>
            </div>
            <div className="item3">
              <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/i/m/m/m-ustshs1534-u-s-polo-assn-original-imags7tspgvfcemp.jpeg?q=90&crop=false" alt="" />
              <h1>Polo T Shirt</h1>
              <p>Red</p>
              <h2>₹200.00</h2>
            </div>
            <div className="item4">
              <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/i/m/m/m-ustshs1534-u-s-polo-assn-original-imags7tspgvfcemp.jpeg?q=90&crop=false" alt="" />
              <h1>Polo T Shirt</h1>
              <p>Red</p>
              <h2>₹200.00</h2>
            </div>
            <Outlet />
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default ClothingDetails;
