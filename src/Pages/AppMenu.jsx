import React from "react";
import { Badge, Menu } from "antd";
import {
  HomeOutlined,
  PoweroffOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import useMenuState from "../useMenuState";
import Logo from "../assets/diet-plate.png";
import { connect, useSelector } from "react-redux"; // Import useDispatch

function AppMenu({ isLoggedIn, isInline = false, dispatch }) {
  const { closeMenu } = useMenuState();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch the logout action
    localStorage.removeItem("user_data");
    navigate("/signout");
  };

  // This is added to get the number of cart items
  const cartItems = useSelector((state) => state.itemShop.cartItems);

  const handleItemClick = (key) => {
    if (key === "/signout") {
      handleSignout();
    } else {
      navigate(key);
      closeMenu();
    }
  };

  const offMenu = [
    { icon: <img src={Logo} alt="Logo" className="logo" /> },
    { key: "/" },
    { label: "Signup", key: "/signup" },
    { label: "Login", key: "/login" },
  ];

  const menuItems = [
    { icon: <img src={Logo} alt="Logo" className="logo" /> },
    { icon: <HomeOutlined style={{ fontSize: 22 }} />, key: "/home" },
    { label: "Diet Benifits", key: "/diet-benifits" },
    { label: "Diet Foods", key: "/diet-foods" },
    { label: "Diet Tips", key: "/diet-tips" },
    { label: "Products", key: "/all-products" },
    { label: "Get Consultant", key: "/get-consultant" },
    { label: "About us", key: "/aboutus" },
    {
      key: "/signout",
      icon: (
        <PoweroffOutlined style={{ fontSize: 18 }} onClick={handleSignout} />
      ),
    },
    {
      label: "Cart",
      icon: (
        <Badge
          count={cartItems.length}
          style={{ backgroundColor: "red", marginTop: -3, marginRight: -3 }}
        >
          <ShoppingCartOutlined style={{ fontSize: 24 }} />
        </Badge>
      ),
      key: "/cart",
    },
    { key: "/get-consultant" },
    { key: "/feedback" },
    { key: "/feedback-success" },
    { key: "/bill-success-cash" },
    { key: "/bill-success-card" },
    { key: "/bill-payment" },
    { key: "/fit-chart" },
    { key: "/rating" },
  ];

  return (
 
    <Menu
      onClick={({ key }) => handleItemClick(key)}
      mode={isInline ? "inline" : "horizontal"}
      style={isInline ? { overflowY: "auto" } : {}}
      className="menu"
    >
      {isLoggedIn
        ? menuItems.map((item, index) => (
            <Menu.Item key={item.key || index} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))
        : offMenu.map((item, index) => (
            <Menu.Item key={item.key || index} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
    </Menu>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(AppMenu);
