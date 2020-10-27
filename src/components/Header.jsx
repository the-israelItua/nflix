import React, { Component } from "react";
import logo from "../assets/svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-top">
          <img src={logo} alt="logo" className="logo" />
          <NavLink className="signIn-btn" to="/signin">
            Sign In
          </NavLink>
        </div>
        <div className="header-content">
          <h1 className="header-title">
            Unlimited films, TV programmes and more.
          </h1>
          <h5 className="header-text one">
            Watch anywhere. Cancel at any time.
          </h5>
          <h5 className="header-text two">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <input type="email" placeholder="Email address" />
          <br />
          <Link to="/" className="header-btn">
            Get started
            <FaAngleRight />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
