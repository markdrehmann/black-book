import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
          
            {contacts ? <tbody>{contacts.map(contact => <Contact key={contact.id} contact={contact} />)}</tbody> : alert("No Contacts Yet!")}
          
        </table>
      </div>
    )
  }

  render() {
    return(
      <>
        <h3>Your Contacts</h3>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/contacts/new"
          >
          Add New Contact
        </NavLink> <br/><br/>
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