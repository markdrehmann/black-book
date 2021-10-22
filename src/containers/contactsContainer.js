import React from 'react';
import { connect } from 'react-redux';
import Contact from '../components/Contact';

class ContactsContainer extends React.Component {
  renderContacts = () => {
    let contacts = this.props.contacts
    return(
      <>
        {contacts ? contacts.map(contact => <Contact key={contact.id} {...contact} />) : <p>No Contacts Yet!</p>}
        {/* pass contact through contacts.map, also pass edit and delete contacts... */}
      </>
    )
  }

  render() {
    return(
      <>
        <h3>Your Contacts</h3>
        {/* <NewContact />  */}
        {this.renderContacts()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.user.contacts
  }
}

// probably a mapDispatchToProps for createContact and editContact and deleteContact

export default connect(mapStateToProps)(ContactsContainer)