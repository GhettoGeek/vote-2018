import React from 'react'
import AddressForm from './AddressForm'

const Home = (props) => {
  if (props.voterInfo.length === 0) {
    return <><h1 id="vote-h1">Vote 2018</h1><AddressForm/></>
  }
  else {
    return <><h1 id="vote-h1">Vote 2018</h1><AddressForm/><br/><h3 class="success">Fetch Complete! Use Navigation to Browse Voter Info</h3></>
  }
 
}
  


export default Home