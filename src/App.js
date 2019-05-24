import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './styles/main.css';
import WelcomePageComponent
  from './components/WelcomePageComponent';
import LoginComponent
  from './components/AuthComponents/LoginComponent';
import Navbar
  from './components/utils/Navbar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path={'/'} render={() => <WelcomePageComponent/>}/>
          <Route  path={'/login'} render={() => <LoginComponent/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
