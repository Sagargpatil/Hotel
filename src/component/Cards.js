import React from "react";
import "./Card.css";


const Card = ({ title, description, imageUrl }) => {
 
  return (
   
    <div className="cards "> 
      <div className="s-card">
      <div className="card-body">
        <img className="card-img-top s-img"  src={imageUrl} alt={title} />
        <div className="card-content">
          {title}
        </div>
        </div>
      </div>
    </div> 
   
  );
};

export default Card;
