import React, { Component } from 'react';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './Container.scss';
import './Container.css';

const pages = {
  HOME: 'home',
  ABOUT: 'about',
  SERVICES: 'services',
  OUR_WORK: 'our_work',
  CONTACT: 'contact'
};

class Container extends Component {

  state = {
    page: pages.HOME
  }

  getPage = () => {
    switch (this.state.page) {
      case pages.HOME:
        return (<HomePage />);
        break;
      default:
        return (<ErrorPage />);
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
          {this.getPage()}
        <Footer />
      </div>
    );
  }
}

export default Container;
