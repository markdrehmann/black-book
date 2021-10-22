import React from "react";
import { connect } from 'react-redux';
import ContactsContainer from "../../containers/ContactsContainer";

class User extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  // handleLoading = () => {
  //   console.log(this.props.loading)
  //   if(this.props.loading) {
  //     return <div>Loading...</div>
  //   } else {
  //     return(
  //       <>
  //         <h1>Welcome {this.props.user.username}!</h1>
  //         <ContactsContainer />
  //       </>
  //     )
  //   }
  // }

  render() {
    // console.log(this.props)
    return(
      <>
        <h1>Welcome {this.props.user.username}!</h1>
        <ContactsContainer />
      </>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.user,
    loading: state.loading
  })
}

export default connect(mapStateToProps)(User)