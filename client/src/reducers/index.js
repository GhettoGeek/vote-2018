import voterInformationReducer from './voter_information_reducer'
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  voterInformation: voterInformationReducer
})

export default rootReducer