// I THINK THIS WHOLE FILE IS UNNECESSARY

import React from "react";
import { connect } from 'react-redux';
import { logout } from "../../actions/userActions";

// class Logout extends React.Component {
//   componentDidMount() {
//     this.props.logout();
//     console.log("Logout Did Mount", this.props);
//   }

//   render() {
//     return(<div>Logging out...</div>)
//   }
// }

const Logout = ({ logout, history }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout(history)
      }
    }>
      <input className='btn btn--small' type="submit" value="Log Out"/>
    </form>
  )
}


const mapStateToProps = state => {
  return ({
    user: state.user
    // loggedIn: Object.keys(state.user).length === 0 ? true : false,
    // loggedIn: !!state.user
  })
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)