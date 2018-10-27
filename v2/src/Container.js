import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import OurWorkPage from './pages/OurWork';
import ContactPage from './pages/Contact';
import './Container.css';

class Container extends Component {

  state = {
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/services' component={ServicesPage}/>
            <Route path='/our-work' component={OurWorkPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path="/" component={ErrorPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Container;
