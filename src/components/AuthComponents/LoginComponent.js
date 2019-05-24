import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';



class LoginComponent extends Component {
  render() {
    return(
      <div>
        this is login page
        <Link to={'/'}> go back</Link>
      </div>
    );
  }
}

export default withRouter(LoginComponent);
