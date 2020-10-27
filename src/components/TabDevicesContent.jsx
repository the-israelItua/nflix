import React from "react";
import tvImg from "../assets/images/tab-tv.png";
import tabletImg from "../assets/images/tab-tablet.png";
import macImg from "../assets/images/tab-macbook.png";

const TabDevicesContent = () => {
  return (
    <div className="tab-device-content">
      <div className="tab-top-content">
        <span>
          Watch Tv shows and movies anytime, anywhere - personalized for you{" "}
        </span>
        <button>try it now</button>
      </div>
      <div className="tab-bottom-content">
        <div className="tab-tv">
          <img src={tvImg} alt="tvImg" />
          <h3>Watch on your TV</h3>
          <p>
            Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray, players
            and more.
          </p>
        </div>
        <div className="tab-tablet">
          <img src={tabletImg} alt="tabletImg" />
          <h3>Watch instantly or download for later </h3>
          <p>Available on phone and tablet wherever you go.</p>
        </div>
        <div className="tab-mac">
          <img src={macImg} alt="macimg" />
          <h3>Use any computer</h3>
          <p>Watch right on Netflix.com</p>
        </div>
      </div>
    </div>
  );
};

export default TabDevicesContent;
