const Contact = props => {
  // {console.log(props)}
  return (
    <tr>
      <td>{props.contact.first_name} {props.contact.last_name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.address}</td>
    </tr>
  )
}

export default Contact