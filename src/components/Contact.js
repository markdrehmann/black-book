const Contact = props => {
  // {console.log(props)}
  return (
    <div className='contact'>
      {props.contact.first_name} {props.contact.last_name}
    </div>
  )
}

export default Contact