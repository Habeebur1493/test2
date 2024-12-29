import React from "react";
import "./page1.css";
import { Link } from "react-router-dom";


const Products = () => {

  

  return (
    <div>
      <div className="container">
        <div  className="box1">
          <Link to>
          Clothing
          </Link>
        </div>
        <div className="box2">
          <Link>Mobile Phones</Link>
        </div>
        <div className="box3">
          <Link>Accessories</Link>
        </div>
        <div className="box4">
          <Link>Watches</Link>
        </div>
        <div className="box5">
          <Link>
          Telivision
          </Link>
        </div>
        <div className="box6">
          <Link>Home Appliances</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;