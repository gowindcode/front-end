import React from "react";
import CourierDelivery from "../assets/Bill/courier-delivery.png";

function BillSuccessCard() {
  //for this project we just show successfull messgae
  return (
    <div className="BillSuccessCard-Div">
      <div className="BillSuccess-Card-inner">
        <p>
          <span>Card</span> payment successfull.
        </p>
        <p>You will receive the package soon.</p>
        <p>Thank you!😊 & Stay Helthy 💪</p>
        <img src={CourierDelivery} alt="courier-delivery" />
      </div>
    </div>
  );
}

export default BillSuccessCard;
