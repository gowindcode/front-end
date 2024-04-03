import React from "react";
import womenExcerise from "../assets/Signout/women-excerise.png";
import { useNavigate } from "react-router-dom";

function Signout() {
  const navigate = useNavigate();
  const ClickSignOutToLogin =() => {
    navigate("/login");
  }
  return (
    <div>
      <div className="Signout-Div">
        <h5>Signout successfully.👍</h5>
        <h4>Stay Healthy!😊</h4>
        <p className="SignOutTo-Login">Back to <a href={ClickSignOutToLogin} onClick={ClickSignOutToLogin}>login</a></p>
        <img src={womenExcerise} alt="women-excerise" />
      </div>
    </div>
  );
}

export default Signout;
