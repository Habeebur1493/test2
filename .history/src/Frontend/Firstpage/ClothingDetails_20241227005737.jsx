import React from 'react'
import './page1.css'
import { useNavigate, useParams, useLocation } from "react-router-dom";

const ClothingDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const loacation = useLocation();

  console.log(loacation);

  return (
    <div>
      <div className="container1">
        <h1>Clothing Details</h1>        

        <div className="column1"></div>
        <div className="column1"></div>

    </div>
    </div>
  )
}

export default ClothingDetails