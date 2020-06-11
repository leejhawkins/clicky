import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="click-item col" role="img">
      <div onClick={() => props.chooseCard(props.id)} className="img-container remove">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
