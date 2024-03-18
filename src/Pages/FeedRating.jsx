import React, { useState } from "react";

const FeedRating = ({ value, onValueChange }) => {
  const [rating, setRating] = useState(value);

  const handleStarClick = (newValue) => {
    setRating(newValue === rating ? newValue - 1 : newValue);
    onValueChange(newValue === rating ? newValue - 1 : newValue);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <i
          key={index}
          className={index <= rating ? "fa fa-star" : "fa fa-star-o"}
          onClick={() => handleStarClick(index)}
        ></i>
      ))}
    </div>
  );
};

export default FeedRating;
