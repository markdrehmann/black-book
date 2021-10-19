import React, { Component } from 'react';


class NewUser extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submitted???")
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
          <input type='submit' value='Create Account!'/>
        </form>
      </div>
    )
  }
}

export default NewUser