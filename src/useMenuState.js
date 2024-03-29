import { useState } from "react";

function useMenuState() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  const closeMenu = (callback) => {
    setOpenMenu(false);
    if (callback && typeof callback === "function") {
      callback(closeMenu);
    }
  };

  return {
    openMenu,
    toggleMenu,
    closeMenu,
  };
}

export default useMenuState;
