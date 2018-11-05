import React from 'react'
import AddressForm from './AddressForm'
import VoterInfo from './VoterInfo'

const Home = (props) => {
  return (
  <>
  <h1 id="vote-h1">Vote 2018</h1>
  <AddressForm/>
  <VoterInfo voterInfo={props.voterInfo} />
  </>)
}

export default Home