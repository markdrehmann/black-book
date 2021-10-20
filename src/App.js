import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/userActions';
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
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={NewUser} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/:id" component={User} />
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
    fetchUsers: () => dispatch(fetchUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
