import { deleteNote } from "../actions/userActions";
import { connect } from "react-redux";

const Note = props => {
  const delNo = () => {
    props.deleteNote(props.note, props.history)
  }

  return (
    <li>
      {props.note.text} -- <button onClick={() => { if (window.confirm("Delete this fo' real?")) {delNo()}}}>Delete Note</button> <br/><br/>
    </li>
  )
}

export default connect(null, { deleteNote })(Note)