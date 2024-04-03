import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

function KnowYours() {
  const [form] = Form.useForm();
  const [gender, setGender] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const navigate = useNavigate();

  const menHeightRanges = [
    [136, 138],
    [139, 141],
    [142, 144],
    [145, 147],
    [148, 150],
    [151, 153],
    [154, 156],
    [157, 159],
    [160, 162],
    [163, 165],
    [166, 168],
    [169, 171],
    [172, 174],
    [175, 177],
    [178, 180],
    [181, 183],
    [184, 186],
    [187, 189],
    [190, 192],
  ];
  const menWeightRanges = [
    [28.5, 34.9],
    [30.8, 37.6],
    [33, 40],
    [35, 42],
    [38, 46],
    [40, 50],
    [43, 53],
    [45, 55],
    [48, 59],
    [50, 61],
    [53, 65],
    [55, 68],
    [58, 70],
    [60, 74],
    [63, 76],
    [65, 80],
    [67, 83],
    [70, 85],
    [72, 89],
  ];

  const womenHeightRanges = [
    [136, 138],
    [139, 141],
    [142, 144],
    [145, 147],
    [148, 150],
    [151, 153],
    [154, 156],
    [157, 159],
    [160, 162],
    [163, 165],
    [166, 168],
    [169, 171],
    [172, 174],
    [175, 177],
    [178, 180],
  ];
  const womenWeightRanges = [
    [28, 35],
    [30, 37],
    [32, 40],
    [33, 41],
    [35, 43],
    [37, 45],
    [39, 47],
    [40, 50],
    [43, 53],
    [45, 55],
    [47, 57],
    [49, 60],
    [51, 62],
    [53, 65],
    [55, 67],
  ];

  const KnowMyFitClick = () => {
    form.validateFields().then((values) => {
      const { gender, weight, height } = values;
      console.log("Height:", height);

      const match = findClosestMatch(gender, height, weight);

      if (match.heightMatched && match.weightMatched) {
        showMessage("success", "Your height and weight are perfect!");
      } else if (match.heightMatched) {
        if (weight < getAverageWeight(gender, height)) {
          showMessage(
            "info",
            "Your height is perfect, but your weight is below average. If you would like to increase your weight, you can reach out to our consultants."
          );
        } else {
          showMessage(
            "warning",
            "Your height is perfect, but your weight is above average. If you would like to reduce your weight, you can reach out to our consultants."
          );
        }
      } else if (match.weightMatched) {
        if (height > getAverageHeight(gender, weight)) {
          showMessage(
            "info",
            "Your weight is almost good, but your height is above average. If you would like to reduce your height, you can reach out to our consultants."
          );
        } else {
          showMessage(
            "warning",
            "Your weight is almost good, but your height is below average. If you would like to increase your height, you can reach out to our consultants."
          );
        }
      } else {
        checkIfAverage(gender, height, weight); // Check if height and weight are average
      }
    });
  };

  const findClosestMatch = (gender, height, weight) => {
    let heightRanges, weightRanges;

    if (gender === "male") {
      //gender check
      heightRanges = menHeightRanges; //men height range
      weightRanges = menWeightRanges; // men weight range
    } else if (gender === "female") {
      heightRanges = womenHeightRanges; //women height range
      weightRanges = womenWeightRanges; //women weight range
    } else {
      return { heightMatched: false, weightMatched: false }; // if Invalid gender
    }

    const heightMatched = heightRanges.some((range) => {
      const [minHeight, maxHeight] = range.map(Number); // Convert string ranges to numbers to check input values
      return height >= minHeight && height <= maxHeight;
    });

    const weightMatched = weightRanges.some((range) => {
      const [minWeight, maxWeight] = range.map(Number); // Convert string ranges to numbers to check input values
      return weight >= minWeight && weight <= maxWeight;
    });

    return { heightMatched, weightMatched };
  };

  const checkIfAverage = (gender, height, weight) => {
    if (gender === "male") {
      for (let i = 0; i < menHeightRanges.length; i++) {
        if (
          height >= menHeightRanges[i][0] &&
          height <= menHeightRanges[i][1]
        ) {
          if (
            weight >= menWeightRanges[i][0] &&
            weight <= menWeightRanges[i][1]
          ) {
            showMessage(
              "info",
              "Your height and weight are average. If you feel the need to adjust your body weight, you can reach out to our consultants."
            );
            return;
          }
        }
      }
    } else if (gender === "female") {
      for (let i = 0; i < womenHeightRanges.length; i++) {
        if (
          height >= womenHeightRanges[i][0] &&
          height <= womenHeightRanges[i][1]
        ) {
          if (
            weight >= womenWeightRanges[i][0] &&
            weight <= womenWeightRanges[i][1]
          ) {
            showMessage(
              "info",
              "Your height and weight are average. If you feel the need to adjust your body weight, you can reach out to our consultants."
            );
            return;
          }
        }
      }
    }
    showMessage(
      "error",
      "Your height and weight are not within the average range."
    );
  };

  const getAverageWeight = (gender, height) => {
    // logic to get average weight based on gender and height
    // For now, returning a placeholder value
    return 60; // Placeholder value
  };

  const getAverageHeight = (gender, weight) => {
    // logic to get average height based on gender and weight
    // For now, returning a placeholder value
    return 170; // Placeholder value
  };

  //show message
  const showMessage = (type, content) => {
    setMessageContent({ type, content });
  };

  //hide message
  const hideMessage = () => {
    setMessageContent("");
  };

  const handleGetConsultant = () => {
    // Handle action when "Get Consultant" button is clicked to navigate /get-consultant page
    navigate("/get-consultant");
    console.log("Get Consultant clicked");
  };

  return (
    <div className="KnowYours-Div">
      <h2>Know Your Fit:</h2>
      <Form form={form}>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="Select your gender" onChange={setGender}>
            <Option value="">Select</Option>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="weight"
          label="Weight"
          tooltip="Weight should be in kilograms!"
          rules={[
            {
              required: true,
              message: "Please enter your weight!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="height"
          label="Height"
          tooltip="Height should be in centimeters!"
          rules={[
            {
              required: true,
              message: "Please enter your height!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      {messageContent && (
        <div className={`message ${messageContent.type}`}>
          <p>{messageContent.content}</p>
          <div className="message-Btns">
            <Button onClick={handleGetConsultant}>Get Consultant</Button>
            <Button onClick={hideMessage}>Ok</Button>
          </div>
          <p className="caution-msg">
            Caution: Please note for this calculation we have used general human
            body weight and height calculations! So please do not consider this
            message is a report of your health. If you want to know more you can
            reach our customercare.
          </p>
        </div>
      )}
      {!messageContent && (
        <div className="KnowYours-Btn">
          <Button onClick={KnowMyFitClick}>Know My Fit</Button>
        </div>
      )}
    </div>
  );
}

export default KnowYours;
