import React, { useState, useEffect } from "react";

const MenuOverlay = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowMenu(true);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  if (!showMenu) {
    return null;
  }

  function scrollToSection(sectionId) {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
  

  return (
    <div className="menu-overlay">
      <ul className="menu-list">
        {/* <li className="menu-item menu-item-left">Home</li> */}

        <li
          className="menu-item menu-item-left"
          onClick={() => scrollToSection("home")}>
          Home
        </li>

        <li
          className="menu-item menu-item-center"
          onClick={() => scrollToSection("about")}>
          About
        </li>

        <li
          className="menu-item menu-item-center"
          onClick={() => scrollToSection("experience")}>
          Experience
        </li>

        <li
          className="menu-item menu-item-center"
          onClick={() => scrollToSection("projects")}>
          Projects
        </li>

        <li
          className="menu-item menu-item-center"
          onClick={() => scrollToSection("contact")}>
          Contact
        </li>

        <li className="menu-item menu-item-right">CV</li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
