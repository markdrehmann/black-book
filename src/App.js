import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import Home from './components/Home';
import NewUser from './components/users/NewUser';
import Login from './components/users/Login';
import NavBar from './components/NavBar';
import Title from './components/Title';
import User from './components/users/User';
import Contacts from './containers/ContactsContainer';
import Contact from './components/Contact';

function App () {
  const history = useHistory();
    return (
      <div className='App'>
        <Router>
          <Title />
          <NavBar />
          <Switch>
            <Route exact path='/login' component={Login} history={history} />
            <Route exact path='/signup' component={NewUser} history={history} />
            <Route exact path='/user' component={User} history={history} />
            <Route exact path='/contacts' component={Contacts} history={history} />
            <Route exact path='/contacts/:id' component={Contact} history={history} />
            <Route exact path='/' component={Home} history={history} />
          </Switch>

          <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
          </footer>
        </Router>
      </div>
    );
}

export default App

// const mapStateToProps = state => {
//   return {
//     users: state.user,
//     loggedIn: state.loggedIn,
//     currentUserId: state.currentUserId,
//     loading: state.loading
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     logout: () => dispatch(logout()),
//     createUser: (user) => dispatch(createUser(user)),
//     loginUser: (user) => dispatch(loginUser(user)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// {/* <NavBar loggedIn={this.props.loggedIn} /> */}
// {/* <Route exact path="/" component={Home} />
//             <Route exact path="/signup" render={(props) => (<NewUser {...props} createUser={this.props.createUser} currentUserId={this.props.currentUserId} />)} />
//             <Route exact path="/login" render={(props) => (<Login {...props} loginUser={this.props.loginUser} user={this.props.user} loading={this.props.loading} />)} />
//             <Route exact path="/users/:id/contacts" render={(props) => (<User {...props} user={this.props.users} />)}/>
//             <Route exact path="/logout" render={(props) => (<Logout {...props} loggedIn={this.props.loggedIn} currentUserId={this.props.currentUserId} logout={this.props.logout} user={this.props.users} />)}/> */}
