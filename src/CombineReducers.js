import { combineReducers } from 'redux'
import repositoriesReducer from 'pages/home/reducer'
import spinnerReducer from 'components/spinner/reducer'

const rootReducer = combineReducers({
  repositoriesReducer,
  spinnerReducer
})

export default rootReducer
