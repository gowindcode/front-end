import React from "react";
import { Row, Col, Form, Input, Button, message } from 'antd';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login1img from "../assets/eqp-img-login.png";
import { API } from "../global";

function Login() {

    const navigate = useNavigate();

    // const loginClick = () => {
    //     navigate("/home");
    //     console.log("Login button clicked.");
    //     alert("Login Successfull.");
    // }
    const onFinish = (values) => {
    
        console.log("Login details:", values);
        axios.post(`${API}/login`, values)
        .then((res) => {
            console.log(res);
           message.success("Login Successfull")
           localStorage.setItem("user_data", JSON.stringify(res.data))
           navigate("/home");
        }).catch((err) => {
        console.log(err);
            message.error("Invalid Credentials")
        })
    }
    return (
        <div className="logDiv">
            <div className="Innerlog-Div">
            <div className="signin">
                <p>Login/Signin</p>
            </div>
            <Row>
                <Col lg={8} xs={22} className="loginForm">
                    <Form onFinish={onFinish}>
                        <Form.Item name="email" label="Email">
                            <Input id="email" placeholder="enter your email"/>
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                            <Input id="password" placeholder="enter your password"/>
                        </Form.Item> 
                        <div className="LogBTNDiv">
                        <Button htmlType="submit" className="logBtn" >Login</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            {/* <div className="LogBTNDiv"> */}
                {/* <Button htmlType="submit" className="logBtn" >Login</Button> */}
            {/* </div> */}
            </div>
          <div className="logImgs">
            <img src={Login1img} alt="login1img"/>
          </div>
        </div>
        
    )
}

export default Login



