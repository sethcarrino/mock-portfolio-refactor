import React, { Component } from 'react';

import BaseLayout from './BaseLayout';


class Portfolio extends Component {


  render() {

    return (
      <BaseLayout>
      <div className="jumbotron title-bg">
          <h1 className="title">Portfolio</h1>

          <h3 className="sub-title">some of my work</h3>
      </div>
      </BaseLayout>
    );
  }
}

export default Portfolio;
