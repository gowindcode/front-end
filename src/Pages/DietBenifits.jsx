import React from "react";
import Heart from "../assets/healthy-heart.png";
import Immunity from "../assets/immune-boost.png";
import DietWomen from "../assets/diet-women.png";
import Bone from "../assets/bone.jpg";
import Diegest from "../assets/diegest.jpg";
import EatHealthy from "../assets/eat-healthy.png";
import Brain from "../assets/brain.png";
import VegPlate from "../assets/veg-plate.png";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function DietBenifits() {
  const navigate = useNavigate();
  //navigate to signup page
  const BenifitsClick2Sugnup = () => {
    navigate("/signup");
  };
  return (
    <div className="Diet-Benifits">
      <div className="Benifits-Container">
        <div className="Benifit-Detail-123">
          <div className="Benifit-Detail-1">
            <div className="Reduced-Risk">
              <h3>
                <u>Reduced risk of disease:</u>
              </h3>
              <p>
                A healthy diet can help reduce the risk of heart diseas's like:
              </p>
              <div className="Benifit-Img-1">
                <img src={Heart} alt="heart" />
                <span>✔ Stroke</span>
                <span>✔ Obesity</span>
                <span>✔ Type 2 diabetes</span>
                <span>✔ Some type of Cancers</span>
              </div>
            </div>
          </div>
          <div className="Benifit-Detail-2">
            <div>
              <h3>
                <u>A healthy diet can have many benefits including:</u>
              </h3>
              <div className="Benifit-Img-2">
                <img src={Immunity} alt="Boost-immunity" />
                <span>✔ Improved immunity provides Energy to entire body.</span>
                <span>✔ A healthy diet can help boost immunity.</span>
                <span>✔ Protuct from most dangerous disease like covid.</span>
                <span>✔ Always keep our body and mood healthy.</span>
              </div>
            </div>
          </div>

          <div className="Benifit-Detail-3">
            <div className="Benifit-Img-3">
              <img src={VegPlate} alt="veg-plate" />
            </div>
            <div className="Benifit-Detail-3-pera">
              <h3 className="Benifit-Detail-3-pera-title">
                <u>Easy and Tasty Diet</u>
              </h3>
              <p className="Benifit-Detail-3-pera-details">
                A healthy diet rich in fruits, vegetables, whole grains and
                low-fat dairy can help to reduce your risk of heart disease by
                maintaining blood pressure and cholesterol levels. High blood
                pressure and cholesterol can be a symptom of too much salt and
                saturated fats in your diet. And this type of foods can help
                always to make your body fit and energetic.
              </p>
            </div>
          </div>
        </div>

        <div className="Benifit-Detail-4">
          <div className="Benifit-Detail-4-details">
            <h3>
              <u>Improved digestion:</u>
            </h3>
            <p>A healthy diet can help improve digestion.</p>
            <p>
              The digestive system breaks down food into simple nutrients such
              as carbohydrates, fats and proteins. These can then be absorbed
              into your blood, so your body can use them for energy, growth and
              repair.
            </p>
            <p>
              The digestive system breaks down food into simple nutrients like
              carbohydrates, fats, and proteins. These nutrients are absorbed
              into the bloodstream from the small intestine and carried to each
              cell in the body.
            </p>
          </div>
          <div className="Benifit-Img-4">
            <img src={Diegest} alt="Diegest" />
          </div>
        </div>
        <div className="Benifit-Detail-5">
          <div className="Benifit-Img-5">
            <img src={Bone} alt="Bone" />
          </div>
          <div>
            <h3>
              <u>Stronger bones and teeth</u>
            </h3>
            <p>
              A diet rich in calcium can help keep your teeth and bones strong
              and can help to slow bone loss (osteoporosis) associated with
              getting older.
            </p>
            <p>
              Protecting your bone health is easier than you think. Understand
              how diet, physical activity and other lifestyle factors can affect
              your bone mass.
            </p>
            <p>
              {" "}
              Strong bones protect against osteoperosis. According to Len
              Kravitz, Ph. D., exercise scientist with the University of New
              Mexico,
              <span>
                men and women over 35 have a 1 percent bone loss each year
              </span>
              . For women, the percentage of bone loss increases to 2 to 3
              percent three to five years after menopause.
            </p>
            <span>✔ Provide support and balance</span>
            <span>✔ Improve posture</span>
            <span>✔ Protect organs</span>
            <span>✔ Support movement</span>
          </div>
        </div>
        <div className="Benifit-Detail-6">
          <div>
            <h3>
              <u>Benefits of healthy diet</u>
            </h3>
            <p>
              The World Health Organization (WHO) recommends eating at least
              five portions of fruit and vegetables per day, excluding potatoes,
              sweet potatoes, cassava, and other starchy roots.
            </p>
            <span>
              A healthy diet can help to Boost mood and give you more energy.
            </span>
            <span>
              Help recover quickly from diseases and trauma Keep skin, teeth,
              and eyes healthy and support muscles.
            </span>
            <span>Support healthy pregnancies and breastfeeding.</span>
            <span>Help the digestive system function.</span>

            <h3>
              <u>Reduces the risk of cancer</u>
            </h3>

            <p>
              One of the biggest benefits of a healthy diet is that it helps in
              preventing some cancer from growing. This is because healthy foods
              contain antioxidants which help in decreasing the risk of getting
              cancer. The antioxidants are responsible for protecting the body
              cells from getting damaged. In addition, it removes all the free
              radicals, which are the main cause of the occurrence of diseases.
              Some healthy foods, such as vegetables, fruits, nuts, legumes,
              etc., contain several phytochemicals responsible for working as
              antioxidants. Mentioned below are some of the foods which have
              high antioxidant levels.
            </p>
          </div>
          <div className="Benifit-Img-6">
            <img src={EatHealthy} alt="eat-healthy" />
          </div>
        </div>
        <div className="Benifit-Detail-7">
          <div className="Benifit-Img-7">
            <img src={Brain} alt="brain" />
          </div>
          <div>
            <h3>
              <u>A balanced diet can Keep your Brain healthy</u>
            </h3>
            <span>
              ✔ Eating at least 5 portions of a variety of fruit and vegetables
              every day.
            </span>
            <span>
              ✔ Basing meals on higher fiber starchy foods like potatoes, bread,
              rice or pasta.
            </span>
            <span>
              ✔ Having some dairy or dairy alternatives (such as soya drinks).
            </span>
            <span>
              ✔ Eating some beans, pulses, fish, eggs, meat and other protein.
            </span>
            <span>
              ✔ A healthy diet also includes consuming less salt, sugars and
              saturated and industrially-produced trans-fats.
            </span>
            <p>
              A healthy diet can help maintain a healthy weight, support your
              immune system, and help repair and strengthen muscles.
            </p>
            <span>
              Some research suggests that a healthy diet has multiple benefits,
              and it also helps protect against cognitive decline. Vitamin D,
              vitamin C, vitamin E, omega fatty acids, fish, polyphenols, and
              flavonoids are considered to be quite beneficial and good for
              memory power. They are responsible for boosting memory power.{" "}
            </span>
          </div>
        </div>

        <div className="Benifit-Detail-8">
          <div className="Benifit-Detail-8-details">
            <h3>
              <u>Better weight management:</u>
            </h3>
            <span>
              ✔ A healthy diet can help you maintain a healthy weight.
            </span>
            <span>✔ It gives you feel good and comfort.</span>
            <span>✔ Wear your desired dresses.</span>
            <h4>Helps in having a healthy weight</h4>

            <p>
              Many chronic health issues occur due to being overweight. People
              can reduce the risk of having a chronic disease by maintaining a
              healthy weight. People having obese or overweight might gain some
              serious diseases such as:
            </p>

            <span>1. Type 2 diabetes</span>
            <span>2. Heart disease</span>
            <span>3. Osteoporosis</span>
            <span>4. Some types of cancers</span>
            <span>
              Everyone should intake healthy foods, including fruits,
              vegetables, Legumes beans, etc.
            </span>
            <span>
              These foods have low-calorie content and are fully loaded with
              healthy and rich nutrients.{" "}
            </span>
            <span>
              On top of that, they have high dietary fibre content. Dietary
              fibre plays an essential role and is responsible for weight
              management.
            </span>
            <span>
              It helps regulate hunger by making people feel full for a longer
              time and is also responsible for eliminating hunger.
            </span>
          </div>
          <div className="Benifit-Img-8">
            <img src={DietWomen} alt="Diet-Women-Img" />
          </div>
        </div>
      </div>
      <div className="Benifits-BTN-DIV">
        <Button onClick={BenifitsClick2Sugnup}>GET DIET</Button>
      </div>
    </div>
  );
}

export default DietBenifits;
