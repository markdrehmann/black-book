import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
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
    console.log(this.props);
    this.props.fetchUser();
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
    users: {
      users: state.users.users,
      loggedIn: state.users.loggedIn,
      currentUserId: state.users.currentUserId,
      loading: state.users.loading
    },
    contacts: state.contacts,
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
