import React from "react";
import { Row, Col, Form, Input, Button} from 'antd';
import { useNavigate } from "react-router-dom";



function Signup() {

    const navigate = useNavigate();

    //signup after successfull, navigate to home page.
    const signUpRouteClick = () => {

        navigate("/home");
        console.log("Signup button clicked and this is navigate to home page.");
    }
    
    const onFinish = (values) => {

        console.log("This is values result:",values);
    }
    
    return (
        <div className="signupDiv">
            
    <div className="innerSignup">
    <p className="register">Signup/Register</p>
        <div >
            <Row >
                <Col lg={8} xs={22} className="dietRegForm">
                    <Form onFinish={onFinish}>
                        
                        <Form.Item name="firstName" label="First Name">
                            <Input id="firstName" placeholder="enter your first name"/>
                        </Form.Item>
                        <Form.Item name="lastName" label="Last Name">
                            <Input id="lastName" placeholder="enter your last name"/>
                        </Form.Item>
                        <Form.Item name="email" label="Email">
                            <Input id="email" placeholder="enter your email"/>
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                            <Input id="password" placeholder="enter your password"/>
                        </Form.Item>
                        <Form.Item name="mobileNumber" label="Mobile Number">
                            <Input id="mobileNumber" placeholder="enter your 10 digits mobile number"/>
                        </Form.Item>
                        <Form.Item name="address" label="address">
                            <Input id="address" placeholder="enter your address"/>
                        </Form.Item>
                        <Form.Item name="dietFor" label="Diet For">
                            <Input id="dietFor" placeholder="Diet for weight loss or gain"/>
                        </Form.Item>    
                    </Form>
                </Col>
            </Row>

        </div>
        <div className='signBTN-DIV'>
        <Button className='BTN-SIGNUP' onClick={signUpRouteClick}>Signup</Button> 
        </div>
        <div className="validDiv">
        <p>*Please enter valid details.</p>
        </div>
        </div>
        </div>
    )
}

export default Signup