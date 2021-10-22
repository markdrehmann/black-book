import React from "react";

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
    console.log("Logout Did Mount", this.props);
  }

  render() {
    return(<div>Logging out...</div>)
  }
}

export default Logout