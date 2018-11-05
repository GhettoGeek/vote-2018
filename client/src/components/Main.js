import React from 'react'
import Home from './Home'
import Candidates from './Candidates'
import VoterInfo from './VoterInfo'
import NavBar from './NavBar'
// import Polls from './Polls'
// import EarlyVoting from './EarlyVoting'
import { Switch, Route } from 'react-router-dom'

export default class Main extends React.Component {
  render (){
    return (
      <div className="main">
   
        <Switch>
          <Route exact path='/' render={routerProps => <Home {...routerProps} voterInfo={this.props.voterInfo} />} />

          <Route path='/candidates' render={routerProps => <VoterInfo {...routerProps} voterInfo={this.props.voterInfo}/>} />

          {/* <Route exact path='/polls' render={routerProps => <Polls {...routerProps} voterInfo={this.props.voterInfo}/>} />

          <Route exact path='/earlyvoting' render={routerProps => <EarlyVoting {...routerProps} voterInfo={this.props.voterInfo}/>} /> */}
        </Switch>
      </div>
    )
  }
}
