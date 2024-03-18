import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function FeedBackSuccess() {
  const navigate = useNavigate();

  //navigate to home page
  const FeedToHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className="FeedbSuccess-Div">
      <div className="FeedbSuccess-Div-inner">
        <div>
          <h3>Thank you for your valuable feedback. 😊</h3>
          <h2>Health is wealth!</h2>
        </div>

        <div className="FeedbSuccess-Div-BTN">
          <Button onClick={FeedToHomeClick}>Back To Home</Button>
        </div>
      </div>
    </div>
  );
}

export default FeedBackSuccess;
