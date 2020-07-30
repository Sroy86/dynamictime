import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2020, 7, 7, 20);
const currentTime = date.getHours();
let greeting;
const customStyle = {
  color: ""
};
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "green";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "yellow";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamaon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
