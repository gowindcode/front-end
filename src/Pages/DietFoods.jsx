import React from "react";
import ProcessVsNatural from "../assets/Foods/process-vs-natural.png";
import DiabetesCapitalofTheWorld from "../assets/Foods/Diabetes-Capital-of-The-World.jpg";
import TheSouthIndianDiet from "../assets/Foods/The-South-Indian-diet.png";
import NVLeaf from "../assets/Foods/NV-Leaf.png";
import vegFoodPlate from "../assets/Foods/veg-food-plate.png";
import LunchIndianFoodPlate from "../assets/Foods/Lunch-indian-food-plate.png";
import FreshOrange from "../assets/Foods/fresh-orange.png";
import Banana from "../assets/Foods/banana.png";
import ApplesBasket from "../assets/Foods/apples-basket.png";
import Guvava from "../assets/Foods/guvava.png";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function DietFoods() {
  const navigate = useNavigate();
  //navigate to signup page
  const clickFoodtoHome = () => {
    navigate("/signup");
  };

  return (
    <div className="Diet-foods-Div">
      <div className="Diet-foods-inner">
        <h3>
          <u>Indian Diet Plan for Healthy Life</u>
        </h3>

        <div className="Diabetes-Capital">
          <div className="Diabetes-Capital-Img">
            <img
              src={DiabetesCapitalofTheWorld}
              alt="Diabetes-Capital-of-The-World"
            />
          </div>
          <div className="Diabetes-Capital-content">
            <ul>
              {" "}
              <b>Three unhealthy facts about India that makes it clear</b>
              <li>
                India ranks in the top 5 countries globally for obese adults,
                with 30 million obese adults.
              </li>
              <li>
                That is about the same as the population of Mumbai, Delhi and
                Bengaluru combined. India has the second highest number of obese
                children. 14.4 million obese children.
              </li>
              <li>
                That’s about the same as the population of Chennai, Pune and
                Hyderabad combined. The equivalent of the population of Mumbai +
                Delhi + Bengaluru + Pune + Chennai + Hyderabad is now obese.
              </li>
            </ul>
          </div>
        </div>

        <div className="Diet-foods-consequences">
          <h3>
            <u>And this has consequences:</u>
          </h3>
          <p>
            <b>India</b> is now widely recognized as the
            <b>‘Diabetes capital of the world’</b>. Really worried 😌 to hear
            about Diabetes capital. Diabetes is reaching potentially epidemic
            proportions in <b>India</b>. It is predicted that by 2030 Diabetes
            may afflict up to 80 million individuals in <b>India</b>. That’s
            about double the numbers expected in China (42m) and the United
            States (30m). And it looks like <b>India</b> is not too far behind
            in the number of people with hypertension (blood pressure) either.
            These might seem like just numbers, but think about your family and
            friends. Do you know someone with either diabetes, fatty liver,
            blood pressure, thyroid problems or excess weight? It’s likely you
            know one or more such people. We all do, and these numbers add up to
            a lot. And it’s starting to have an effect on the next generation
            too. And if we see a little of this, doctors see a lot of it. I’ve
            spent a lot of time talking to doctors, many of whom recommend
            Daily9 health coaching to their patients. Their stories are
            sobering. In short, this is what I hear from them: Diabetes,
            thyroid, fatty liver and other lifestyle diseases have become the
            new normal. These and other diseases that usually occurred after the
            age of 50 are now appearing from the 20s. So the next time you hear
            that <b>healthcare</b> is a booming sector in <b>India</b>, you know
            why. We have an <b>increasing number of sick people</b>. And it’s
            only getting worse.{" "}
          </p>
        </div>

        <div className="process-vs-natural-Div">
          <h2>
            <u>What Went Wrong?</u>
          </h2>
          <img src={ProcessVsNatural} alt="process-vs-natural" />
          <p>
            There have been significant changes in eating patterns, with
            increased consumption of processed foods, sugars, and unhealthy
            fats.
          </p>
          <div className="process-vs-natural-contents">
            <div className="processed-food">
              <span>
                <b>Examples of unhealthy processed foods</b>
              </span>
              <p>
                Eliminating some of the unhealthy processed foods from your diet
                can go a long way to helping you lose unwanted weight and giving
                you a healthier lifestyle altogether.
              </p>

              <ul>
                <li>
                  Here is a short list of some unhealthy processed foods to
                  avoid:
                </li>
                <li>
                  Sugary beverages such as sweetened coffee and tea, energy
                  drinks and soft drinks
                </li>
                <li>Deli meats, hot dogs and sausages</li>
                <li>Frozen pizza and frozen meals</li>
                <li>
                  Packaged snacks such as chips, cookies, crackers and baked
                  goods
                </li>
                <li>Most breakfast cereals</li>
                <li>Canned or instant soups</li>
                <li>Boxed instant pasta products</li>
                <li>Sweetened yogurt</li>
                <li>Bouillon cubes or paste</li>
              </ul>
            </div>
            <div className="natural-food">
              <span>
                <b>Examples of natural and minimally processed foods</b>
              </span>
              <p>
                Below are some natural foods you might incorporate into your
                diet:
              </p>

              <ul>
                <li>
                  Fruits and vegetables (fresh or frozen, without added salt or
                  sugar)
                </li>
                <li>
                  Nut butters such as peanut, almond and cashew butters (without
                  added sugar or oil)
                </li>
                <li>Nuts and seeds (unsalted and unsweetened)</li>
                <li>
                  Frozen meat or fish (without added salt or preservatives)
                </li>
                <li>Canned tuna (in water)</li>
                <li>
                  Low sodium or No Salt Added canned/jarred vegetables, beans
                  and tomatoes
                </li>
                <li>
                  Low sodium or No Salt added broth with minimal additives
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Traditional-Indian-Diet">
          <h2>Is the Traditional Indian Diet to Blame?</h2>
          <div className="Traditional-Indian-Diet-Image">
            <img src={TheSouthIndianDiet} alt="The-South-Indian-diet" />
            <img src={NVLeaf} alt="NV-Leaf" />
          </div>
          <p>
            * No. The traditional Indian diet comprises nutrient-rich foods like
            grains, lentils, vegetables, dairy, seafood, and meats.
          </p>
          <span>
            Indian foods are from long long ago, not recent years. Grandpa's,
            Grandma's are live long and healthy life, the reason is food. And
            it's combined with all vitamins and energy's. basically compared
            meat, vegetables and veg foods are mostly taken in 90's and previous
            decade. But after westren cultural and increasing processed foods
            manufacturing occupay the entire food list, so that today's indian's
            being unhealthy. So in your food meanu must have 95% vegetarian
            foods and 5% non vegetarian. This type of food habits keeps you fit
            and healthy.
          </span>
        </div>

        <div className="How-can-Fix">
          <h2>How Can You Fix This?</h2>
          <div className="How-can-Fix-foods-imgs">
            <img src={vegFoodPlate} alt="veg-food-plate.png" />
            <img src={LunchIndianFoodPlate} alt="Lunch-indian-food-plate.png" />
            <img src={FreshOrange} alt="fresh-orange.png" />
            <img src={Banana} alt="banana.png" />
            <img src={ApplesBasket} alt="apples-basket.png" />
          </div>
          <p>
            Include more vegetables, prioritize protein-rich foods, and consume
            fruits regularly. Avoid excessive sugars and processed oils.
          </p>
        </div>

        <div className="Foods-to-Include">
          <h2>Indian Diet Plan: 10 Foods to Include</h2>
          <ol>
            <li>Green leafy vegetables</li>
            <li>Tomato, carrot, capsicum & cucumber</li>
            <li>Soups made with local Indian vegetables</li>
            <li>Local fruits</li>
            <li>Curd or yogurt</li>
            <li>Spices</li>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Indian snacks like puffed rice and makhana</li>
            <li>Healthy fats like ghee, coconut oil, sesame oil</li>
          </ol>
        </div>
        <div className="StartHere">
          <h2>You Can Start Here Simply 😊</h2>
          <span>Follow these 3 rules for a balanced diet:</span>
          <ul>
            <li>
              include <b>vegetables</b>, prioritize <b>protein</b>, and consume{" "}
              <b>fruits</b> daily.
            </li>
            <li>
              Small changes can lead to significant improvements in health.
            </li>
            <li>
              At each meal, <b>fill 1/3rd of your plate with vegetables</b>{" "}
              (choose local and seasonal options, organic if possible).
            </li>
            <li>
              If you can do half your plate, go for it. Learning to eat more{" "}
              <b>vegetables</b> is a skill for life.
            </li>
            <li>
              Eat a <b>fist of protein rich food</b> with every meal (measure
              the protein against your fist).
            </li>
            <li>
              Aim for <b>2 medium-sized fruits</b> a day (any fruit that is in
              season is ok).
            </li>
            <li>
              Whether it’s a <b>home-cooked Indian</b> meal or you’re ordering
              in, if you follow these 3 rules you will be on the right track.
            </li>
            <li>
              You’ll see and feel the{" "}
              <b>difference within 2 weeks and weight loss</b> is a common side
              effect.
            </li>
          </ul>
        </div>

        <div className="distracted">
          <p>Don’t get distracted!</p>
        </div>
        <div className="FoodtoHomeBtn-Div">
          <Button onClick={clickFoodtoHome}>
            <img src={Guvava} alt="Apple" /> Get Diet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DietFoods;
