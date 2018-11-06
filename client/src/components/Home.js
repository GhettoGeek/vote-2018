import React from 'react'
import AddressForm from './AddressForm'
import Contests from './Contests'

const Home = (props) => {
  return (
  <>
  <h1 id="vote-h1">Vote 2018</h1>
  <AddressForm/>
  <Contests voterInfo={props.voterInfo} />
  </>)
}

export default Home