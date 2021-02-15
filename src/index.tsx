import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IconContext } from "react-icons";

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ className:"icon" }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);