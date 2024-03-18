import React, { useState } from "react";
import { Button } from "antd";
import FeedRating from "../Pages/FeedRating.jsx"; 
import { useNavigate } from "react-router-dom";

function Feedback() {
  const [serviceRating, setServiceRating] = useState(0);
  const [consultantsRating, setConsultantsRating] = useState(0);
  const [productsRating, setProductsRating] = useState(0);
  const [otherSuggestions, setOtherSuggestions] = useState("");

  const navigate = useNavigate();

  const handleServiceRating = (rating) => {
    setServiceRating(rating);
  };

  const handleConsultantsRating = (rating) => {
    setConsultantsRating(rating);
  };

  const handleProductsRating = (rating) => {
    setProductsRating(rating);
  };

  //navigate to feedback-success page
  const clickToFeedbackSuccess = () => {
    navigate("/feedback-success");
  };

  const handleSubmit = () => {
    // Logic to handle form submission
  };

  return (
    <div className="Feedback-Div">
      <div className="Feedback-Div-wrap">
        <h3>Feedback</h3>
        <p>
          Your feedback is most important to us to improve our service and
          products.
        </p>
        <div className="Feedback-Div-inner">
          <p>
            Service{" "}
            <FeedRating
              value={serviceRating}
              onValueChange={handleServiceRating}
            />
          </p>
          <p>
            Consultants{" "}
            <FeedRating
              value={consultantsRating}
              onValueChange={handleConsultantsRating}
            />
          </p>
          <p>
            Products{" "}
            <FeedRating
              value={productsRating}
              onValueChange={handleProductsRating}
            />
          </p>
          <p>If any other Suggestions:</p>
          <textarea
            name="otherSuggestions"
            id="otherSuggestions"
            cols="40"
            rows="6"
            value={otherSuggestions}
            onChange={(e) => setOtherSuggestions(e.target.value)}
          ></textarea>
          <div className="feedBack-BTN-Div">
            <Button
              onClick={() => {
                handleSubmit();
                clickToFeedbackSuccess();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
