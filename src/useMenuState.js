// useMenuState.js
import { useState } from "react";

function useMenuState() {
  const [openMenu, setOpenMenu] = useState(false);

  // for nav bar menu handle in small screens
  const toggleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return {
    openMenu,
    toggleMenu,
    closeMenu,
  };
}

export default useMenuState;
