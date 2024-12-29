import React from "react";
import "./page1.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";

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
          <h1>Clothing Details</h1>
          
        </div>

      </div>
    </div>
  );
};

export default ClothingDetails;
