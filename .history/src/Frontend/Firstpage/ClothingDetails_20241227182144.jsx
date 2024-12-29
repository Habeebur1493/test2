import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ClothingDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <div className="container1">
        <h1>Clothing Details</h1>
        <h1 className="text-3xl font-extrabold mb-3">
          {params.category ? params.category.toLocaleUpperCase() : "CLOTHING"}
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
