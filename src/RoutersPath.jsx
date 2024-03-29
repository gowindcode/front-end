import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import DietBenifits from "./Pages/DietBenifits";
import DietFoods from "./Pages/DietFoods";
import DietTips from "./Pages/DietTips";
import Signup from "./Pages/Signup";
import Aboutus from "./Pages/Aboutus";
import GetConsultant from "./Pages/GetConsultant";
import Feedback from "./Pages/Feedback";
import FeedBackSuccess from "./Pages/FeedBackSuccess";
import Login from "./Pages/Login";
import Signout from "./Pages/Signout";
import Products from "./Pages/Products";
import FitChart from "./Pages/FitChart";
import BillSuccessCash from "./Pages/BillSuccessCash";
import BillSuccessCard from "./Pages/BillSuccessCard";
import BillPayment from "./Pages/BillPayment";
import StarRating from "./Pages/StarRating";
import Cart from "./Pages/Cart";

function RoutersPath() {
  return (
    <div className="routers-bar">
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diet-benifits" element={<DietBenifits />} />
        <Route path="/diet-foods" element={<DietFoods />} />
        <Route path="/diet-tips" element={<DietTips />} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/get-consultant" element={<GetConsultant/>} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback-success" element={<FeedBackSuccess />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bill-success-cash" element={<BillSuccessCash />} />
        <Route path="/bill-success-card" element={<BillSuccessCard />} />
        <Route path="/bill-payment" element={<BillPayment />} />
        <Route path="/fit-chart" element={<FitChart />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/rating" element={<StarRating />} />
      </Routes>
    </div>
  );
}

export default RoutersPath;

