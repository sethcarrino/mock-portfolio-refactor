import React, {Component} from 'react';

import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    return (
      <div>
        <nav>
          <div>
            <div className="nav-bar">
              <ul className="navbar-nav">
                <li className="nav-link logo-title">
                  <Link to="/">Seth Carrino</Link>
                </li>
                <li className="nav-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-link">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.children}
        <footer className="col-lg-11 footer">
          <span>
             Copyright 2017. All rights Reserved | Follow @sethcarrino on <a href="http://twitetr.com/sethcarrino">Twitter</a>
          </span>
        </footer>
      </div>
    );
  }
}
