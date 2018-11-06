import React from 'react'
import Contest from './Contest'
import { Link } from 'react-router-dom'

const Contests = (props) => {

  const contests = props.voterInfo.contests ? props.voterInfo.contests : null

  if (contests) {
    return <div className="contest-wrapper"><h1 className="candidates-h1">Your Candidates</h1>{contests.map(x => <Contest key={x.office} office={x.office} district={x.district.name} candidates={x.candidates} voterInfo={props.voterInfo}/>)}</div>
  } 
  else {
    return <h3 className="error">Oh no! You didn't enter a valid residential address. Navigate back <Link to="/">home</Link> to enter your address, then come back!</h3>
  }

}

export default Contests