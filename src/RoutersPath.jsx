// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Start from "./Pages/Start";
// import Home from "./Pages/Home";
// import DietBenifits from "./Pages/DietBenifits";
// import DietFoods from "./Pages/DietFoods";
// import DietTips from "./Pages/DietTips";
// import Signup from "./Pages/Signup";
// import Aboutus from "./Pages/Aboutus";
// import GetConsultant from "./Pages/GetConsultant";
// import Feedback from "./Pages/Feedback";
// import FeedBackSuccess from "./Pages/FeedBackSuccess";
// import Login from "./Pages/Login";
// import Signout from "./Pages/Signout";
// import Products from "./Pages/Products";
// import FitChart from "./Pages/FitChart";
// import BillSuccessCash from "./Pages/BillSuccessCash";
// import BillSuccessCard from "./Pages/BillSuccessCard";
// import BillPayment from "./Pages/BillPayment";
// import StarRating from "./Pages/StarRating";
// import Cart from "./Pages/Cart";

// function RoutersPath() {
//   return (
//     <div className="routers-bar">
//       <Routes>
//         <Route exact path="/" element={<Start />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/diet-benifits" element={<DietBenifits />} />
//         <Route path="/diet-foods" element={<DietFoods />} />
//         <Route path="/diet-tips" element={<DietTips />} />
//         <Route path="/all-products" element={<Products />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/get-consultant" element={<GetConsultant/>} />
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/feedback-success" element={<FeedBackSuccess />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/bill-success-cash" element={<BillSuccessCash />} />
//         <Route path="/bill-success-card" element={<BillSuccessCard />} />
//         <Route path="/bill-payment" element={<BillPayment />} />
//         <Route path="/fit-chart" element={<FitChart />} />
//         <Route path="/signout" element={<Signout />} />
//         <Route path="/rating" element={<StarRating />} />
//       </Routes>
//     </div>
//   );
// }

// export default RoutersPath;

// ----------------------------------------------------------------------------
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Start from "./Pages/Start";
// import Home from "./Pages/Home";
// import DietBenifits from "./Pages/DietBenifits";
// import DietFoods from "./Pages/DietFoods";
// import DietTips from "./Pages/DietTips";
// import Signup from "./Pages/Signup";
// import Aboutus from "./Pages/Aboutus";
// import GetConsultant from "./Pages/GetConsultant";
// import Feedback from "./Pages/Feedback";
// import FeedBackSuccess from "./Pages/FeedBackSuccess";
// import Login from "./Pages/Login";
// import Signout from "./Pages/Signout";
// import Products from "./Pages/Products";
// import FitChart from "./Pages/FitChart";
// import BillSuccessCash from "./Pages/BillSuccessCash";
// import BillSuccessCard from "./Pages/BillSuccessCard";
// import BillPayment from "./Pages/BillPayment";
// import StarRating from "./Pages/StarRating";
// import Cart from "./Pages/Cart";

// function RoutersPath() {
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);

//   return (
//     <div className="routers-bar">
//       <Routes>
//         <Route path="/" element={<Start />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* Conditionally render private routes */}
//         {!isLoggedIn && (
//           <>
//             <Route path="/home" element={<Home />} />
//             <Route path="/diet-benifits" element={<DietBenifits />} />
//             <Route path="/diet-foods" element={<DietFoods />} />
//             <Route path="/diet-tips" element={<DietTips />} />
//             <Route path="/all-products" element={<Products />} />
//             <Route path="/get-consultant" element={<GetConsultant />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/bill-success-cash" element={<BillSuccessCash />} />
//             <Route path="/bill-success-card" element={<BillSuccessCard />} />
//             <Route path="/bill-payment" element={<BillPayment />} />
//             <Route path="/fit-chart" element={<FitChart />} />
//             <Route path="/signout" element={<Signout />} />
//             <Route path="/rating" element={<StarRating />} />
//             <Route path="/aboutus" element={<Aboutus />} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/feedback-success" element={<FeedBackSuccess />} />
//           </>
//         )}

//         {/* Redirect to "/" if not logged in */}
//         {isLoggedIn}
//       </Routes>
//     </div>
//   );
// }

// export default RoutersPath;

// -------------------------------------------------------------------------------

import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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
import KnowYours from "./Pages/KnowYours";

function RoutersPath() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const location = useLocation();

  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="routers-bar">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isLoggedIn || !isAuthPage ? <Home /> : <Navigate to="/" />} />
        <Route path="/diet-benifits" element={isLoggedIn || !isAuthPage ? <DietBenifits /> : <Navigate to="/" />} />
        <Route path="/diet-foods" element={isLoggedIn || !isAuthPage ? <DietFoods /> : <Navigate to="/" />} />
        <Route path="/diet-tips" element={isLoggedIn || !isAuthPage ? <DietTips /> : <Navigate to="/" />} />
        <Route path="/all-products" element={isLoggedIn || !isAuthPage ? <Products /> : <Navigate to="/" />} />
        <Route path="/get-consultant" element={isLoggedIn || !isAuthPage ? <GetConsultant /> : <Navigate to="/" />} />
        <Route path="/cart" element={isLoggedIn || !isAuthPage ? <Cart /> : <Navigate to="/" />} />
        <Route path="/bill-success-cash" element={isLoggedIn || !isAuthPage ? <BillSuccessCash /> : <Navigate to="/" />} />
        <Route path="/know-my-fit" element={isLoggedIn || !isAuthPage ? <KnowYours /> : <Navigate to="/" />} />
        <Route path="/bill-success-card" element={isLoggedIn || !isAuthPage ? <BillSuccessCard /> : <Navigate to="/" />} />
        <Route path="/bill-payment" element={isLoggedIn || !isAuthPage ? <BillPayment /> : <Navigate to="/" />} />
        <Route path="/fit-chart" element={isLoggedIn || !isAuthPage ? <FitChart /> : <Navigate to="/" />} />
        <Route path="/signout" element={isLoggedIn || !isAuthPage ? <Signout /> : <Navigate to="/" />} />
        <Route path="/rating" element={isLoggedIn || !isAuthPage ? <StarRating /> : <Navigate to="/" />} />
        <Route path="/aboutus" element={isLoggedIn || !isAuthPage ? <Aboutus /> : <Navigate to="/" />} />
        <Route path="/feedback" element={isLoggedIn || !isAuthPage ? <Feedback /> : <Navigate to="/" />} />
        <Route path="/feedback-success" element={isLoggedIn || !isAuthPage ? <FeedBackSuccess /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutersPath;
