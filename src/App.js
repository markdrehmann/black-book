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
        </Router>
      </div>
    );
}

export default App

// import logo from './logo.svg';

// <footer className="App-footer">
//   <img src={logo} className="App-logo" alt="logo" />
// </footer>