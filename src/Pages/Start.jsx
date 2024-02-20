import React from "react";
import {Button} from "antd";
import { Link } from "react-router-dom";
import localImageH1 from '../assets/woman-mark-nbg.png';

function Start() {

  const handleClick = () => {
    console.log("GET DIET button clicked");
  }
    return (
            <div className="container">
               <div className="rectangle">
               <div className="wana-get">
               <h1 className="getDiet">You wana get DIET?</h1>
               <h3 className="youR-right">you are in right place...</h3>
            
            <div className="dietPera">
              <h4 className="welcome">Welcome to our world class <span>DIET</span> plan platform.</h4>
              <p className="didYou">Did you think... Diet is a hard one?, No...! </p>
              <p className="simple">Diet is simple and powerful way to gain/loss weight...</p>
              <p className="belive">yes! Belive your self... our exclusive plans gets you <span>100%</span> fit.</p>
            </div>
            <Link to="/register">
            <div className="GET-BTNDIV"><Button className="Diet-BTN" onClick={handleClick}>GET DIET</Button></div>
            </Link>
            </div>
            <div className="home-girl">
           <img src={localImageH1} alt="woman-png"/>
           </div>
         </div>
    </div>
    )
}

export default Start