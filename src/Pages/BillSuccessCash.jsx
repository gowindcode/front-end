import React from "react";
import CashOnDelivery from "../assets/Bill/cash-on-delivery.png";

function BillSuccessCash() {
  // for this project we just show successfull message
  return (
    <div className="Bill-Success-Cash-Div">
      <div className="Bill-Success-Cash-inner">
        <p>Order Placed successfully.</p>
        <p>
          You are choosing <span>cash payment</span>, please keep cash ready
          while delivery.
        </p>
        <p>
          You will receive dispatch details via email and you can check with
          mobile app.
        </p>
        <p>Thank you!😊 & Stay Helthy 💪</p>
        <img src={CashOnDelivery} alt="cash-on-delivery" />
      </div>
    </div>
  );
}

export default BillSuccessCash;
