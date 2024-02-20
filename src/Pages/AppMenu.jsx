// import React from "react";
// import { Menu } from 'antd';
// import { HomeOutlined, PoweroffOutlined } from "@ant-design/icons/lib/icons";
// import { useNavigate } from "react-router-dom";
// import useMenuState from '../useMenuState';

// export function AppMenu({ isInline = false }) {
   
//     const { closeMenu } = useMenuState();
//     const navigate = useNavigate();

//     const handleItemClick = (key) => {
//         if (key === "signout") {
//             // Perform sign out action if needed
//         } else {
//             navigate(key);
//             closeMenu(); // Close the menu after navigation
//         }
//     };

//     return (

//         <Menu
         
//         onClick={({key}) => handleItemClick(key)}
//         style={{
//             backgroundColor: "violet",
//             color: "violet",
//             fontSize: "20px",
//             border: "none",
//         }}
           
//             mode={isInline ? "inline" : "horizontal"}
//             items={[
//                 {
//                     label: "Home", key: "/", 
//                     icon: <HomeOutlined/>,
        
//                 },
//                 {
//                     label: "Diet Benifits", key: "/diet-benifits",
                
//                 },
//                 {
//                     label: "Diet Foods", key: "/diet-foods",
            
//                 },
//                 {
//                     label: "Diet Tips", key: "/diet-tips",
                    
//                 },
//                 {
//                     label: "About us", key: "/aboutus",
                    
//                 },
//                 {
//                     label: "Signup", key: "/register",
                    
//                 },
//                 {
//                     label: "Login", key: "/login",
                  
//                 },
//                 {
//                     label: "Signout", key: "signout", 
//                     icon: <PoweroffOutlined/>,
                   
//                 }
//             ]} />

//     );
// }



// ------------------------------------


// import React, { useState } from "react";
// import { Menu } from 'antd';
// import { HomeOutlined, PoweroffOutlined } from "@ant-design/icons/lib/icons";
// import { useNavigate } from "react-router-dom";
// import useMenuState from '../useMenuState'; // Adjust the import path based on your directory structure

// export function AppMenu({ isInline = false }) {
//     const { toggleMenu, closeMenu } = useMenuState();
//     const navigate = useNavigate();
//     const [pageSelected, setPageSelected] = useState(false);

//     const handleItemClick = (key) => {
//         if (key === "signout") {
//             // Perform sign out action if needed
//         } else {
//             navigate(key);
//             setPageSelected(true); // Set pageSelected to true after navigation
//             if (!isInline) {
//                 closeMenu(); // Close the menu if not in inline mode
//             }
//         }
//     };

//     const menuItems = [
//         { label: "Home", key: "/", icon: <HomeOutlined/> },
//         { label: "Diet Benifits", key: "/diet-benifits" },
//         { label: "Diet Foods", key: "/diet-foods" },
//         { label: "Diet Tips", key: "/diet-tips" },
//         { label: "About us", key: "/aboutus" },
//         { label: "Signup", key: "/register" },
//         { label: "Login", key: "/login" },
//         { label: "Signout", key: "signout", icon: <PoweroffOutlined/> }
//     ];

//     return (
//         <Menu
//             onClick={({key}) => handleItemClick(key)}
//             style={{
//                 backgroundColor: "violet",
//                 color: "violet",
//                 fontSize: "20px",
//                 border: "none",
//             }}
//             mode={isInline ? "inline" : "horizontal"}
//             items={menuItems}
//             defaultOpenKeys={pageSelected ? [] : ['']}
//             selectedKeys={pageSelected ? [] : ['']}
//         />
//     );
// }

// -----------------------------------------------------------------------------


import React from "react";
import { Menu } from 'antd';
import { HomeOutlined, PoweroffOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import useMenuState from '../useMenuState'; // Adjust the import path based on your directory structure
import Logo from '../assets/diet-plate.png';

export function AppMenu({ isInline = false }) {
    const { closeMenu } = useMenuState();
    const navigate = useNavigate();

    const handleItemClick = (key) => {
        if (key === "signout") {
            // Perform sign out action if needed
        } else {
            navigate(key);
            closeMenu();
            // Close the menu after selecting a page
        }
    };

    const menuItems = [
        { icon: <img src={Logo} alt="Logo" className="logo" /> },
        {  key: "/" },
        { label: "Home", key: "/home", icon: <HomeOutlined/> },
        { label: "Diet Benifits", key: "/diet-benifits" },
        { label: "Diet Foods", key: "/diet-foods" },
        { label: "Diet Tips", key: "/diet-tips" },
        { label: "Products", key: "/products" },
        { label: "About us", key: "/aboutus" },
        { label: "Signup", key: "/signup" },
        { label: "Login", key: "/login" },
        { label: "Signout", key: "/signout", icon: <PoweroffOutlined/> },
        {  key: "/feedback" },
        {  key: "/bill" },
        {  key: "/fit-chart" },

    ];

    return (
        <Menu
            onClick={({key}) => handleItemClick(key)}
            mode={isInline ? "inline" : "horizontal"}
            items={menuItems}
            className="menu" style={{color: "white !important"}}
        />
    );
}
