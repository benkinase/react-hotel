import React, { Component } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes";
import logo from "../images/logo.svg";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleNavToggle = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen }; // this.state=prevState
    });
  };
  render() {
    return (
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to={ROUTES.HOMEPAGE}>
              <img src={logo} alt="logo" />
            </NavLink>
            <button className="nav-btn" onClick={this.handleNavToggle}>
              <FaAlignLeft className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <NavLink to={ROUTES.HOMEPAGE}>HOMEPAGE</NavLink>
            <NavLink to={ROUTES.ROOMS}>ROOMS</NavLink>
          </ul>
        </div>
      </div>
    );
  }
}
