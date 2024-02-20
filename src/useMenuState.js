// useMenuState.js
import { useState } from 'react';

function useMenuState() {
  const [openMenu, setOpenMenu] = useState(false);

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
