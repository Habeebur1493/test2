import "./page1.css";
import {  Link, Outlet } from "react-router-dom";


const Products = () => {
  return (
    <div>
      <div className="container">
        <Link className="box1">
          <h1>Clothing</h1>
        </Link>
        <Link className="box2">
          <h1>Mobile Phones</h1>
        </Link>
        <Link className="box3">
          <h1>Headphones</h1>
        </Link>
        <Link className="box4">
          <h1>Watches</h1>
        </Link>
        <Link className="box5">
          <h1>Telivision</h1>
        </Link>
        <Link className="box6">
          <h1>Home Appliances</h1>
        </Link>
      </div>
      <hr />

      <Outlet />
    </div>
  );
};

export default Products;
