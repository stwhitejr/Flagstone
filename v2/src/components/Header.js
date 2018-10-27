import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.jpg';
import './Header.css';

class Header extends Component {

  state = {
    mobileNavActive: false
  }

  handleClickMobileNav = () => {
    this.setState(prevState => {
      return {
        mobileNavActive: !prevState.mobileNavActive
      }
    })
  }

  render() {
    return (
      <header className="Header">
        <img src={logo} alt="Flagstone Landscape" className="Header-logo" />
        <div className="Header-mobileNavButton" onClick={this.handleClickMobileNav}>X</div>
        <nav className={`Header-nav ${this.state.mobileNavActive && 'Header-nav--active'}`}>
          <Link className="Header-navItem" to="/">Home</Link>
          <Link className="Header-navItem" to="/about">About</Link>
          <Link className="Header-navItem" to="/services">Services</Link>
          <Link className="Header-navItem" to="/our-work">Our Work</Link>
          <Link className="Header-navItem" to="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
}

export default Header;