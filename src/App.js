import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import LandiingPage from './LandiingPage/index';
import Privacypolicy from './LandiingPage/Privacypolicy';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"  component={LandiingPage} />
        <Route exact path="/Privacypolicy"  component={Privacypolicy} />
      </Switch>
    </div>
  );
}

export default App;
