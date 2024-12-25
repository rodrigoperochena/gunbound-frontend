// src/components/Navigation.jsx
import React, { useState } from "react";
import MenuToggle from "./MenuToggle";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state

  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
    document.body.classList.toggle("overflow-hidden", !isMenuOpen); // Body overflow control
  };

  return (
    <>
      <MenuToggle isOpen={isMenuOpen} onToggle={handleToggle} />
      <MobileNav isOpen={isMenuOpen} />
    </>
  );
};

export default Navigation;