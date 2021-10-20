import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, login, logout } from './actions/userActions';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import NewUser from './components/users/NewUser';
import Login from './components/users/Login';
import NavBar from './components/NavBar';
import Title from './components/Title';
import User from './components/users/User';
import Logout from './components/users/Logout';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    console.log(this.props);
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Title />
          <NavBar loggedIn={this.props.loggedIn} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={NewUser} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/:id" component={User} />
          {/* <Route exact path="/logout" component={Logout} logout={this.props.logout} /> */}
          <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
          </footer>
        </div>
      </Router>
      //     <img src={logo} className="App-logo" alt="logo" />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    loggedIn: state.loggedIn,
    currentUserId: state.currentUserId,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
