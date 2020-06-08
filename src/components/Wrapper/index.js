import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div class="wrapper">{props.children}</div>;
}

export default Wrapper;