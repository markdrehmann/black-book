const Note = props => {
  {console.log(props)}
  return (
    <li>
      {props.note.text}
    </li>
  )
}

export default Note