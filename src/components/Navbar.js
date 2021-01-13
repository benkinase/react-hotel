import React, { Component } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { ROUTES } from "../routes";
import logo from "../images/logo.svg";

export default class Navbar extends Component {
  static contextType = AuthContext;
  state = {
    isOpen: false,
  };

  handleNavToggle = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen }; // this.state=prevState
    });
  };
  render() {
    const { toggle, toggle1 } = this.props;
    const { logMeOut, token, username } = this.context;

    const authLinks = (
      <>
        <li onClick={() => toggle()}>login</li>
        <li onClick={() => toggle1()}>signup</li>
      </>
    );

    const logoutLink = (
      <>
        <li onClick={() => logMeOut()}>logOut</li>
        <li>{username}</li>
      </>
    );

    return (
      <div className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <NavLink to={ROUTES.HOMEPAGE}>
              <img src={logo} alt='logo' />
            </NavLink>
            <button className='nav-btn' onClick={this.handleNavToggle}>
              <FaAlignLeft className='nav-icon' />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <NavLink to={ROUTES.ROOMS}>rooms</NavLink>
            {!token ? authLinks : null}
            {token ? logoutLink : null}
          </ul>
        </div>
      </div>
    );
  }
}
