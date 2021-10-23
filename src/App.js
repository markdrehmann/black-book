import './App.css';

import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import Home from './components/Home';
import NewUser from './components/users/NewUser';
import Login from './components/users/Login';
import NavBar from './components/NavBar';
import Title from './components/Title';
import User from './components/users/User';
import ContactsContainer from './containers/ContactsContainer';
import ShowContact from './components/ShowContact';
import NewContact from './components/NewContact';

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
            <Route exact path='/contacts' component={ContactsContainer} history={history} />
            <Route exact path='/contacts/new' component={NewContact} history={history} />
            <Route exact path='/contacts/:id' component={ShowContact} history={history} />
            <Route exact path='/' component={Home} history={history} />
          </Switch>
        </Router>
      </div>
    );
}

export default App

// import logo from './logo.svg';

// <footer className="App-footer">
//   <img src={logo} className="App-logo" alt="logo" />
// </footer>