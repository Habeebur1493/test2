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
          <div class="container">
            <div class="header">
            <img src="" alt="" />
            <div class="info">
                <h1>POCO C75 5G (Enchanted Green, 64 GB)</h1>
                <div class="rating">4.3 ★ | 1,445 Ratings & 110 Reviews</div>
                <ul class="details">
                    <li>4 GB RAM | 64 GB ROM | Expandable Up to 1 TB</li>
                    <li>17.48 cm (6.88 inch) HD+ Display</li>
                    <li>50MP Rear Camera | 5MP Front Camera</li>
                    <li>5160 mAh Battery</li>
                    <li>4s Gen 2 5G Processor</li>
                    <li>1 Year Manufacturer Warranty for Phone & 6 Months Warranty for Accessories</li>
                </ul>
            </div>
        </div>
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
