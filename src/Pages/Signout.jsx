import React from "react";
import womenExcerise from "../assets/Signout/women-excerise.png";

function Signout() {

  return (
    <div>
      <div className="Signout-Div">
        <h5>Signout successfully.👍</h5>
        <h4>Stay Healthy!😊</h4>
        <p>Back to <a href="/login">login</a></p>
        <img src={womenExcerise} alt="women-excerise" />
      </div>
    </div>
  );
}

export default Signout;
