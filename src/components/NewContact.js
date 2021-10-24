import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createContact } from '../actions/userActions';

class NewContact extends Component {
  state = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let contact = {
      ...this.state,
      user_id: this.props.user.id
    }
    this.props.createContact(contact, this.props.history);
    this.setState({
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      address: ''
    })
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
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { createContact })(NewContact))