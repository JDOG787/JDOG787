import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SideBar from './SideBar';
import './App.css';
import Home from './Home';
import About from './About'
import Cursor from './Cursor';
import NotFound from './404'
import Work from './Work';

const App: React.FC = () => {
  return (
    <div className="App">
        <SideBar/>
        <Cursor/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/work" component={Work}/>
            <Route path="/" component={NotFound}/>
          </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App;