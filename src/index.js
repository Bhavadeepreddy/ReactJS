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


//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();

let greet;

const coustm = {
  color: ""
};

if (time < 12) {
  greet = "Good morning";
  coustm.color = "red";
} else if ((time > 12) & (time < 18)) {
  greet = "Good Afternoon";
  coustm.color = "blue";
} else {
  greet = "Good evening";
  coustm.color = "green";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={coustm}>
      {greet}
    </h1>
  </div>,
  document.getElementById("root")
);


//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Bhavadeep";
const date = new Date();
const year = date.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>copyright {year}</p>
  </div>,
  document.getElementById("root")
);


//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My FAB Food</h1>
    <div>
      <img className="images" src="https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/opengraph_color.png"/>
      <img className="images" src="https://play-lh.googleusercontent.com/G5oF0mhpOcQzFTrU6TDUL0JoAjzRt38weiZKua7L61WVT1z3dPcE9gUu-W2EwtM9cZU=w240-h480-rw" />
      <img className="images" src="https://images.livemint.com/img/2022/09/15/600x338/d4a41ba2-6e4e-11ec-b1d1-ef9e01dbbdfc_1641410500103_1663260961226_1663260961226.jpg" />
    </div>
  </div>,
  document.getElementById("root")
);
