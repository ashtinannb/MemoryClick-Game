import React from "react";
import "./style.css";

function Header(props) {
  return <div class="title">
    <div class="row">
      <h1>Memory-Click </h1>
      <h2>The Lord of the Rings</h2>
      <p>The ultimate memory game! Click all 12 characters without clicking
      the same character twice.
      </p>
      <p>After each click the pictures will rearrange, so pay attention!</p>
    </div>
    <div class="Score">
      <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
    </div>
    <div class="resetButton">
      <button onClick={() => props.resetGame()} type="button" class="reset">Reset Game</button>
    </div>
  </div>
}

export default Header;