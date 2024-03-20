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
import { useSelector } from "react-redux";

export function AppMenu({ isInline = false }) {
  const { closeMenu } = useMenuState();
  const navigate = useNavigate();

  //this is added the item to cart and show qty in badge
  const cartItems = useSelector((state) => state.itemShop.cartItems);
  console.log(cartItems);

  const handleItemClick = (key) => {
    if (key === "signout") {
      // Perform sign out
    } else {
      navigate(key);
      closeMenu();
      // Close the menu after selecting a page
    }
  };

  const menuItems = [
    { icon: <img src={Logo} alt="Logo" className="logo" /> },
    { key: "/" },
    {
      key: "/home",
      icon: <HomeOutlined style={{ fontSize: 22 }} />,
    },
    { label: "Diet Benifits", key: "/diet-benifits" },
    { label: "Diet Foods", key: "/diet-foods" },
    { label: "Diet Tips", key: "/diet-tips" },
    { label: "Products", key: "/all-products" },
    { label: "About us", key: "/aboutus" },
    { label: "Signup", key: "/signup" },
    { label: "Login", key: "/login" },
    {
      key: "/signout",
      icon: <PoweroffOutlined style={{ fontSize: 18 }} />,
    },
    {
      icon: (
        <Badge
          count={cartItems.length}
          style={{ backgroundColor: "red", marginTop: -3, marginRight: -3 }}
        >
          <ShoppingCartOutlined style={{ fontSize: 24 }} />
        </Badge>
      ),
      label: "Cart",
      key: "/cart",
    },
    { key: "/feedback" },
  ];
  
  //for smaller device we can scroll the menu
 
  return (
    <Menu
      onClick={({ key }) => handleItemClick(key)}
      mode={isInline ? "inline" : "horizontal"}
      items={menuItems}
      style={isInline ? { overflowY: "auto" } : {}}
      className="menu"
    />
  );
}
