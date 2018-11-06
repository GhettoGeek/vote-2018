import React from 'react'
import Home from './Home'
import Contests from './Contests'
import Polls from './Polls'
import Questions from './Questions'
import EarlyVoting from './EarlyVoting'
import { Switch, Route } from 'react-router-dom'

export default class Main extends React.Component {
  render (){
    return (
      <div className="main">
   
        <Switch>
          <Route exact path='/' render={routerProps => <Home {...routerProps} voterInfo={this.props.voterInfo} />} />

          <Route path='/candidates' render={routerProps => <Contests {...routerProps} voterInfo={this.props.voterInfo}/>} />

          <Route exact path='/polls' render={routerProps => <Polls {...routerProps} voterInfo={this.props.voterInfo}/>} />

          <Route exact path='/questions' render={routerProps => <Questions {...routerProps} voterInfo={this.props.voterInfo}/>} />

          <Route exact path='/earlyvoting' render={routerProps => <EarlyVoting {...routerProps} voterInfo={this.props.voterInfo}/>} />

        </Switch>
      </div>
    )
  }
}
