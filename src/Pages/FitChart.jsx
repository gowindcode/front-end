import React from "react";
import { Table, Button } from "antd";
import HeightWomen from "../assets/FitChart/height-women.png";
import Heightmen from "../assets/FitChart/men-height.png";
import { useNavigate } from "react-router-dom";

const womenColumns = [
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "weight",
  },
];

// ----------------------------Height weight details of women---------------------
const womenData = [
  {
    key: "1",
    height: "4′ 6″ (137 cm)",
    weight: "63/77 lb (28.5/34.9 kg)",
  },
  {
    key: "2",
    height: "4′ 7″ (140 cm)",
    weight: "68/83 lb (30.8/37.6 kg)",
  },
  {
    key: "3",
    height: "4′ 8″ (142 cm)",
    weight: "72/88 lb (32.6/39.9 kg)",
  },
  {
    key: "4",
    height: "4′ 9″ (145 cm)",
    weight: "77/94 lb (34.9/42.6 kg)",
  },
  {
    key: "5",
    height: "4′ 10″ (147 cm)",
    weight: "81/99 lb (36.4/44.9 kg)",
  },
  {
    key: "6",
    height: "4′ 11″ (150 cm)",
    weight: "86/105 lb (39/47.6 kg)",
  },
  {
    key: "7",
    height: "5′ 0″ (152 cm)",
    weight: "90/110 lb (40.8/49.9 kg)",
  },
  {
    key: "8",
    height: "5′ 1″ (155 cm)",
    weight: "95/116 lb (43.1/52.6 kg)",
  },
  {
    key: "9",
    height: "5′ 2″ (157 cm)",
    weight: "99/121 lb (44.9/54.9 kg)",
  },
  {
    key: "10",
    height: "5′ 3″ (160 cm)",
    weight: "104/127 lb (47.2/57.6 kg)",
  },
  {
    key: "11",
    height: "5′ 4″ (163 cm)",
    weight: "108/132 lb (49/59.9 kg)",
  },
  {
    key: "12",
    height: "5′ 5″ (165 cm)",
    weight: "113/138 lb (51.2/62.6 kg)",
  },
  {
    key: "13",
    height: "5′ 6″ (168 cm)",
    weight: "117/143 lb (53/64.8 kg)",
  },
  {
    key: "14",
    height: "5′ 7″ (170 cm)",
    weight: "122/149 lb (55.3/67.6 kg)",
  },
  {
    key: "15",
    height: "5′ 8″ (173 cm)",
    weight: "126/154 lb (57.1/69.8 kg)",
  },
  {
    key: "16",
    height: "5′ 9″ (175 cm)",
    weight: "131/160 lb (59.4/72.6 kg)",
  },
  {
    key: "17",
    height: "5′ 10″ (178 cm)",
    weight: "135/165 lb (61.2/74.8 kg)",
  },
  {
    key: "18",
    height: "5′ 11″ (180 cm)",
    weight: "140/171 lb (63.5/77.5 kg)",
  },
  {
    key: "19",
    height: "6′ 0″ (183 cm)",
    weight: "144/176 lb (65.3/79.8 kg)",
  },
  {
    key: "20",
    height: "6′ 1″ (185 cm)",
    weight: "149/182 lb (67.6/82.5 kg)",
  },
  {
    key: "21",
    height: "6′ 2″ (188 cm)",
    weight: "153/187 lb (69.4/84.8 kg)",
  },
  {
    key: "22",
    height: "6′ 3″ (191 cm)",
    weight: "158/193 lb (71.6/87.5 kg)",
  },
  {
    key: "23",
    height: "6′ 4″ (193 cm)",
    weight: "162/198 lb (73.5/89.8 kg)",
  },
];

// ----------------------Height weight details of men---------------------

