import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import OurWorkPage from './pages/OurWork';
import ContactPage from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './Container.css';

class Container extends Component {

  state = {
    mobileNavActive: false,
    currentPage: 'Home'
  }

  componentDidUpdate = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  handleClickMobileNav = () => {
    this.setState(prevState => {
      return {
        mobileNavActive: !prevState.mobileNavActive
      }
    })
  }

  handleClickPage = currentPage => this.setState({currentPage});

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="Page">
            <Header
              mobileNavActive={this.state.mobileNavActive}
              currentPage={this.state.currentPage}
              handleClickMobileNav={this.handleClickMobileNav}
              handleClickPage={this.handleClickPage}
            />
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/about' component={AboutPage}/>
              <Route path='/services' component={ServicesPage}/>
              <Route path='/our-work' component={OurWorkPage}/>
              <Route path='/contact' component={ContactPage}/>
              <Route path="/" component={ErrorPage}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Container;
