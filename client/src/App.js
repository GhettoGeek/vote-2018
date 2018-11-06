import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main'
import { withRouter } from 'react-router-dom'
import Typekit from 'react-typekit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typekit kitId="sff0zbx" />
        <nav className="nav"><NavBar></NavBar></nav>
         <Main voterInfo={this.props.voterInfo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {voterInfo: state.voterInformation.voterInformation}
}

export default withRouter(connect(mapStateToProps)(App));
