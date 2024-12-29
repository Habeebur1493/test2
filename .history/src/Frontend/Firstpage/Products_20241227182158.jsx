import "./page1.css";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div className="container">
        <div className="box1">
          <Link to="/products/clothing">Clothing</Link>
        </div>
        <div className="box2">
          <Link to="/products/mobile-phones">Mobile Phones</Link>
        </div>
        <div className="box3">
          <Link to="/products/accessories">Accessories</Link>
        </div>
        <div className="box4">
          <Link to="/products/watches">Watches</Link>
        </div>
        <div className="box5">
          <Link to="/products/television">Television</Link>
        </div>
        <div className="box6">
          <Link to="/products/home-appliances">Home Appliances</Link>
        </div>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Products;
