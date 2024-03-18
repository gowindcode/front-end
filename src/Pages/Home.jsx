import React from "react";
import DietWrite from "../assets/diet-plan-write-women.png";
import DietPlate from "../assets/diet-plate.png";
import FatFitWomens from "../assets/fat-fit-womens.png";
import CoupleTwo from "../assets/couple2.png";
import Couples from "../assets/couple-diet.png";
import Smile from "../assets/smile.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  //navigate to do=iet-benifits page
  const KnowMoreClick = () => {
    navigate("/diet-benifits");
  };
  return (
    <div className="HomeDiv">
      <div className="HomeDiv-Inner">
        <div className="dietPlate">
          Welcome to <img src={DietPlate} alt="Diet-Plate" /> plate
        </div>
        <div className="homeContent">
          <div className="Fat-fit">
            <img src={Couples} alt="Fat-Fit-Womens" />
          </div>
          <div className="details">
            <div className="delicious-Box">
              <div className="Delicious">
                <p>Delicious</p>
              </div>
              <div className="food">
                <p>
                  f
                  <span className="smile1">
                    <img src={Smile} alt="Smile" />
                  </span>
                  <span className="Smile2">
                    <img src={Smile} alt="Smile" />
                  </span>
                  ds
                </p>
              </div>
            </div>
            <p className="makes">Makes your diet more easier and smarter...</p>

            <div className="will-get">
              <p>
                You will get the Diet details includes...
                <ul className="list">
                  <li>Food preferences</li>
                  <li>Choices and timings</li>
                  <li>List of food allergens</li>
                  <li>Food intolerants</li>
                  <li>Physical activities</li>
                  <li>Weight Monitoring</li>
                  <li>Any time Chat AI facility</li>
                  <li>One to One consultants</li>
                  <li>Male and Female consultants/Instructors</li>
                </ul>
              </p>
            </div>
            <div>
              <Button className="knowMore-BTN" onClick={KnowMoreClick}>
                Know More
              </Button>
            </div>
          </div>

          <div className="imageContainer">
            <img src={DietWrite} alt="diet-write-women" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
