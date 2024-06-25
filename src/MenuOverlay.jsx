import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

const MenuOverlay = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 660);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowMenu(true);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 660);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showMenu) {
    return null;
  }

  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="menu-overlay">
      {isSmallScreen ? (
        <Menu right>
          <a
            className="menu-item menu-item-left"
            onClick={() => scrollToSection("home")}>
            Home
          </a>
          <a
            className="menu-item menu-item-center"
            onClick={() => scrollToSection("about")}>
            About
          </a>
          <a
            className="menu-item menu-item-center"
            onClick={() => scrollToSection("experience")}>
            Experience
          </a>
          <a
            className="menu-item menu-item-center"
            onClick={() => scrollToSection("projects")}>
            Projects
          </a>
          <a
            className="menu-item menu-item-center"
            onClick={() => scrollToSection("contact")}>
            Contact
          </a>
          <a
            className="menu-item menu-item-right"
            // href="/path-to-cv.pdf"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            CV
          </a>
        </Menu>
      ) : (
        <ul className="menu-list">
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
          <li className="menu-item menu-item-right">
            <a
            // href="/path-to-cv.pdf" target="_blank" rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuOverlay;
