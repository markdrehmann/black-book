import React from "react";

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
    console.log(this.props);
  }

  render() {
    return(<div>Logging out...</div>)
  }
}

export default Logout