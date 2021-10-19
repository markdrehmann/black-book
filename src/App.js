import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path="/" component={Home} />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </Router>
    // <div className="App">
    //   {/* <header className="App-header"> ((THIS JUST HAS SOME CSS))  */}
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       This is the Black Book, sucka.
    //     </p>
    //   {/* </header> */}
    // </div>
  );
}

export default App;
