import React from 'react'
import Candidate from './Candidate'

function Contest (props) {
  if (props.office){
    return (
    <div className="contest">
      <h1>Candidates for {props.office} in {props.district}</h1>
      <div className="candidates">
        {props.candidates.map(x => <Candidate key= {x.name} name={x.name} party={x.party} channels={x.channels} />)}
      </div>
    </div>
    )
  } 
  else return null
}

export default Contest