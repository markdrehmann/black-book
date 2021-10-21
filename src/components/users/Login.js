import React, { Component } from 'react';

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
    console.log("Submitted???");
    console.log(this.state);
    // something like this.props.login(this.state)
    this.setState({username: '', password: ''})
  }

  render() {
    return(
      <div>
        <h2>Log In!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/><br/><br/>
          <label>Password: </label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br/><br/>
          <input type='submit' value='Enter at your own risk...'/>
        </form>
      </div>
    )
  }
}

export default Login