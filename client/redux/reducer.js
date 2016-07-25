import { combineReducers } from 'redux'

// Import Reducers
import intl from './intl'
import manga from './manga'
import post from './post'

// Combine all reducers into one root reducer
export default combineReducers({
  intl,
  manga,
  post,
})
