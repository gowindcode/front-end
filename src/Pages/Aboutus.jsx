import React from "react";
import CoupleFit from "../assets/couple1-fit.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import {
  AndroidOutlined,
  AppleOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  XOutlined,
  SkypeOutlined,
  SpotifyOutlined,
} from "@ant-design/icons/lib/icons";

function Aboutus() {
  const navigate = useNavigate();

  const backToHomeClick = () => {
    console.log("Back to Home button clicked from About us page.");
    navigate("/home"); //navigate to home page
  };

  //open google playstore
  const playStoreClick = () => {
    window.open("https://play.google.com/store/games?hl=en&gl=US", "_blank");
  };
  //open apple store
  const appleStoreClick = () => {
    window.open(
      "https://apps.apple.com/us/app/apple-store/id375380948",
      "_blank"
    );
  };

  //open twitter login, if mobile open app
  const twitterClick = () => {
    window.open("https://twitter.com/settings/account?lang=en", "_blank");
  };

  //open whatsapp mobile / desktop
  const whatsAppClick = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };

  //open youtube page
  const youTubeClick = () => {
    window.open("https://www.youtube.com/", "_blank");
  };

  //open skype page or skype app (if mobile)
  const skypeClick = () => {
    window.open(
      "https://support.skype.com/en/skype/all/start/signing-in-out/",
      "_blank"
    );
  };

  //open facebook page or app
  const faceBookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  //open instagram page or app
  const instagramClick = () => {
    window.open(
      "https://www.instagram.com/accounts/onetap/?next=%2F",
      "_blank"
    );
  };

  //open X twitter page, here in our code we used twitter eralier, but for some customers not aware of X
  const xtwitClick = () => {
    window.open("https://twitter.com/settings/account?lang=en", "_blank");
  };

  //open spotify page for music while excerise
  const spotifyClick = () => {
    window.open("https://open.spotify.com/", "_blank");
  };

  return (
    <div className="Aboutus-div">
      <div className="Aboutus-inner">
        <div className="Aboutus-details">
          <p className="Aboutus-AboutUs">About Us</p>
          <p className="weAre">
            We are a Leading <b>Diet Advisory</b> and <b>Diet Consultant</b>{" "}
            service provider for men and women since 2018... Our exclusive diet
            plans gets you 100% fit and healthy. More than 60K happy customers
            fully satisfied on our service and products.
          </p>

          <span className="JoinUs">
            Join with us today and make your Body as like your Dream...
          </span>

          <p className="Head-Office">
            <span>
              <b>Head Office</b>
            </span>
            <span>909, VOC Park Opposite,</span>
            <span>T-Nagar, Chennai.</span>
            <span>+91 9900990099</span>
          </p>

          <span className="email">customercare@dietplate.com</span>

          <div className="Aboutus-Branches">
            <p className="Branch">
              <b>Branch Office</b>
            </p>
            <div className="city-Branches">
              <p>Madurai</p>
              <p>Trichy</p>
              <p>Kanniyakumari</p>
              <p>Vellore</p>
              <p>Coimbatore</p>
              <p>Tiruppur</p>
              <p>Erode</p>
              <p>Sivakasi</p>
              <p>Salem</p>
              <p>Kanchipuram</p>
              <p>Theni</p>
            </div>
          </div>
          <div className="Aboutus-BTN-Div">
            <Button onClick={backToHomeClick}>Home</Button>
          </div>
          <div className="socialMedia">
            <span className="Android" onClick={playStoreClick}>
              <AndroidOutlined />
            </span>
            <span className="Apple" onClick={appleStoreClick}>
              <AppleOutlined />
            </span>
            <span className="Twitter" onClick={twitterClick}>
              <TwitterOutlined />
            </span>
            <span className="WhatsApp" onClick={whatsAppClick}>
              <WhatsAppOutlined />
            </span>
            <span className="Youtube" onClick={youTubeClick}>
              <YoutubeOutlined />
            </span>
            <span className="Skype" onClick={skypeClick}>
              <SkypeOutlined />
            </span>
            <span className="Facebook" onClick={faceBookClick}>
              <FacebookOutlined />
            </span>
            <span className="Instagram" onClick={instagramClick}>
              <InstagramOutlined />
            </span>
            <span className="X" onClick={xtwitClick}>
              <XOutlined />
            </span>
            <span className="Spotify" onClick={spotifyClick}>
              <SpotifyOutlined />
            </span>
          </div>
        </div>
        <div className="Aboutus-Img">
          <img src={CoupleFit} alt="Couple-fit" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
