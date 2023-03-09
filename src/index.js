import React from "react";
import ReactDOM from "react-dom";

const fname = "Bhavadeep";
const lname = " Reddy";
const name = fname + lname;
const x = 3;

ReactDOM.render(
  <div>
    <h1>Hello {name} !</h1>
    <p>your lucky number is {x} </p>
  </div>,
  document.getElementById("root")
);
