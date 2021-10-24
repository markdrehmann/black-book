import { deleteNote } from "../actions/userActions";
import { connect } from "react-redux";

const Note = props => {
  const delNo = () => {
    props.deleteNote(props.note, props.history)
  }
  // {console.log(props)}
  return (
    <li>
      {props.note.text} <br/><br/> <button onClick={delNo}>Delete Note</button> <br/><br/>
    </li>
  )
}

export default connect(null, { deleteNote })(Note)