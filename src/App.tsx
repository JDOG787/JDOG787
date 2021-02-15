import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SideBar from './SideBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <SideBar/>
      <BrowserRouter>
        <Route exact path="/" component={() => <div>hi</div>}/>
      </BrowserRouter>
    </div>
  )
}

export default App;