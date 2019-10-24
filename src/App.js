import React from 'react';
import {Provider} from 'react-redux'
import logo from './logo.svg';
import store from './redux/cakes/store'
import './App.css';
import CakeContainer from './components/CakeContainer'
require('dotenv').config()

function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <CakeContainer />
    </div>
      </Provider>
  );
}

export default App;
