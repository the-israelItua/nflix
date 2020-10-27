import React from "react";
import tabImg from "../assets/images/tab-1-pic.png";

const TabDoorContent = () => {
  return (
    <div className="container">
      <div className="tab-door-content">
        <div className="tab-content-text">
          <span>
            If you decide Netflix isn't for you - No problem, No commitment,
            Cancel online anytime
          </span>
          <br />
          <button>Try it now</button>
        </div>
        <img src={tabImg} alt="tabImg" />
      </div>
    </div>
  );
};

export default TabDoorContent;
