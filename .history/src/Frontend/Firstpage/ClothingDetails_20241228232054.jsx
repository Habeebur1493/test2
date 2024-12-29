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
        <input type="text" />
        </div>

        <div className="column2">
          <h1>Clothing Details</h1>
        </div>

      </div>
    </div>
  );
};

export default ClothingDetails;
