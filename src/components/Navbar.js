import React, { Component } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import * as actions from "../redux/actions/auth";
import { connect } from "react-redux";

import { ROUTES } from "../routeConfigs";
import logo from "../images/logo.svg";
import styled from "styled-components";

class Navbar extends Component {
  //static contextType = AuthContext;
  state = {
    isOpen: false,
  };

  handleNavToggle = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };
  render() {
    const { logout, token } = this.props;

    const authLinks = (
      <>
        <NavLink to={ROUTES.LOGIN}>login</NavLink>
        <NavLink to={ROUTES.REGISTER}>signup</NavLink>
      </>
    );

    const logoutLink = (
      <>
        <li onClick={() => logout()}>logOut</li>
        <NavLink to={ROUTES.PROFILE}>{this.props.username}</NavLink>
      </>
    );

    return (
      <NavBarContainer>
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
              <NavLink to={ROUTES.CHECKOUT}>checkout</NavLink>
              {!token && authLinks}
              {token && logoutLink}
            </ul>
          </div>
        </div>
      </NavBarContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    token: state.auth.token,
    username: state.auth.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const NavBarContainer = styled.nav`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.75rem 2rem;
    background: var(--offWhite);
    z-index: 1;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
  }

  .nav-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .nav-icon {
    font-size: 1.5rem;
    color: var(--mainBlack);
    transition: var(--mainTransition);
  }
  .nav-icon:hover {
    color: var(--mainGrey);
  }
  .nav-links {
    height: 0;
    overflow: hidden;
    list-style-type: none;
    transition: var(--mainTransition);
  }
  .nav-links a,
  .nav-links li {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.7rem 0.3rem;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    letter-spacing: var(--mainSpacing);
    text-align: center;
    font-size: 1rem;
    font-weight: 800;
  }
  .nav-links a:hover,
  .nav-links li:hover {
    color: var(--primaryColor);
    cursor: pointer;
    background-color: #ebebe9;
    border-radius: 5px;
    padding: 0.7rem 0.5rem;
  }

  .show-nav {
    height: 150px;
  }

  @media screen and (min-width: 768px) {
    .nav-btn {
      display: none;
    }
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .nav-links {
      height: auto;
      display: flex;
      align-items: center;
    }
    .nav-links a,
    li {
      margin: 0 1rem;
      padding: 0.5rem 0;
    }
  }
`;
