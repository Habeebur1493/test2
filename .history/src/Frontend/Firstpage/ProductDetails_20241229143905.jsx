import React from "react";
import "./page1.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {Data} from "./Data";

const ProductDetails = () => {
  const params = useParams();
  const loacation = useLocation();


  const Search = () => {
     const [store, setStore] = useState([]);
  console.log(loacation);

  return (
    <div className="ProductDetails">
      <div className="container1">

        <div className="column1">
          <h1>Customization</h1>
          <input type="text" placeholder="Search Here.." /><br />
          {
            store.map((cur) => {
              return (
                div className="item-list">
                  <h1>{cur.name}</h1>
                  <p>{cur.price}</p>
                  <p>{cur.description}</p>
                  <p>{cur.category}</p>
                  <p>{cur.brand}</p>
                  <img src={cur.image} />
                </div>
              )
          }
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
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
