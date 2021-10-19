import React from "react";

class User extends React.Component {
  render() {
    return(
      <h1>some sort of user page {this.props.match.params.id}</h1>
    )
  }
}

export default User