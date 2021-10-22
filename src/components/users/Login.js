import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
    // console.log("handleSubmit in Login.js", this.state);
    this.props.loginUser(this.state);
    // this.props.history.push(`/user/${this.props.currentUserId}`)
    this.setState({username: '', password: ''})
    console.log("handleSubmit IN LOGIN.JS", this.props.user)
  }

  render() {
    
    if (this.props.loggedIn) { return (
        <Redirect push to={`/user/${this.props.currentUserId}`} />
      )} 
    

    return(
      <div>
        <h2>Log In!</h2>
        <h1>{this.props.user}</h1>
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