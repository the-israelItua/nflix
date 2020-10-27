import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import checkmark from "../assets/images/Checkmark.png";
import { FaAtom, FaCaretDown } from "react-icons/fa";

class SelectPlan extends Component {
  state = { display: false, lang: "English" };
  render() {
    const disp = this.state.display ? "block" : "none";
    return (
      <div className="plans-page">
        <div className="header-top">
          <Link to="/">
            <img src={logo} alt="alt" className="logo" />
          </Link>
          <NavLink to="/signin" className="signIn-btn">
            Sign In
          </NavLink>
        </div>
        <div className="plans-content">
          <img src={checkmark} alt="checkmark" className="checkmark" />
          <p>
            Step <strong>1</strong> of <strong>3</strong>
          </p>
          <h2>Choose your plan.</h2>
          <div className="check-list">
            <div className="bullet">No Commitment, cancel anytime</div>
            <div className="bullet">
              Everything on Netflix for one low price
            </div>
            <div className="bullet">Unlimited viewing on all your devices</div>
          </div>
          <button>See the plans</button>
        </div>
        <div className="footer signin">
          <span>
            Questions? <Link to="/">Call 1-877-742-1335</Link>
          </span>
          <div className="foot-notes">
            <li>
              <Link to="/">Get Card Terms </Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Privacy Statement</Link>
            </li>
          </div>
          <div
            className="select-lang-btn"
            onClick={() => this.setState({ display: !this.state.display })}
          >
            <FaAtom />
            {this.state.lang}
            <FaCaretDown />
          </div>
          <div className="lang-toggle" style={{ display: disp }}>
            <ul>
              <li
                onClick={() =>
                  this.setState({ lang: "English", display: false })
                }
              >
                English
              </li>
              <li
                onClick={() =>
                  this.setState({ lang: "French", display: false })
                }
              >
                French
              </li>
            </ul>
          </div>
          <p>Netflix Canada</p>
        </div>
      </div>
    );
  }
}

export default SelectPlan;
