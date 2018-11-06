import React from 'react'
import Poll from './Poll'
import { Link } from 'react-router-dom'

const Polls = (props) => {
 
  const polls = props.voterInfo.pollingLocations

  if (polls) {
    return (
    <div className="poll-wrapper">      
    <h1>Your Polling Locations</h1>
    {polls.map(x => <Poll key={x.address.locationName} notes={x.notes} address={x.address} hours={x.pollingHours} voterInfo={props.voterInfo}/>)}</div>
    )
  } 
  else if (props.voterInfo.kind && !polls) {
    return <h3 className="error">There are no polling locations available at this time</h3>
  }
  else {
    return <h3 className="error">Oh no! You didn't enter a valid residential address. Navigate back <Link to="/">home</Link> to enter your address, then come back!</h3>
  }

}

export default Polls