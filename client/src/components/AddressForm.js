import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchVoterInformation } from '../actions/voterInformationActions'

class AddressForm extends React.Component{

  state = {
    address: '',
  }

  handleChange = event => {
    this.setState({
      address: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchVoterInformation(this.state.address)
    this.setState({
      address: ""
    })
  }


  render(){
    return (
      <div className="address-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Enter A Valid Residential Address</label>
            <input onChange={this.handleChange} placeholder='Enter Address...' />
          </Form.Field>
  
    
          <Button type='submit'>Submit</Button>
        </Form>
        {/* {this.state.address}
        {this.props.address} */}
      </div>
    )
  }
} 

const mapStateToProps = state => {
 return {address: state.voterInformation.address}
}

export default connect(mapStateToProps, {fetchVoterInformation})(AddressForm)