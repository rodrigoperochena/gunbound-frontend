// src/components/MenuToggle.jsx
import React from "react";
import "../assets/scss/components/MenuToggle.scss"; // Import SCSS for the navigation

const MenuToggle = ({ isOpen, onToggle }) => {
  return (
    <div
      className={`menu-toggle ${isOpen ? "menu-open" : ""}`}
      title="I carry the useful navigation! 🔗"
      onClick={onToggle} // Trigger the parent's toggle function
    >
      <span className="menu-toggle-menu">menu</span>
      <span className="menu-toggle-close">close</span>
      <div className="menu-toggle-lines"></div>
    </div>
  )
}

export default MenuToggle