const menColumns = [
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
  },

  {
    title: "Weight",
    dataIndex: "weight",
    key: "weight",
  },
];
const menData = [
  {
    key: "1",
    height: "4′ 6″ (137 cm)",
    weight: "63/77 lb (28.5/34.9 kg)",
  },
  {
    key: "2",
    height: "4′ 7″ (140 cm)",
    weight: "68/84 lb (30.8/38.1 kg)",
  },
  {
    key: "3",
    height: "4′ 8″ (142 cm)",
    weight: "74/90 lb (33.5/40.8 kg)",
  },
  {
    key: "4",
    height: "4′ 9″ (145 cm)",
    weight: "79/97 lb (35.8/43.9 kg)",
  },
  {
    key: "5",
    height: "4′ 10″ (147 cm)",
    weight: "85/103 lb (38.5/46.7 kg)",
  },
  {
    key: "6",
    height: "4′ 11″ (150 cm)",
    weight: "90/110 lb (40.8/49.9 kg)",
  },
  {
    key: "7",
    height: "5′ 0″ (152 cm)",
    weight: "95/117 lb (43.1/53 kg)",
  },
  {
    key: "8",
    height: "5′ 1″ (155 cm)",
    weight: "101/123 lb (45.8/55.8 kg)",
  },
  {
    key: "9",
    height: "5′ 2″ (157 cm)",
    weight: "106/130 lb (48.1/58.9 kg)",
  },
  {
    key: "10",
    height: "5′ 3″ (160 cm)",
    weight: "112/136 lb (50.8/61.6 kg)",
  },
  {
    key: "11",
    height: "5′ 4″ (163 cm)",
    weight: "117/143 lb (53/64.8 kg)",
  },
  {
    key: "12",
    height: "5′ 5″ (165 cm)",
    weight: "122/150 lb (55.3/68 kg)",
  },
  {
    key: "13",
    height: "5′ 6″ (168 cm)",
    weight: "128/156 lb (58/70.7 kg)",
  },
  {
    key: "14",
    height: "5′ 7″ (170 cm)",
    weight: "133/163 lb (60.3/73.9 kg)",
  },
  {
    key: "15",
    height: "5′ 8″ (173 cm)",
    weight: "139/169 lb (63/76.6 kg)",
  },
  {
    key: "16",
    height: "5′ 9″ (175 cm)",
    weight: "144/176 lb (65.3/79.8 kg)",
  },
  {
    key: "17",
    height: "5′ 10″ (178 cm)",
    weight: "149/183 lb (67.6/83 kg)",
  },
  {
    key: "18",
    height: "5′ 11″ (180 cm)",
    weight: "155/189 lb (70.3/85.7 kg)",
  },
  {
    key: "19",
    height: "6′ 0″ (183 cm)",
    weight: "160/196 lb (72.6/88.9 kg)",
  },
  {
    key: "20",
    height: "6′ 1″ (185 cm)",
    weight: "166/202 lb (75.3/91.6 kg)",
  },
  {
    key: "21",
    height: "6′ 2″ (188 cm)",
    weight: "171/209 lb (77.5/94.8 kg)",
  },
  {
    key: "22",
    height: "6′ 3″ (191 cm)",
    weight: "176/216 lb (79.8/98 kg)",
  },
  {
    key: "23",
    height: "6′ 4″ (193 cm)",
    weight: "182/222 lb (82.5/100.6 kg)",
  },
];

function FitChart() {
  //navigate to products
  const navigate  = useNavigate();
  const backToProductsFromFit = () => {
    navigate('/all-products')
  }
  return (
    <div className="ChartDiv">
      <div className="top-peraDiv">
        <p className="Chart-title1">
          Height-Weight Chart According To Age. A Comprehensive Guide To Health
          And Growth!
        </p>
      </div>
      <div className="InnerChart">
        <div className="leftView">
          <div className="TableUpLeftctn">
            An approximate Height-Weight ratio chart for women
          </div>
          <Table
            rowClassName="custom-row1"
            columns={womenColumns}
            dataSource={womenData}
            pagination={false}
          />
        </div>
        <div className="centerImageDiv">
          <img className="women" src={HeightWomen} alt="height-women.png" />
          <img className="men" src={Heightmen} alt="men-height.png" />
        </div>
        <div className="Rightview">
          <div className="TableUpRightctn">
            An approximate Height-Weight chart for (adult) men.
          </div>
          <Table
            rowClassName="custom-row2"
            columns={menColumns}
            dataSource={menData}
            pagination={false}
          />
        </div>
      </div>
      <div className="FitbottmDetail">
        <p>
          For men with a medium body frame, the <span>ideal weight</span> ranges
          from <span>50-73 kg </span>for heights between{" "}
          <span>5'4" to 6'0"</span>. It is essential to note that these numbers
          are approximate and may vary for individuals with a small or large
          body frame. The above charts, along with Body Mass Index (BMI), can
          give an overview of what is considered healthy in terms of an
          individual's weight in relation to their height. Its calculation is
          categorised as follows:
          <span>BMI below 18.5</span>: Categorised as being{" "}
          <span>underweight</span>.<span> BMI between 18.5 and 24.9</span>:
          Considered as a <span>normal/healthy weight</span>.
          <span> BMI between 25.0 and 29.9</span>: Categorised as being{" "}
          <span>overweight</span>.<span> BMI of 30.0 or higher</span>:
          Classified as <span>obese</span>. While Body Mass Index (BMI) is
          commonly used, its accuracy in measuring health is contested among
          experts. Excess weight doesn't guarantee health issues, but obesity
          can increase the risk of related complications.{" "}
          <span>
            To fully understand one's health and seek guidance, consult a
            healthcare provider.
          </span>
        </p>
      </div>

      <div className="FAQDIV">
        <p>
          Please note the above charts are only approximating values. The
          maturation and growth process during the teenage years varies for each
          individual, including babies, children, and teenagers. If you have
          concerns about your child's height-to-weight ratio, it is recommended
          to consult with your paediatrician or family physician.
        </p>
        <div className="faqs-lists">
          <span> <u>FAQs</u> </span>

          <span>Q. What Is The Ideal Weight In Kg?</span>
          <span>
            A. The ideal weight in kg varies depending on factors such as
            height, age, and body composition. Consult your healthcare provider.
          </span>

          <span>Q. What Is The Correct Weight In Kg And Height For Age?</span>
          <span>
            A. The correct weight in kg and height for age can be determined
            using the Indian height-weight chart according to age but only it's
            only an approximation, thus medical advice is recommended.
          </span>

          <span>Q. Does Weight Matter By Age?</span>
          <span>
            A. Weight does matter by age as it can be an indicator of growth,
            development, and overall health, but it should be assessed in
            conjunction with other factors and under medical supervision.
          </span>
        </div>
        <div className="fitToProductBtn-Div">
        <Button onClick={backToProductsFromFit}>Back to Products</Button>
        </div>
      </div>
    </div>
  );
}

export default FitChart;
