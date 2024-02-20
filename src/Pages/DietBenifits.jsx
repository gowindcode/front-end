import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function DietBenifits() {

    const navigate  =useNavigate();

    const FitChartClick = () => {

        navigate("/fit-chart");
        console.log("Fit chart Button clicked.");
    }
    return (
        <div className="Diet-Benifits">
            <div className="benifits-Container">
                <div className="benifitDetail">
                    <div className="BenifitLists">
              <p>A healthy diet can have many benefits including:
                <ul className="list">Reduced risk of disease:
                    <li>A healthy diet can help reduce the risk of heart disease, stroke, obesity, type 2 diabetes, and some cancers.</li>
                </ul> Improved immunity:
                <ul className="list">
                    <li>A healthy diet can help boost immunity.</li>
                </ul>
                <ul className="list">Better weight management:
                    <li>A healthy diet can help you maintain a healthy weight.</li>
                </ul>
                <ul className="list">Improved digestion:
                    <li>A healthy diet can help improve digestion.</li>
                </ul>
                <ul className="list">Stronger bones and teeth:
                    <li>A diet rich in calcium can help keep your teeth and bones strong and can help to slow bone loss (osteoporosis) associated with getting older.</li>
                </ul>
                <ul className="list">Other benefits:
                    <li>A healthy diet can help to Boost mood and give you more energy</li>
                    <li>Help recover quickly from diseases and trauma Keep skin, teeth, and eyes healthy and support muscles.</li>
                    <li>Support healthy pregnancies and breastfeeding.</li>
                    <li>Help the digestive system function</li>
                </ul>
                <ul className="list">A balanced diet can include:
                    <li>Eating at least 5 portions of a variety of fruit and vegetables every day.</li>
                    <li>Basing meals on higher fiber starchy foods like potatoes, bread, rice or pasta.</li>
                    <li>Having some dairy or dairy alternatives (such as soya drinks).</li>
                    <li>Eating some beans, pulses, fish, eggs, meat and other protein.</li>
                    <li>A healthy diet also includes consuming less salt, sugars and saturated and industrially-produced trans-fats.</li>
                </ul>
              </p>
              <div className="AHealthy">
              A healthy diet rich in fruits, vegetables, 
              whole grains and low-fat dairy can help to reduce your risk of heart disease by maintaining blood pressure and cholesterol levels. 
              High blood pressure and cholesterol can be a symptom of too much salt and saturated fats in your diet.
              </div>
                    </div>
                <div className="CheckDiv-BTN">
                    <Button className="chartBtn" onclick={FitChartClick}>FIT CHART</Button>
                </div>
                 <input></input>
                </div>
                <div className="Benifit-RightSIDE">
                    <img src="https://c4.wallpaperflare.com/wallpaper/723/396/1003/food-diet-healthy-fresh-wallpaper-preview.jpg" alt="sample"/>
                    <p>A healthy diet rich in fruits, vegetables, 
whole grains and low-fat dairy can help to reduce your risk of heart disease by maintaining blood pressure and cholesterol levels. 
High blood pressure and cholesterol can be a symptom of too much salt and saturated fats in your diet.</p>
                    <img src="https://c4.wallpaperflare.com/wallpaper/723/396/1003/food-diet-healthy-fresh-wallpaper-preview.jpg" alt="sample2"/>
                </div>
            </div>
        </div>
    )
}

export default DietBenifits