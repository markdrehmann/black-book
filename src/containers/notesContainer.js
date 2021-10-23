import React from 'react';
import { connect } from 'react-redux';
import Note from '../components/Note';
// import { NavLink } from 'react-router-dom';


class NotesContainer extends React.Component {
  renderNotes = () => {
    let notes = this.props.contact.notes
    return (
      <ul>
        {notes.map(note => <Note key={note.id} note={note} />)}
      </ul>
    )
  }

  render() {
    console.log(this.props)
    return(
      <>
        <h4>Notes</h4>
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