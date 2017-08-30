import React, { Component } from 'react';




class About extends Component {


  render() {

    return (
      <div>
      <div className="jumbotron title-bg">
          <h1 className="title">About</h1>

          <h3 className="sub-title">find out a little more</h3>
      </div>
      <div className="about-content">
        <p>I am a North Carolina based professional gfx/vfx/web design freelancer, twitch.tv broadcaster, student at The Iron Yard,  future software engineer,  multi-disciplined martial artist, and adept polymath in love with bringing ideas into fruition through creativity.</p>

        <p>My love for gaming and tech led to streaming on Twitch.TV and my current adventure as a student at the Iron Yard to study front-end and back-end software engineering to become fluent in  Javascript, Ruby, Swift, Java, SQL, jQuery, HTML, CSS, and more.</p>
      </div>
      </div>

    );
  }
}

export default About;
