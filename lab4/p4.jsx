import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header/Header';
import Switch from './components/dynamic/Dynamic'

ReactDOM.render(
  <div>
    <Header />
    <Switch />
  </div>,
  
  document.getElementById('reactapp'),
);

