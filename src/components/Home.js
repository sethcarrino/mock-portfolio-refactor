import React, { Component } from 'react';
import logo from '../logo.svg';
import BaseLayout from './BaseLayout';


class Home extends Component {


  render() {

    return (
      <BaseLayout>
      <div className="jumbotron title-bg">
          <h1 className="title">Hello. My Name is Seth Carrino</h1>
          
          <h3 className="sub-title">I make things awesome</h3>
      </div>
      </BaseLayout>
    );
  }
}

export default Home;
