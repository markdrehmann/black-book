import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../actions/userActions';
import NotesContainer from '../containers/NotesContainer';
// import { NavLink } from 'react-router-dom';
// need to import edit and delete ... functionality

class ShowContact extends Component {

  render() {
    let idx = Number(this.props.match.params.id)
    let contact = this.props.user.contacts.find(c => c.id === idx)
    const delCon = () => {
      this.props.deleteContact(idx, this.props.history)
    }

    return (
      <>
        <h3>{contact.first_name} {contact.last_name}</h3>
        <p><b>Phone:</b> {contact.phone}<br/><br/>
        <b>Email:</b> {contact.email}<br/><br/>
        <b>Address:</b> {contact.address}</p>
        <p>Edit Contact -- <button onClick={delCon}>Delete Contact</button></p> {/* THESE NEED TO BE MADE INTO DYNAMIC LINKS */}
        <NotesContainer contact={contact}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { deleteContact })(ShowContact)