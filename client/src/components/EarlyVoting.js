import React from 'react'
import Poll from './Poll'
import { Link } from 'react-router-dom'

const EarlyVoting = (props) => {

  const earlyPolls = props.voterInfo.earlyVoteSites

  if (earlyPolls) {
    return (
      <div className="poll-wrapper">      
      <h1>Your Early Polling Locations</h1>
      {earlyPolls.map(x => <Poll key={x.address.locationName} notes={x.notes} address={x.address} hours={x.pollingHours} voterInfo={props.voterInfo}/>)}</div>
      )
  }
  else  {
    return <h3 className="error">Oh no! You didn't enter a valid residential address. Navigate back <Link to="/">home</Link> to enter your address, then come back!</h3>
  }
}

export default EarlyVoting