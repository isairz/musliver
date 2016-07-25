import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import IntlWrapper from 'Intl/IntlWrapper'
import routes from './routes'

// Base stylesheet
require('./base.scss')

export default function App (props) {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </IntlWrapper>
    </Provider>
  )
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
}
