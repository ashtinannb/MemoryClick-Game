import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div class="card" onClick={() => props.onClick(props.id)}>
      <div class="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;