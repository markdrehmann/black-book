import { NavLink } from "react-router-dom";

const Contact = props => {
  return (
    <tr>
      <td>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to={`/contacts/${props.contact.id}`}
        >
          {props.contact.first_name} {props.contact.last_name}
        </NavLink>
      </td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.address}</td>
    </tr>
  )
}

export default Contact