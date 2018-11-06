import React from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'

const Questions = (props) => {

  const contests = props.voterInfo.contests

  if (contests) {
    const questions = contests.filter(x => x.ballotTitle)
    return (
    <div className="question-wrapper">      
      {questions.map(x => <Question key={x.referendumTitle} refTitle={x.referendumTitle} refSubtitle={x.referendumSubtitle} refText={x.referendumText} voterInfo={props.voterInfo}/>)}
    </div>
    )
  } 
  else if (props.match && !contests) {
    return <h3 className="error">Oh no! You didn't enter a valid residential address. Navigate back <Link to="/">home</Link> to enter your address, then come back!</h3>
  }
  else return null
}

export default Questions