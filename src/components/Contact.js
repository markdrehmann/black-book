const Contact = props => {
  // {console.log(props)}
  return (
    <div className='contact'>
      {props.first_name} {props.last_name}
    </div>
  )
}

export default Contact