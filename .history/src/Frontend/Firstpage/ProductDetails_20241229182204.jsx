import React from "react";
import "./page1.css";
import { useParams, useLocation } from "react-router-dom";

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
              <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/i/m/m/m-ustshs1534-u-s-polo-assn-original-imags7tspgvfcemp.jpeg?q=90&crop=false" alt="" />
              <h1>Polo Shirt</h1>
              <p>Red</p>
              <h2>200</h2>
            </div>
            <div className="item2">
              <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/i/m/m/m-ustshs1534-u-s-polo-assn-original-imags7tspgvfcemp.jpeg?q=90&crop=false" alt="" />
              <h1>Polo Shirt</h1>
              <p>Red</p>
              <h2>200</h2>
            </div>
            <div className="item3">
              <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/i/m/m/m-ustshs1534-u-s-polo-assn-original-imags7tspgvfcemp.jpeg?q=90&crop=false" alt="" />
              <h1>Polo Shirt</h1>
              <p>Red</p>
              <h2>200</h2>
            </div>
            <div className="item4">
              <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/i/m/m/m-ustshs1534-u-s-polo-assn-original-imags7tspgvfcemp.jpeg?q=90&crop=false" alt="" />
              <h1>Polo Shirt</h1>
              <p>Red</p>
              <h2>200</h2>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
