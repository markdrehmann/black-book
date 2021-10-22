import React from 'react';

class ContactsContainer extends React.Component {
  renderContacts = () => {
    return(
      <>
        <p>this will loop through all contacts and use the Contact component to rock 'em</p>
      </>
    )
  }

  render() {
    return(<p>Contacts Container placeholder...</p>)
  }
}

export default ContactsContainer