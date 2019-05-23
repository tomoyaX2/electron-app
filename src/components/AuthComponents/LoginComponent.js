import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HANDLE_MINIMIZE } from '../ElectronContants';
const {ipcRenderer} = window.require("electron")



class LoginComponent extends Component {
  render() {
    return(
      <div>
        this is login page
        <button onClick={() => ipcRenderer.send(HANDLE_MINIMIZE)}>Minimize</button>
        <Link to={'/'}> go back</Link>
      </div>
    );
  }
}

export default withRouter(LoginComponent);
