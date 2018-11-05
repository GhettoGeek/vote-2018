import React from 'react'
import Contest from './Contest'

const VoterInfo = (props) => {
  
  const contests = props.voterInfo.contests

  if (contests) {
    return <div className="contest-wrapper">{props.voterInfo.contests.map(x => <Contest key={x.office} office={x.office} district={x.district.name} candidates={x.candidates} voterInfo={props.voterInfo}/>)}</div>
  } 
  else if (props.match && !contests) {
    return <h3>Oh no! You didn't enter an address. Navigate back home to enter your address!</h3>
  }
  else return null
}

export default VoterInfo