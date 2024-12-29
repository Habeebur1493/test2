import React from "react";
import "./page1.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const ClothingDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const loacation = useLocation();

  console.log(loacation);

  return (
    <div className="ClothingDetails">
      <div className="container1">
        <h1>Clothing Details</h1>
        <h1 className="text-3xl font-extrabold mb-3">
          {params.category.toLocaleUpperCase()}
        </h1>
        <button
          className="px-5 py-2 bg-zinc-700 rounded text-white"
          onClick={() => navigate(-1)}
        >
          Back Button
        </button>

        <div className="column1"></div>
        <div className="column1"></div>
      </div>
    </div>
  );
};

export default ClothingDetails;
