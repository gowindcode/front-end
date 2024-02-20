// import './App.css';
// import RouterPath from './Routers';
// import Footer from './Pages/Footer';
// import React from "react";
// import { Drawer } from 'antd';
// import { MenuOutlined } from "@ant-design/icons";
// import { AppMenu } from "./Pages/AppMenu";
// import useMenuState from './useMenuState';

  
// function App() {
//   const { openMenu, toggleMenu, closeMenu } = useMenuState();
  
//   const drawerProps = {
//     placement: 'left',
//     open: openMenu,
//     onClose: closeMenu,
//     closable: false,
//     className: 'Drawer', // Add className directly within drawerProps
//   };

//   return (
//     <div className="App">
//        <div className='menuIcon'> 
//            <MenuOutlined
//            className="MenuOutlined" 
//            onClick={toggleMenu}
//            />
//        </div>
//             <span className="headerMenu">
//             <AppMenu />
//             </span>
//             <Drawer {...drawerProps}>
//         <AppMenu isInline />
//       </Drawer>
//      <RouterPath/>
//      <Footer/>
//     </div>
   
//   );
// }


// export default App;


// --------------------------------------------------

import './App.css';
import RouterPath from './Routers';
import Footer from './Pages/Footer';       
import React from "react";
import { Drawer } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import { AppMenu } from "./Pages/AppMenu";
import useMenuState from './useMenuState';


function App() {
  const { openMenu, toggleMenu, closeMenu } = useMenuState();
  
  const drawerProps = {
    placement: 'left',
    open: openMenu,
    onClose: closeMenu,
    closable: false,
    className: 'Drawer', // Add className directly within drawerProps
  };
  

  return (
    <div className="App">
      <div className='menuIcon'> 
        <MenuOutlined
          className="MenuOutlined" 
          onClick={toggleMenu}
        />
      </div>
      <span className="headerMenu">
        <AppMenu closeMenu={closeMenu} />
      </span>
      <Drawer {...drawerProps}>
        <AppMenu isInline closeMenu={closeMenu} />
      </Drawer>
      <RouterPath/>
      <Footer/>
    </div>
  );
}

export default App;


      // const handleKnowMoreClick = () => {
  //   // Handle navigation to the Diet-Tips page
  //   window.location.href = "/Diet-Tips";
  // };


    //     <div className="container">
    // //   <div className="content">
    // //     <p>Welcome to FIT and FUN club.</p>
    // //     <p>A lot of fitness guides available here.</p>
    // //     <button onClick={() => { window.location.href = "/Diet-Tips" }}>KNOW MORE</button>
    // //   </div>
    // //   <div className="image-container">
    // //     <img src="https://images01.nicepagecdn.com/page/42/47/css-template-preview-42470.webp" alt="Diagonal" />
    // //   </div>
    // //   <div className="image1-container">
    // //     <img src="https://images01.nicepagecdn.com/page/42/47/css-template-preview-42470.webp" alt="Diagonal" />
    // //   </div>
    // // </div>
