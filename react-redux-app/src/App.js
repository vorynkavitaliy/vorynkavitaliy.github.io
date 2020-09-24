import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './style.sass'
import Header from './Components/Header';
import Contacts from './pages/Contacts';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="my-container">
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/contacts"} component={Contacts}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
