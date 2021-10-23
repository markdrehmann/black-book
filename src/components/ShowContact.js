import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowContact extends Component {

  render() {
    console.log(this.props)
    return (
      <>
        <p>Contact Show. {this.props.contact.first_name}. should have the link for editing it or deleting</p>
        {/* <Note /> also, this is where Notes will be */}
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  return {
    contact: state.user.contacts.filter(contact => contact.id === id) // THIS DOESN'T WORK YET
  }
}

export default connect(mapStateToProps)(ShowContact)