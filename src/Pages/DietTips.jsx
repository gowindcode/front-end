import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import weightCheck from "../assets/Tips/weight-check-1.jpg";
import manMuscle from "../assets/Tips/man-muscle1.png";
import weightReduce from "../assets/Tips/weight2reduce.png";
import slimWomen from "../assets/Tips/slim-women.png";
import dietVegWomen from "../assets/Tips/diet-veg-women.png";
import meter from "../assets/Tips/meter.png";
import check from "../assets/Tips/check.jpg";
import eatAll from "../assets/Tips/eat-all.png";

function DietTips() {
  const navigate = useNavigate();

  const HeightWeightChartClick = () => {
    navigate("/fit-chart"); //navigate to fit chart page
  };

  const getConsultantClick = () => {
    navigate("/signup"); //navigate to signup page
  };

  const text = `Here are some tips for keeping a food diary:
                    Write down what you eat and drink
                    Note the times you eat and portion sizes
                    Add notes about what you were doing while you were eating
                    Be specific about what you eat and drink
                    Include any alcoholic beverages you consume
                    Write down the food or beverage as soon as you consume it
                    Use a smartphone app like Lose It! or MyFitnessPal 
                    A food diary can help you and your doctor understand your eating habits. 
                    It can help you realize what you consume, which can help you make changes to your diet to improve your weight. 
                    Here are some tips for healthy eating:
                    Base your meals on higher fiber starchy carbohydrates
                    Eat lots of fruit and veg
                    Eat more fish, including a portion of oily fish
                    Cut down on saturated fat and sugar
                    Eat less salt: no more than 6g a day for adults
                    Get active and be a healthy weight
                    Do not get thirsty
                    Do not skip breakfast`;

  const lines = text.split("\n");

  const linesWithParagraphs = lines.map((line, index) => (
    <li key={index}>{line}</li>
  ));

  return (
    <div className="Tips-Div">
      <div className="Tips-Details-top">
        <div className="Tips-Details-1">
          <h3>Interpretation of the height and weight chart</h3>
          <p>
            The{" "}
            <a href="fit-chart" onClick={HeightWeightChartClick}>
              height and weight chart
            </a>{" "}
            is meant to help you evaluate the association between the two
            components.
          </p>
          <p>
            {" "}
            And therefore, you must correlate the ratio between the two by
            correctly interpreting your position in the chart. The key takeaway
            from the chart is that you can clearly determine which category you
            fall into.
          </p>
          <div className="Tips-Details-1-inner">
            <img src={weightCheck} alt="weight-check" />
            <div className="Tips-Details-1-inner-span">
              <span>
                <b>
                  <u>Healthy weight</u>
                </b>
                : It means that you are within the optimal ratio range.
              </span>
              <span>
                <b>
                  <u>Underweight</u>
                </b>
                : You are below the standard defined in the chart. You must seek
                professional medical help to find the reason and remedy for it.
              </span>
              <span>
                <b>
                  <u>Overweight</u>
                </b>
                : Your weight is above the standard for your height. It denotes
                that you are at risk of several chronic diseases and have to
                adopt remedial measures for weight loss.
              </span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}
        <div className="Tips-Details-2">
          <h3>Use of the height and weight chart</h3>
          <div className="Tips-Details-2-inner">
            <div className="menImg">
              <img src={manMuscle} alt="men-muscle1" />
            </div>
            <div className="Tips-Details-2-inner-pera">
              <p>
                When you can interpret the ratio, it truly helps to monitor the
                following:
              </p>
              <ul>
                <li>
                  <b>Weight loss</b>
                </li>
                <li>
                  <b>Weight gain</b>
                </li>
                <li>
                  <b>Maintaining ideal weight</b>
                </li>
              </ul>
              <p>
                You can calculate your ideal weight using the below formula...
              </p>
              <p>
                Weight in pounds ={" "}
                <b>
                  5 x BMI + (BMI divided by 5) x (Height in inches minus 60)
                </b>{" "}
              </p>
              <p>
                Weight in kilograms ={" "}
                <b>2.2 x BMI + (3.5 x BMI) x (Height in meters minus 1.5)</b>{" "}
              </p>
            </div>
            <div className="womenImg">
              <img src={weightReduce} alt="weight2reduce" />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}
        <div className="Tips-Details-3">
          <h3>Tips to maintain Ideal weight</h3>
          <div className="Tips-Details-3-inner">
            <div>
              <img src={slimWomen} alt="slim-women" />
            </div>
            <div>
              <p>
                The efficacy of the{" "}
                <a href="fit-chart" onClick={HeightWeightChartClick}>
                  height-weight charts{" "}
                </a>
                is most pronounced in adults as the measurements are
                standardized as compared to children. So, certainly for adults,
                it is less prone to variation, which is crucial in the case of
                growing children, where it can impact the development of the
                child.
              </p>

              <p>
                There are many benefits to maintaining ideal body weight. Being
                either underweight or overweight leads to undesirable health
                outcomes. Poor nutrition, stress and lifestyle changes lead to
                deviation from ideal body weight.
              </p>

              <p>
                For instance, stress causes hormonal imbalance in your body and
                adds extra kilos in your weight. So, enough rest and sound sleep
                are essential for the body.
              </p>
              <ul>
                <b>
                  <u>Adhere to a Healthy Diet</u>
                </b>
                <li>
                  Diet plays a key role in keeping you healthy and fit. A
                  balanced diet offers various health benefits like weight
                  management, good gut health and a strong immune system.
                </li>
                <b>
                  <u>Embrace active habits</u>
                </b>
                <li>
                  Keep yourself fit and energetic throughout the day by
                  following a daily routine of physical activity that suits your
                  schedule. The idea is to balance the calorie intake with
                  calories burned and be active.Read more: Balanced Diet – Foods
                  to Eat and Avoid
                </li>
                <b>
                  <u>Adequate rest</u>
                </b>
                <li>
                  Do not forget the spirit of the adage, which defines a healthy
                  and sound mind in going to bed early and rising early.
                  Firstly, this keeps the biological clock in order and
                  secondly, balances hormone secretion in the body.
                </li>
                <b>
                  <u>Reduce stress</u>
                </b>
                <li>
                  Stress can be the sole cause of various underlying conditions
                  like obesity, hypertension, diabetes etc.
                </li>
              </ul>

              <p>
                In order to shun away stress, you need to follow healthy food
                habits, active lifestyle, and sleep soundly. In addition to it,
                you will further feel relaxed if you avaoid smoking, drinking,
                and excessive intake of caffeine. So, natural, wholesome and
                unprocessed foods that will pave the way for a healthy
                lifestyle.
              </p>
              <p>
                It is better to eat small portions often instead of skipping
                meals. To understand how you can eat meals and still lose weight
                check this diet plan for weight loss.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}
        <div className="Tips-Details-4">
          <h3>Impact of being overweight</h3>
          <div className="Tips-Details-4-inner">
            <div>
              <p>
                It is good to try out the BMI calculator once in a while to keep
                track of your weight. However, relying on BMI alone is not
                advisable..
              </p>

              <p>
                As you know, with age, you are bound to lose muscle mass and
                bone density, and start accumulating more body fat. Factually,
                when compared to men, women carry greater fat content. One of
                the biggest flaws of BMI is that it does not differentiate
                between body fat and muscle mass.
              </p>
              <p>
                Your BMI might be skewed. So, you need to keep a track of your
                BMI in conjunction with the following enhances accuracy for your
                weight management regimen.
              </p>

              <p>
                <b>1. Waist-to-hip-ratio (WHR)</b>
              </p>
              <p>
                Ideally, your waist circumference should measure less than your
                hips. WHR more than 0.90 in men and 0.85 in women indicates
                higher fat deposition around the waist which increases risk of
                chronic diseases.
              </p>

              <p>
                <b>2. Waist-to-height-ratio</b>
              </p>
              <p>
                This ratio is obtained by dividing waist size by height. If your
                waist circumference is more than half your height that makes you
                obese in the middle.
              </p>

              <p>
                <b>3. Body fat percentage</b>
              </p>
              <p>
                The measure calculates the fat content in your body which is
                best determined in consultation with your nutritionist and
                fitness coach.
              </p>

              <p>
                <b>4. Body shape and waist</b>
              </p>
              <p>
                Where you store your body fat is decided by your genes. Normally
                men accumulate fat on their bellies while women on hips, butt or
                thighs
              </p>

              <p>
                Now that you know about it, you are in a better position to
                understand the kind of medical conditions you are likely to
                invite due to unhealthy weight.
              </p>

              <p>
                <b>Health Consequences of Obesity in Adults</b>
              </p>
              <p>
                People who have obesity are at constantly increased risk for
                many diseases and health conditions, including the following:
              </p>

              <ul>
                <li>Hypertension</li>
                <li>Coronary Heart Ailments</li>
                <li>Type 2 Diabetes</li>
                <li>Liver disease</li>
                <li>Cancer</li>
                <li>Breathlessness</li>
              </ul>

              <p>
                <b>Other diseases and health conditions:</b>
              </p>
              <p>
                High LDL cholesterol, low HDL cholesterol, or high levels of
                triglycerides (dyslipidemia) Stroke Gallbladder disease
                Osteoarthritis (a breakdown of cartilage within a joint) Sleep
                apnea and breathing problems Chronic inflammation and increased
                oxidative stress Low quality of life Mental illness such as
                clinical depression, anxiety Body pain and difficulty with
                physical functioning
              </p>
            </div>
            <div className="Tips-Details-4-IMG-Div">
              <img src={dietVegWomen} alt="diet-veg-women" />
              <img src={meter} alt="meter" />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}
        <div className="Tips-Details-5">
          <h3>HealthifyMe Note</h3>
          <div className="Tips-Details-5-inner">
            <div>
              <img src={check} alt="check" />
            </div>
            <div className="Tips-Details-5-inner-content">
              <p>
                The{" "}
                <a href="fit-chart" onClick={HeightWeightChartClick}>
                  height and weight chart{" "}
                </a>
                is a useful indicator of overall health but as we have seen it
                has shortcomings as well.
              </p>
              <p>One cannot rely on BMI alone to assess health.</p>

              <p className="best-Approach">
                The best approach is to look at other parameters such as waist
                hip ratio, waist to height ratio and body fat percentage and not
                rely on BMI alone.
              </p>
              <p>
                Once you have done the right measurements, you can work with a
                fitness coach and nutritionist to help you make lifestyle
                changes, increase physical activity and improve your nutrition.
              </p>

              <div className="get-consultant-BTN-Div">
                <Button onClick={getConsultantClick}>GET CONSULTANT</Button>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}
        <div className="Tips-Details-6">
          <h5>
            A diet chart is a guideline for what to eat, and what not to eat. A
            balanced diet chart includes all food groups and nutrients.
          </h5>
          <div className="Tips-Details-6-inner">
            <div>
              <ul>
                <li>{linesWithParagraphs}</li>
              </ul>
            </div>
            <div className="Tips-Details-6-inner-Img">
              <img src={eatAll} alt="eat-all" />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}
        <div className="Tips-Details-7">
          <h3>Conclusion</h3>
          <p>
            In conclusion, relying entirely on the{" "}
            <a href="fit-chart" onClick={HeightWeightChartClick}>
              height and weight chart{" "}
            </a>
            to determine what your ideal weight is not recommended...
          </p>
          <p>
            However, you have not added up firstly your age, secondly other
            factors like bone, muscle, and fat content in your body composition.
            Once you have a complete analysis, a fitness coach or a diet expert
            can help you take the next steps for optimizing your health.
          </p>
        </div>

        {/* ------------------------------------------------------------------------------ */}
        <div className="Tips-Details-8">
          <p>Our Review Process</p>
          <p>
            The entire review process entails levels of screening and evaluation
            by efficient groups of writers, editors and accredited medical
            experts...
          </p>
          <p>Medically Reviewed by – Dr. Karthick Babu.</p>
          <p>Latest Reviewed On: Feb 5, 2024</p>
        </div>
      </div>
    </div>
  );
}

export default DietTips;
