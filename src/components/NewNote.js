import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNote } from '../actions/userActions';

class NewNote extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let note = {
      ...this.state,
      contact_id: this.props.match.params.id
    }
    this.props.createNote(note, this.props.history);
    this.setState({text: ''})
  }

  render() {
    let idx = Number(this.props.match.params.id)
    let contact = this.props.user.contacts.find(c => c.id === idx)
    return(
      <div>
        <h2>Note about {contact.first_name} {contact.last_name}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Note: </label>
          <textarea type='textarea' name='text' value={this.state.text} onChange={this.handleChange}/><br/><br/>

          <input type='submit' value="They'll never know"/>
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

export default withRouter(connect(mapStateToProps, { createNote })(NewNote))