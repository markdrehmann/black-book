import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import NewUser from './components/users/NewUser';
import Login from './components/users/Login';
import NavBar from './components/NavBar';
import Title from './components/Title';

function App() {
  return (
    <Router>
      <div className='App'>
        <Title />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={NewUser} />
        <Route exact path="/login" component={Login} />
        <footer className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
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
