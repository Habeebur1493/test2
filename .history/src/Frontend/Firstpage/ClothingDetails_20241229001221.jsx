import React from "react";
import "./page1.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";

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
          <h1>Clothing Details</h1>
          <div class="container2">
            <div class="header">
               <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/j/5/-original-imah7jspaphhbvxr.jpeg?q=70" alt="POCO C75 5G" />
                 <div class="info">
                    
               <div class="pricing">
                  <span class="price">₹8,499</span>
                  <span class="discount">₹10,999</span>
                <div class="offers">Free delivery | Up to ₹5,750 Off on Exchange</div>
            </div>
         </div>
        </div>

      </div>
    </div>
  );
};

export default ClothingDetails;