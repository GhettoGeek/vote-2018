import React from 'react'

const Question = (props) => {
  return (
    <div className="question">
      <h3>{props.refTitle}</h3>
      <p><strong>{props.refSubtitle}</strong></p>
      <p>{props.refText}</p>
    </div>
  )
}

export default Question