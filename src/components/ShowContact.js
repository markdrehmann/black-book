import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowContact extends Component {

  render() {
    let idx = Number(this.props.match.params.id)
    let contact = this.props.user.contacts.find(c => c.id === idx)
    console.log(contact)
    return (
      <>
        <p>Contact Show. {contact.first_name}. should have the link for editing it or deleting</p>
        {/* <Note /> also, this is where Notes will be */}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ShowContact)