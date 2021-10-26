import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../actions/userActions';

class NewUser extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state, this.props.history);
    this.setState({username: '', password: ''})
  }

  render() {
    return(
      <div>
        <h2>Create your account!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type='text' autoComplete='off' name='username' value={this.state.username} onChange={this.handleChange}/><br/><br/>
          <label>Password: </label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br/><br/>
          <input type='submit' value='No turning back...'/>
        </form>
      </div>
    )
  }
}

// This is not currently being used, but potentially, if loggedIn? redirect somewhere else
const mapStateToProps = state => {
  return {
    loggedIn: !state.user
  }
}

export default withRouter(connect(mapStateToProps, { createUser })(NewUser))