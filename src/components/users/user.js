import React from "react";
import { connect } from 'react-redux';
import ContactsContainer from "../../containers/ContactsContainer";

class User extends React.Component {

  render() {
    return(
      <>
        <h1>What up, {this.props.user.username}?</h1>
        <ContactsContainer />
      </>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.user
  })
}

export default connect(mapStateToProps)(User)