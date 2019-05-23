import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import WelcomePageComponent
  from './components/WelcomePageComponent';
import LoginComponent
  from './components/AuthComponents/LoginComponent';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={'/'} render={() => <WelcomePageComponent/>}/>
          <Route  path={'/login'} render={() => <LoginComponent/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
