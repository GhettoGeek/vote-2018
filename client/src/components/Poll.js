import React from 'react'

const Poll = (props) => {
  if (props.address){
    return (
    <div className="poll">
        <h3>{props.address.locationName}</h3>
        <p>{props.address.line1}</p>
        <p>{props.address.city}</p>
        <p>{props.address.state}</p>
        <p>{props.address.zip}</p>

        <p>{props.hours}</p>

        <p>{props.notes}</p>
    </div>
    )
  } 
  else return null
}

export default Poll