import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {

    return (
      <div>
        <nav>
          <div>
            <div className="nav-bar">
              <ul className="navbar-nav">
                <li className="nav-link logo-title">
                  <NavLink to="/" activeClassName="selected">Seth Carrino</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/" activeClassName="selected">Home</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/about" activeClassName="selected">About</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/references" activeClassName="selected">References</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.children}
        <footer className="col-lg-11 footer">
          <span>
            Copyright 2017. All rights Reserved | Follow @sethcarrino on
            <a href="http://twitetr.com/sethcarrino">Twitter</a>
          </span>
        </footer>
      </div>
    );
  }
}
