import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';

class Title extends React.Component {
  handleLoading = () => {
    if(this.props.loading) {
      return (
        <div>
          <h1>The Black Book</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Loading...</h2>
        </div>
      )
    } else {
      return(
        <>
          <h1>The Black Book</h1>
        </>
      )
    }
  }
  
  render() {
    return(
      <>
        {this.handleLoading()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Title)