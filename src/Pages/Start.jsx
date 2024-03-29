import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import localImageH1 from "../assets/woman-mark-nbg.png";
import womenThumsUp from "../assets/woman-thumbs-up.png";
import slimWomen from "../assets/Tips/slim-women.png";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState(womenThumsUp);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setImageURL(womenThumsUp); //for smaller deveices
      } else if (window.innerWidth <= 1199) {
        setImageURL(slimWomen); //for medium deveices
      } else {
        setImageURL(localImageH1); //for larger devices
      }
    };
    //we used addEventListner for window resize
    window.addEventListener("resize", handleResize);
    //call the this component
    handleResize();
    //remove event listner on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); //call only once

  const handleClick = () => {
    console.log("GET DIET button clicked");
    navigate("/signup");
  };
  return (
    <div className="StartContainer">
      <div className="rectangle">
        <div className="wana-get">
          <h1 className="getDiet">You wana get DIET?</h1>
          <h3 className="youR-right">you are in right place...</h3>

          <div className="dietPera">
            <h4 className="welcome">
              Welcome to our world class <span>DIET</span> plan platform.
            </h4>
            <p className="didYou">
              Do you think... Diet is a hard one?, No...!{" "}
            </p>
            <p className="simple">
              Diet is simple and powerful way to gain/loss weight...
            </p>
            <p className="belive">
              yes! Belive your self... our exclusive plans gets you{" "}
              <span>100%</span> fit.
            </p>
          </div>
          
            <div className="GET-BTNDIV">
            <Link to="/signup">
              <Button className="Diet-BTN" onClick={handleClick}>
                GET DIET
              </Button>
              </Link>
            </div>
          
        </div>
        <div className="home-girl">
          <img src={imageURL} alt="woman-png" />
        </div>
      </div>
    </div>
  );
}

export default Start;
