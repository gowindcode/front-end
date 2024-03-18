import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItem,
  increaseQty,
  qtyPriceUpdates,
} from "../Redux/ItemSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.itemShop.cartItems || []);

  const [defaultOfferPrices, setDefaultOfferPrices] = useState({});
  const [prices, setPrices] = useState({});
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const offerPrices = {};
    const defaultQuantities = {};
    cartItems.forEach((item) => {
      offerPrices[item._id] = parseFloat(item.offerPrice.replace(/,/g, "")); // Remove commas
      defaultQuantities[item._id] = 1;
    });
    setDefaultOfferPrices(offerPrices);
    setQuantities(defaultQuantities);
  }, [cartItems]);

  useEffect(() => {
    const updatedPrices = {};
    Object.keys(quantities).forEach((itemId) => {
      updatedPrices[itemId] = defaultOfferPrices[itemId] * quantities[itemId];
    });
    setPrices(updatedPrices);
  }, [quantities]);

  const priceUpdate = (itemId, price) => {
    if (!isNaN(price)) {
      setPrices({ ...prices, [itemId]: price });
      dispatch(qtyPriceUpdates({ item: itemId, offerPrice: price }));
    } else {
      console.log("Invalid price:", price);
    }
  };

  const reduceQty = (itemId) => {
    const updatedQty = Math.max(quantities[itemId] - 1, 1); // This helps to ensure quantity doesn't go below 1
    setQuantities({ ...quantities, [itemId]: updatedQty });
    localStorage.setItem(itemId, updatedQty); // Save the updated quantity to local storage
    // Optionally, we can call the priceUpdate function here to update the total price
  };

  const increaseQty = (itemId) => {
    const updatedQty = quantities[itemId] + 1; // No need to enforce any constraints here
    setQuantities({ ...quantities, [itemId]: updatedQty });
    localStorage.setItem(itemId, updatedQty); // Save the updated quantity to local storage
    // Optionally, we can call the priceUpdate function here to update the total price
  };

  const handleGoToPayment = () => {
    // Create a copy of cartItems with updated quantities and prices
    const updatedCartItems = cartItems.map((item) => ({
      ...item,
      qty: quantities[item._id], // Update quantity
      total: prices[item._id] || item.offerPrice, // Update total price
    }));

    // Store the updated cart items in local storage
    localStorage.setItem("CartItems", JSON.stringify(updatedCartItems));

    dispatch(clearCart());
    navigate("/bill-payment");
  };

  const handleRemoveClick = (itemId) => {
    dispatch(removeItem(itemId));
  };

  if (!Array.isArray(cartItems)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Cart_Div">
      <div className="Cart-Div-Cards">
        {cartItems.length === 0 ? (
          <div className="NoItemsMsg">
            <p>
              There are <span>No items</span> in the cart. Please add your
              desired products. Happy Shopping 😊
            </p>
            <Button
              onClick={() => navigate("/all-products")}
              className="Back2ProductsBtn"
            >
              Back to Products
            </Button>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={item._id} className="CARD" hoverable>
                <div className="cart-inner-Div">
                  <div className="cart-inner-Img">
                    <img alt={item.productName} src={item.image} />
                  </div>
                  <div className="cart-inner-desc">
                    <p>{`${item.productName}`}</p>
                  </div>
                  <div className="cart-inner-Select-Btns">
                    <Button onClick={() => reduceQty(item._id)}>-</Button>
                    <span>
                      {" "}
                      Qty: <b>{quantities[item._id]}</b>{" "}
                    </span>
                    <Button onClick={() => increaseQty(item._id)}>+</Button>
                  </div>
                  <div className="cart-inner-prices">
                    <p>{`Price: ${item.offerPrice}`}</p>
                    <p>{`Total Price: ${prices[item._id] || 0}`}</p>
                  </div>
                </div>
                <div className="Cart-Remove-Btn">
                  <Button onClick={() => handleRemoveClick(item._id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="Cart-Go-To-Payment-Btn">
              <Button onClick={handleGoToPayment}>Go to Payment</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
