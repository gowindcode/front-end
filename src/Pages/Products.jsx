import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../global";
import { Button, Card, Spin } from "antd";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/ItemSlice";

const { Meta } = Card;

function Products({ item }) {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);

  //using axios get the data from back end
  useEffect(() => {
    axios
      .get(`${API}/all-products`)
      .then((res) => {
        console.log("data response details:", res.data);
        setItemData(res.data.All_Products_Details);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log("itemData:", itemData);

  //dispatch
  const dispatch = useDispatch();

  //handle --- Add to cart button
  const handleAddCart = (item) => {
    console.log("Add to cart button clicked");
    dispatch(addToCart(item)); //addToCart from Reduc => ItemSlice.js
  };

  return (
    <div className="productDiv">
      {/* Render Card components if data has been fetched */}
      {!loading &&
        Array.isArray(itemData) &&
        itemData.map((item) => (
          <div key={item._id} className="card">
            <Card
              className="CardIn"
              hoverable
              style={{ width: 250, marginBottom: 0 }}
              cover={
                <img
                  src={item.image}
                  alt={item.productName}
                  style={{
                    height: "170px",
                    width: "230px",
                  }}
                />
              }
            >
              <Meta title={`Name: ${item.productName}`} />
              <p className="ProDescription">
                <span>Description: </span>
                {item.description}
              </p>
              <div className="StockRat">
                <p className="stock">In Stock: {item.stockQty}</p>
                {/* <p className="rating">Rating: {item.rating}</p> */}
                <p className="rating">
                  Rating:{" "}
                  <span className="ActualValue">
                    <StarRating value={item.rating} />
                  </span>
                </p>
              </div>

              <h6>Price Rs. {item.price}/-</h6>
              <p className="OfferPrice">
                Offer Price. &#x20b9;.
                <span>
                  {item.offerPrice}
                  <sup>00</sup>
                </span>
              </p>
              <div className="Add2Cart">
                <Button type="primary" onClick={() => handleAddCart(item)}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        ))}
      {/* Conditionally render loading spinner */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <Spin size="large" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
