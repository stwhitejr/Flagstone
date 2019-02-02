import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from '../images/logo.jpg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


// TODO I need to move currentPage logic into the container

const Header = props => (
  <header className="Header-wrap">
    <div className="Header">
      <img src={logo} alt="Flagstone Landscape" className="Header-logo" />
      <div className="Header-mobileNavButton" onClick={props.handleClickMobileNav}><FontAwesomeIcon icon={faBars} /></div>
      <nav className={`Header-nav ${props.mobileNavActive && 'Header-nav--active'}`}>
        {props.pages.map(page => <Link key={page.name} onClick={() => props.handleClickPage(page.name)} className={`Header-navItem ${props.currentPage === page.name && 'Header-navItem--active'}`} to={page.path}>{page.name}</Link>)}
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  pages: PropTypes.array
}

Header.defaultProps = {
  pages: [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Services',
      path: '/services'
    },
    {
      name: 'Our Work',
      path: '/our-work'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]
}

export default Header;