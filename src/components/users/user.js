import React from "react";
import { connect } from 'react-redux';
import ContactsContainer from "../../containers/ContactsContainer";

class User extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    // console.log(this.props)
    return(
      <>
        <h1>Welcome {this.props.user.username}!</h1>
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