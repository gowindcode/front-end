import React from "react";
import  DietWrite  from "../assets/diet-plan-write-women.png";
import DietPlate from "../assets/diet-plate.png";
import FatFitWomens from "../assets/fat-fit-womens.png";
import Smile from "../assets/smile.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom"; 

function Home() {

    const navigate = useNavigate();

    const KnowMoreClick = () => {

        navigate("/diet-benifits");
    }
    return (
        <div className="HomeDiv">
            <div className="dietPlate">Welcome to <img src={DietPlate} alt="Diet-Plate"/> plate</div>
            <div className="homeContent">
                
                <div className="Fat-fit">
                    <div class="wavy">
                        <span style={{"--i":1}}>F</span>
                        <span style={{"--i":2}}>a</span>
                        <span style={{"--i":3}}>t</span>
                        <span style={{"--i":4}}>2</span>
                        <span style={{"--i":5}}>F</span>
                        <span style={{"--i":6}}>i</span>
                        <span style={{"--i":7}}>t</span>
                        <span style={{"--i":8}}>.</span>
                        <span style={{"--i":9}}>.</span>
                        <span style={{"--i":10}}>.</span>
                        <span style={{"--i":11}}>😊</span>
                    </div>
                    <img src={FatFitWomens} alt="Fit-Boy"/>
                </div>
                <div className="details">
                
                <div className="delicious-Box">
                    <div className="Delicious">Delicious</div>  
                    <div className="food"><p>f
                    <span className="smile1"><img src={Smile} alt="Smile" /></span>
                    <span className="Smile2"><img src={Smile} alt="Smile" /></span>
                    ds</p>
                    </div>
                    
                    </div>
                <p className="makes">Makes your diet more easier and smarter...</p>
                
                < div className="will-get">
                <p>You will get the Diet details includes...
                    <ul className="list">
                        <li>Food preferences</li>
                        <li>Choices and timings</li>
                        <li>List of food allergens</li>
                        <li>Food intolerants</li>
                        <li>Physical activities</li>
                        <li>Weight Monitoring</li>
                        <li>Any time Chat AI facility</li>
                        <li>One to One consultants</li>
                        <li>Male and Female consultsnts/Instructors</li>
                    </ul>
                </p>
              </div>
              <div ><Button className="knowMore-BTN" onClick={KnowMoreClick}>Know More</Button></div>
                </div>
            
            <div className="imageContainer">
                <img src={DietWrite} alt="diet-write-women"/>
            </div>
            </div>
        </div>
    )
}

export default Home