import React, { Component } from "react";
import logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { FaAtom, FaCaretDown } from "react-icons/fa";
import Fblogo from "../assets/images/fb-logo.png";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    emailerror: "",
    passworderror: "",
    checked: true,
    lang: "English",
    display: false,
  };

  onInputChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();

    if (!this.state.email) {
      this.setState({ emailerror: "Please enter a valid Email" });
    } else {
      this.setState({ emailerror: "" });
    }
    if (this.state.password.length < 4) {
      this.setState({
        passworderror: "Your password must be between 4 and 60 characters",
      });
    } else {
      this.setState({ passworderror: "" });
    }
  };

  checkboxHandler = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const disp = this.state.display ? "block" : "none";
    return (
      <>
        <div className="header-container">
          <div className="header-top">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="signin-form">
            <div className="form-container">
              <form>
                <h3>Sign In</h3>
                <div className="input-group">
                  <input
                    type="email"
                    required
                    name="email"
                    value={this.state.email}
                    onChange={this.onInputChange}
                    placeholder="Email or phone number"
                  />
                  <p className="login-error-msg">{this.state.emailerror}</p>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    required
                    name="password"
                    value={this.state.password}
                    onChange={this.onInputChange}
                    placeholder="Password"
                  />
                  <p className="login-error-msg">{this.state.passworderror}</p>
                </div>
                <div className="submit-btn" onClick={this.handleSubmit}>
                  <a href="/#" type="submit">
                    Sign In
                  </a>
                </div>
                <label className="checkbox-container">
                  Remember Me
                  <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.checkboxHandler}
                  />
                  <span className="checkmark"></span>
                </label>
                <Link to="/" className="need-help">
                  Need Help
                </Link>
                <div className="form-bottom">
                  <img src={Fblogo} alt="facebook" alt="fblogo" />
                  <Link to="/" className="fb-login-text">
                    Login with Facebook
                  </Link>
                  <br />
                  <br />
                  <span style={{ color: "#999" }}>New to Netflix?</span>&nbsp;
                  <Link to="/signup" className="sign-up-text">
                    Sign up now
                  </Link>
                </div>
              </form>
            </div>
          </div>
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
      </>
    );
  }
}

export default SignIn;
