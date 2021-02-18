import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SideBar from './SideBar';
import './App.css';
import Home from "./Home";

const App: React.FC = () => {
  return (
    <div className="App">
        <SideBar/>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
        </BrowserRouter>
    </div>
  )
}

export default App;