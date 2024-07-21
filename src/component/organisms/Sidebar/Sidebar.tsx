import React, { useState } from "react";
import "./style.css";

export const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-sidebar">
      <h2>D&D Tool</h2>
      <div className="sidebar-item">
        <div className="sidebar-title">
          <a>Character</a>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(0)}>
          <div>Data Master</div>
          <span>{activeIndex === 0 ? "-" : "+"}</span>
        </div>
        <div className={`accordion-content ${activeIndex === 0 ? "show" : ""}`}>
          <a>Weapon</a>
          <a>Spell</a>
          <a>Magic Item</a>
          <a>Monstar</a>
        </div>
      </div>
    </div>
  );
};
