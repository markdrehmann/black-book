import React from 'react';
import { connect } from 'react-redux';
import Note from '../components/Note';
import { NavLink } from 'react-router-dom';


class NotesContainer extends React.Component {
  renderNotes = () => {
    let notes = this.props.contact.notes
    if (notes) {
      return (
        <ul>
          {notes.map(note => <Note key={note.id} note={note} history={this.props.history} />)}
        </ul>
      )
    } else {
      return (
        <p>No notes yet!</p>
      )
    }
  }

  render() {
    // console.log(this.props)
    return(
      <>
        <h4>Notes</h4>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to={`/contacts/${this.props.contact.id}/notes/new`}
          >
          Add Note
        </NavLink> <br/><br/>
        {this.renderNotes()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(NotesContainer)