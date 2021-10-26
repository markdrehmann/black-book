import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Contact from '../components/Contact';

class ContactsContainer extends React.Component {
  alphabetizeContactsFirstName = (arr) => {
    arr.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
  }

  alphabetizeContactsLastName = (arr) => {
    arr.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
  }
  
  componentDidMount() {
    this.alphabetizeContactsLastName(this.props.contacts)
  }
  // This shouldn't be here, but it alphabetizes correctly

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
          
            {contacts ? <tbody>{contacts.map(contact => <Contact key={contact.id} contact={contact} />)}</tbody> : '' }
          
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

export default connect(mapStateToProps)(ContactsContainer)