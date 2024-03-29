import "./App.css";
import RoutersPath from "./RoutersPath";
import Footer from "./Pages/Footer";
import React from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import AppMenu from "./Pages/AppMenu";
import useMenuState from "../src/useMenuState";

function App() {
  const { openMenu, toggleMenu, closeMenu } = useMenuState();

  const drawerProps = {
    placement: "left",
    open: openMenu,
    onClose: closeMenu,
    closable: false,
    className: "Drawer",
  };
  //this helps to know about our device screen width and height
  console.log("Screen:", window.screen.width + "x" + window.screen.height);

  return (
    <div className="App">
      <div className="menuIcon">
        <MenuOutlined className="MenuOutlined" onClick={toggleMenu} />
      </div>
      <span className="headerMenu">
        <AppMenu closeMenu={closeMenu} />
      </span>
      <Drawer {...drawerProps}>
        <AppMenu isInline closeMenu={closeMenu} />
      </Drawer>
      <RoutersPath />
      <Footer />
    </div>
  );
}

export default App;
