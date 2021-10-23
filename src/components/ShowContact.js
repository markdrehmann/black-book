import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowContact extends Component {

  render() {
    let idx = Number(this.props.match.params.id)
    let contact = this.props.user.contacts.find(c => c.id === idx)

    return (
      <>
        <h3>{contact.first_name} {contact.last_name}</h3>
        <p><b>Phone:</b> {contact.phone}<br/><br/>
        <b>Email:</b> {contact.email}<br/><br/>
        <b>Address:</b> {contact.address}</p>
        <p>Edit Contact -- Delete Contact</p>
        <h4>Notes</h4>
        <p>Add Note</p>
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