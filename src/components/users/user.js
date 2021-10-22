import React from "react";

class User extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return(
      <h1>some sort of user page {this.props.user.id}</h1>
    )
  }
}

export default User