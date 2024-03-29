// import React, { useState } from "react";
// import { Row, Col, Form, Input, Button, message } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import StretchWomem from "../assets/Login/stretch2.png";
// import { API } from "../global";

// function Login() {
//   const navigate = useNavigate();
//   //on finish values if match with back end data, allows to user login
//   const onFinish = (values) => {
//     console.log("Login details:", values);
//     axios
//       .post(`${API}/login`, values)
//       .then((res) => {
//         console.log(res);
//         if (res.data.message) {
//           message.success("Login Successful");
//           localStorage.setItem("user_data", JSON.stringify(res.data));
//           navigate("/home");
//         } else {
//           message.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         message.error("An error occurred while signing up. Please try again.");
//       });
//   };

//   return (
//     <div className="logDiv">
//       <div className="Innerlog-Div">
//         <div className="signin">
//           <p>Login/Signin</p>
//         </div>
//         <Row className="loginForm">
//           <Col lg={8} xs={22}>
//             <Form onFinish={onFinish}>
//               <Form.Item
//                 name="email"
//                 label="Email"
//                 rules={[{ required: true, message: "Please enter your email" }]}
//               >
//                 <Input id="email" placeholder="enter your email" />
//               </Form.Item>
//               <Form.Item
//                 name="password"
//                 label="Password"
//                 rules={[
//                   { required: true, message: "Please enter your password" },
//                 ]}
//               >
//                 <Input.Password
//                   id="password"
//                   placeholder="enter your password"
//                   iconRender={(visible) =>
//                     visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//                   }
//                 />
//               </Form.Item>
//               <div className="LogBTNDiv">
//                 <Button htmlType="submit" className="logBtn">
//                   Login
//                 </Button>
//               </div>
//             </Form>
//           </Col>
//         </Row>
//       </div>
//       <div className="logImgs">
//         <img src={StretchWomem} alt="stretch-women" />
//       </div>
//     </div>
//   );
// }

// export default Login;

// -------------------------------------------------------------------------------------
// Login.jsx
import React, { useState } from "react";
import { Row, Col, Form, Input, Button, message, spin } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StretchWomem from "../assets/Login/stretch2.png";
import { API } from "../global";
import { useLogin } from "../Redux/loginActions"; // Import useLogin hook

function Login() {
  const navigate = useNavigate();
  const handleLogin = useLogin(); // Use the useLogin hook
  const [loading, setLoading] = useState(false);

  //on finish values if match with back end data, allows to user login
  const onFinish = (values) => {
    setLoading(true);
    console.log("Login details:", values);
    axios
      .post(`${API}/login`, values)
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          message.success("Login Successful");
          localStorage.setItem("user_data", JSON.stringify(res.data));
          navigate("/home");
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("An error occurred while signing up. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="logDiv">
      <div className="Innerlog-Div">
        <div className="signin">
          <p>Login/Signin</p>
        </div>
        <Row className="loginForm">
          <Col lg={8} xs={22}>
            <Form onFinish={onFinish}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input id="email" placeholder="enter your email" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password
                  id="password"
                  placeholder="enter your password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <div className="LogBTNDiv">
                <Button htmlType="submit" className="logBtn" onClick={handleLogin}>
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="logImgs">
        <img src={StretchWomem} alt="stretch-women" />
      </div>
    </div>
  );
}

export default Login;
