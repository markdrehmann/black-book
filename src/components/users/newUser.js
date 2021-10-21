import React, { Component } from 'react';
// import Home from '../Home';

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
    let user = this.state
    this.props.createUser(user);
    // this.props.history.push(`/user/${user.id}`)
    this.setState({username: '', password: ''})
  }

  render() {
    return(
      <div>
        <h2>Create your account!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/><br/><br/>
          <label>Password: </label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br/><br/>
          <input type='submit' value='No turning back...'/>
        </form>
      </div>
    )
  }
}

export default NewUser