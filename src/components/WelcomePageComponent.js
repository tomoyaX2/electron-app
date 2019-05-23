import React, {Component} from 'react';
import {Link} from 'react-router-dom'




class WelcomePageComponent extends Component{
  render() {
    return (
      <div>
        Welcome to my app
        <Link to={'/login'}> Login</Link>
      </div>
    );
  }
}

export default WelcomePageComponent;
