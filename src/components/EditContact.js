import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editContact } from '../actions/userActions';

class EditContact extends Component {
  
  state = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: '',
    id: this.props.match.params.id
  }

  componentDidMount() {
    const contact = this.props.user.contacts.find(c => c.id === Number(this.state.id))
    this.setState({
      first_name: contact.first_name,
      last_name: contact.last_name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
      id: contact.id
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Should I put user_id into state to begin with, then i can just pass this.state into editContact()?
  handleSubmit = event => {
    event.preventDefault();
    let contact = {
      ...this.state,
      user_id: this.props.user.id
    }
    this.props.editContact(contact, this.props.history);
  }

  render() {
    return(
      <div>
        <h2>Add a Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input type='text' autoComplete='off' name='first_name' value={this.state.first_name} onChange={this.handleChange}/><br/><br/>
          <label>Last Name: </label>
          <input type='text' autoComplete='off' name='last_name' value={this.state.last_name} onChange={this.handleChange}/><br/><br/>
          <label>Phone: </label>
          <input type='text' autoComplete='off' name='phone' value={this.state.phone} onChange={this.handleChange}/><br/><br/>
          <label>Email: </label>
          <input type='text' autoComplete='off' name='email' value={this.state.email} onChange={this.handleChange}/><br/><br/>
          <label>Address: </label>
          <input type='text' autoComplete='off' name='address' value={this.state.address} onChange={this.handleChange}/><br/><br/>

          <input type='submit' value='Really?'/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps, { editContact })(EditContact))