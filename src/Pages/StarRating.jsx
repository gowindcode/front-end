import React from "react";

const Star = ({ value }) => {
  const generateStars = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating);
    // console.log("filled stars:", filledStars);
    const hasHalfStar = rating - filledStars >= 0.5;
    // console.log("has half star:", hasHalfStar);

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<i key={i} className="fa fa-star"></i>);
      } else if (i === filledStars && hasHalfStar) {
        stars.push(<i key={i} className="fa fa-star-half-full"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o"></i>);
      }
    }

    return stars;
  };

  return <span>{generateStars(value)}</span>;
};

export default Star;
