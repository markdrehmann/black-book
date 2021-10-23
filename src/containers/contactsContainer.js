import React from 'react';
import { connect } from 'react-redux';
import Contact from '../components/Contact';

class ContactsContainer extends React.Component {
  renderContacts = () => {
    let contacts = this.props.contacts
    return(
      <div>
        <table className='contact-table'>
          <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          </thead>
          
            {contacts ? <tbody>{contacts.map(contact => <Contact key={contact.id} contact={contact} />)}</tbody> : 'No Contacts Yet!'}
          
        </table>
          {/* pass contact through contacts.map, also pass edit and delete contacts... */}
      </div>
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