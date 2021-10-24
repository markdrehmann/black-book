import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/userActions';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state, this.props.history);
    this.setState({username: '', password: ''})
  }

  render() {
    return(
      <div>
        <h2>Log In!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type='text' autoComplete='off' name='username' value={this.state.username} onChange={this.handleChange}/><br/><br/>
          <label>Password: </label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br/><br/>
          <input type='submit' value='Enter at your own risk...'/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !state.user
  }
}

export default withRouter(connect(mapStateToProps, { loginUser })(Login))