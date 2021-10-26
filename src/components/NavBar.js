import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from "../actions/userActions";


const NavBar = props => {
  if (props.loggedIn) {
    return (
      <div className='NavBar'>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/user"
      >
        My Profile
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/contacts"
      >
        Contacts
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
        onClick={props.logout}
      >
        Log Out
      </NavLink>
    </div>
    )
  } else {
  return (
    <div className='NavBar'>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/signup"
      >
        Sign Up
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );}
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.user.id
  }
}

export default connect(mapStateToProps, {logout})(NavBar);
