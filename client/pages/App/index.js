import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Import Style
import styles from './App.css'

// Import Components
import Helmet from 'react-helmet'
import DevTools from 'components/DevTools'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import Side from 'components/Layout/Side'

// Import Actions
import { switchLanguage } from 'redux/intl'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = { isMounted: false }
  }

  componentDidMount () {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render () {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title='μ’s Liver'
            titleTemplate='%s - μ’s Liver'
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
          />
          <div className={styles.wallpaper}>
            <div>&nbsp;</div>
            <div className={styles.container}>
              <div className={styles['main-col']}>
                {this.props.children}
              </div>
              <div className={styles['side-col']}>
                <Side />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
}

// Retrieve data from store as props
function mapStateToProps (store) {
  return {
    intl: store.intl,
  }
}

export default connect(mapStateToProps)(App)
