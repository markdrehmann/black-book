import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../actions/userActions';
import NotesContainer from '../containers/NotesContainer';

class ShowContact extends Component {

  render() {
    let idx = Number(this.props.match.params.id)
    let contact = this.props.user.contacts.find(c => c.id === idx)
    const delCon = () => {
      this.props.deleteContact(idx, this.props.history)
    }
    const editLink = () => {
      this.props.history.push(`/contacts/${idx}/edit`)
    }

    return (
      <>
        <h3>{contact.first_name} {contact.last_name}</h3>
        <p><b>Phone:</b> {contact.phone}<br/><br/>
        <b>Email:</b> {contact.email}<br/><br/>
        <b>Address:</b> {contact.address}</p>
        <p><button onClick={editLink}>Edit Contact</button> -- <button onClick={() => { if (window.confirm("Delete this fo' real?")) {delCon()}}}>Delete Contact</button></p>
        <NotesContainer contact={contact} history={this.props.history} />
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