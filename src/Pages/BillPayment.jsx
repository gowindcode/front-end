import React, { useEffect, useState } from "react";
import { Button, Select, Table } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

function BillPayment() {
  const taxRate = 0.125; // 12.5% tax rate

  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);
  // State to hold selected payment method
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("CartItems"));
    if (storedCartItems && Array.isArray(storedCartItems)) {
      setCartItems(storedCartItems);
    }
  }, []);

  const billColumns = [
    {
      title: "S.No",
      dataIndex: "sNo",
      key: "sNo",
    },
    {
      title: "Product Details",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  const billData = cartItems.map((item, index) => ({
    key: item._id,
    sNo: index + 1,
    productName: item.productName,
    qty: item.qty, // Use the quantity from the cart item
    price: parseFloat(item.offerPrice.replace(/,/g, "")), // Parse price to float
    total: item.total, // Use the total price from the cart item
  }));

  console.log("Bill data from local storage:", billData);

  // Calculate total price before tax
  const totalBeforeTax = billData
    .map((item) => item.qty * item.price)
    .reduce((acc, curr) => acc + curr, 0);

  // console.log(typeof(totalBeforeTax));

  // Calculate tax amount
  const taxAmount = totalBeforeTax * taxRate;
  console.log(taxAmount);

  // Calculate grand total including tax
  const grandTotal = totalBeforeTax + taxAmount;
  console.log(grandTotal);

  // Handler for payment method change
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  // Handler for button click based on payment method
  const handleButtonClick = () => {
    if (paymentMethod === "Cash") {
      // Handle cash payment option
      navigate("/bill-success-cash");
    } else if (paymentMethod === "Card") {
      // Handle card payment option
      navigate("/bill-success-card");
    } else {
      alert("Please select a payment method.");
    }
  };

  return (
    <div className="Bill-Div">
      <div className="Bill-Div-Inner">
        <span>Bill Details:</span>
        <div className="Bill-Div-Table">
          <Table
            ClassName="Bill-Row"
            columns={billColumns}
            dataSource={billData}
            pagination={false}
          />
        </div>
        <div className="Tax-GrandTotal">
          <p>Total: {totalBeforeTax}</p>
          <p>Tax (12.5%): {parseFloat(taxAmount).toFixed(2)}</p>
          <p>Grand Total: {parseFloat(grandTotal).toFixed(2)}</p>
        </div>
        <div className="Bill-Payment-method-Div">
          <p>Payment Method:</p>
          <div className="select-payment">
            <Select defaultValue="Select" onChange={handlePaymentMethodChange}>
              <Option value="Select">Select</Option>
              <Option value="Cash">Cash</Option>
              <Option value="Card">Card</Option>
            </Select>
          </div>
        </div>
        <div className="Bill-Payment-Btn">
          {paymentMethod === "Cash" ? (
            <Button onClick={handleButtonClick}>Confirm Order</Button>
          ) : paymentMethod === "Card" ? (
            <Button onClick={handleButtonClick}>Pay now</Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BillPayment;
