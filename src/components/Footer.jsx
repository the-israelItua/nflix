import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAtom, FaCaretDown } from "react-icons/fa";

class Footer extends Component {
  state = { lang: "English", display: false };
  render() {
    const disp = this.state.display ? "block" : "none";
    return (
      <div className="footer">
        <span>
          Questions? <Link>Call 1-877-742-1335</Link>
        </span>
        <div className="foot-notes">
          <div>
            <ul>
              <li>
                <Link to="/">FAQ </Link>
              </li>
              <li>
                <Link to="/">Investor Relations</Link>
              </li>
              <li>
                <Link to="/">Ways to watch</Link>
              </li>
              <li>
                <Link to="/">Corporate Information</Link>
              </li>
              <li>
                <Link to="/">NetFlix Originals</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Jobs</Link>
              </li>
              <li>
                <Link to="/">Terms of use</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Account</Link>
              </li>
              <li>
                <Link to="/">Reddem Gift Cards</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Speed Test</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Media Center</Link>
              </li>
              <li>
                <Link to="/">Buy Gift Cards</Link>
              </li>
              <li>
                <Link to="/">Cookie Preferences</Link>
              </li>
              <li>
                <Link to="/">Corporate Information</Link>
              </li>
            </ul>
          </div>
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
              onClick={() => this.setState({ lang: "English", display: false })}
            >
              English
            </li>
            <li
              onClick={() => this.setState({ lang: "French", display: false })}
            >
              French
            </li>
          </ul>
        </div>
        <p>Netflix Canada</p>
      </div>
    );
  }
}

export default Footer;
